#!/usr/bin/env node
// Generates one tiny static stub HTML file per car at c/<slug>.html.
// Each stub carries proper OpenGraph/Twitter meta tags (so WhatsApp,
// iMessage, Facebook etc. show the right car photo + name in link
// previews) and instantly redirects real visitors to car.html?car=<slug>.
//
// Reads cars from Firestore via the public REST API — no auth needed
// because the live site already reads `cars` anonymously.

import { mkdir, writeFile, readdir, unlink } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(ROOT, 'c');
const SITE = 'https://rihladrive.com';
const PROJECT_ID = 'udrive-3ced9';

// ── Fetch all cars from Firestore REST API ──────────────────────
async function fetchCars() {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/cars?pageSize=300`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Firestore fetch failed: ${res.status} ${res.statusText}`);
  const json = await res.json();
  const docs = json.documents || [];
  return docs.map(doc => {
    const id = doc.name.split('/').pop();
    const f = doc.fields || {};
    return {
      id,
      name:    fv(f.name),
      year:    fv(f.year),
      variant: fv(f.variant),
      ppd:     Number(fv(f.ppd)) || 0,
      hidden:  fv(f.hidden) === true,
      order:   Number(fv(f.order)) || 0,
      imgs:    Array.isArray(fv(f.imgs)) ? fv(f.imgs) : [],
      desc:    fv(f.desc) || '',
    };
  }).sort((a, b) => a.order - b.order);
}

// Unwrap Firestore typed value (stringValue, integerValue, arrayValue, etc.)
function fv(v) {
  if (v == null) return '';
  if ('stringValue' in v) return v.stringValue;
  if ('integerValue' in v) return Number(v.integerValue);
  if ('doubleValue' in v) return v.doubleValue;
  if ('booleanValue' in v) return v.booleanValue;
  if ('arrayValue' in v) return (v.arrayValue.values || []).map(fv);
  if ('mapValue' in v) {
    const o = {};
    for (const [k, val] of Object.entries(v.mapValue.fields || {})) o[k] = fv(val);
    return o;
  }
  return '';
}

// ── Slug logic — mirrors window.carSlug in cars-data.js ─────────
function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
// Name + variant only — the year stays out of shared URLs.
function carSlug(c, all) {
  const key = o => slugify(`${o.name} ${o.variant || ''}`);
  const base = key(c);
  const twins = all.filter(o => key(o) === base);
  if (twins.length > 1 && c.id != null) {
    const idTail = String(c.id).toLowerCase().replace(/[^a-z0-9]/g, '').slice(-4);
    if (idTail) return `${base}-${idTail}`;
  }
  return base;
}
// The old name + year + variant slug (mirrors window.carLegacySlug). Links
// already sent out use it, so each car keeps a stub at that path too.
function carLegacySlug(c, all) {
  const base = slugify(`${c.name} ${c.year || ''} ${c.variant || ''}`);
  if (c.variant) return base;
  const sameKey = all.filter(o =>
    o.name === c.name && String(o.year) === String(c.year) && !o.variant
  );
  if (sameKey.length > 1 && c.id != null) {
    const idTail = String(c.id).toLowerCase().replace(/[^a-z0-9]/g, '').slice(-4);
    if (idTail) return `${base}-${idTail}`;
  }
  return base;
}

// ── Cloudinary delivery URL normalisation (mirrors toDeliveryUrl) ─
function toDeliveryUrl(url) {
  if (!url || typeof url !== 'string' || !url.includes('/upload/')) return url;
  let out = url.replace(/\.(heic|heif)(\?.*)?$/i, '.jpg$2');
  if (!/\/upload\/(f_auto|.*[,/]f_auto)/.test(out)) {
    out = out.replace('/upload/', '/upload/f_auto,q_auto/');
  }
  return out;
}

// ── Link-preview image ───────────────────────────────────────────
// WhatsApp drops the thumbnail when og:image is too heavy (full-size listing
// photos run 0.5–2.3MB), so the preview gets a 1200×630 JPEG crop instead —
// the standard OG size, ~100–250KB. g_auto keeps the car in frame.
const OG_TRANSFORM = 'c_fill,g_auto,w_1200,h_630,q_auto,f_jpg';
function ogImage(url) {
  const d = toDeliveryUrl(url);
  if (d && d.includes('/upload/f_auto,q_auto/')) {
    return { url: d.replace('/upload/f_auto,q_auto/', `/upload/${OG_TRANSFORM}/`), sized: true };
  }
  return { url: d, sized: false };
}

// ── HTML escaping for safe attribute interpolation ──────────────
function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function stubHtml(car, slug) {
  const title = `${car.name} — UDrive Car Rental`;
  const ogTitle = `${car.name} — UDrive`;
  // Just the price under the title; no line at all when the car has none.
  const desc = car.desc
    ? car.desc.slice(0, 200)
    : (car.ppd ? `From ${car.ppd}€/day.` : '');
  const descTag = (attr, name) => desc ? `\n<meta ${attr}="${name}" content="${esc(desc)}">` : '';
  const og = car.imgs[0] ? ogImage(car.imgs[0]) : { url: `${SITE}/brand_assets/Modern%20UDrive%20car%20rental%20logo.png`, sized: false };
  const img = og.url;
  const imgMeta = og.sized ? `
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">` : '';
  const target = `/car.html?car=${encodeURIComponent(slug)}`;
  // Shared client links land in focus mode (hides fleet nav). Canonical/OG stay clean.
  const redirectTarget = `${target}&focus=1`;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(title)}</title>${descTag('name', 'description')}
<link rel="canonical" href="${SITE}${target}">

<meta property="og:type" content="website">
<meta property="og:site_name" content="UDrive Car Rental">
<meta property="og:title" content="${esc(ogTitle)}">${descTag('property', 'og:description')}
<meta property="og:image" content="${esc(img)}">${imgMeta}
<meta property="og:url" content="${SITE}/c/${esc(slug)}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(ogTitle)}">${descTag('name', 'twitter:description')}
<meta name="twitter:image" content="${esc(img)}">

<meta http-equiv="refresh" content="0; url=${redirectTarget}">
<script>location.replace(${JSON.stringify(redirectTarget)});</script>
</head>
<body><p>Redirecting to <a href="${redirectTarget}">${esc(ogTitle)}</a>…</p></body>
</html>
`;
}

// ── Main ────────────────────────────────────────────────────────
const cars = (await fetchCars()).filter(c => !c.hidden && c.name);
await mkdir(OUT_DIR, { recursive: true });

const wanted = new Set();
let written = 0;
for (const car of cars) {
  const slug = carSlug(car, cars);
  if (!slug) continue;
  wanted.add(`${slug}.html`);
  await writeFile(join(OUT_DIR, `${slug}.html`), stubHtml(car, slug));
  written++;
}
// Old year-bearing paths: same preview, redirecting to the new slug. Written
// after the current ones so they can never overwrite a car's real page.
for (const car of cars) {
  const slug = carSlug(car, cars);
  const legacy = carLegacySlug(car, cars);
  if (!slug || !legacy || wanted.has(`${legacy}.html`)) continue;
  wanted.add(`${legacy}.html`);
  await writeFile(join(OUT_DIR, `${legacy}.html`), stubHtml(car, slug));
}

// Clean up stubs for cars that no longer exist / got hidden
const existing = await readdir(OUT_DIR).catch(() => []);
let removed = 0;
for (const f of existing) {
  if (f.endsWith('.html') && !wanted.has(f)) {
    await unlink(join(OUT_DIR, f));
    removed++;
  }
}

console.log(`✔ wrote ${written} share pages${removed ? `, removed ${removed} stale` : ''}`);
