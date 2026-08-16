/* ═══════════════════════════════════════════════════════════
   OG PREVIEW CARDS  —  node make-og-images.mjs

   Renders the link-preview images WhatsApp / iMessage / Facebook show when
   someone shares a page of this site, and writes them to brand_assets/:
     og-book.jpg   → book.html   (the availability link we send clients)
     og-home.jpg   → index.html + car.html fallback

   Run this by hand after changing the card design, then commit the PNGs.
   Deliberately NOT in CI: the art is static, so a scheduled job would only
   produce empty commits — and it would race the 6-hourly build-share-pages bot
   for the same git push.

   Notes for future edits:
   • 1200×630 at deviceScaleFactor 1. A 2× shot is ~1MB and WhatsApp drops
     images over ~300KB — the size check at the bottom guards that.
   • JPEG, not PNG: the card is all gradients plus film grain, and random noise
     is the worst case for PNG's lossless compression (the same art was 453KB
     as a PNG vs ~90KB here, with no visible difference at preview size).
   • The logo is inlined as a data: URI so no local web server is needed
     (the site's serve.mjs and the fleet manager's both want port 3000).
   • Fonts must be awaited (document.fonts.ready) or the headline renders in a
     fallback face and the whole card looks off-brand.
   • Tokens are copied from book.html's :root — keep them in sync by hand.
   ═══════════════════════════════════════════════════════════ */
import puppeteer from 'puppeteer';
import { readFileSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assets = join(__dirname, 'brand_assets');

const W = 1200, H = 630, MAX_KB = 280;

/* Inline the logo so the page needs no network/server. The *dark* asset is the
   one drawn for dark backgrounds (white + orange artwork on a black plate);
   `mix-blend-mode: screen` in the card CSS drops that plate out so the mark sits
   directly on the gradient instead of inside a visible black rectangle. */
const logo = 'data:image/png;base64,' +
  readFileSync(join(assets, 'udrive-logo-dark.png')).toString('base64');

/* Same grain filter as book.html's body::after, at card scale. */
const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")";

/* eyebrow + headline (one italic gold phrase) + subline */
const CARDS = {
  'og-book.jpg': {
    eyebrow: 'Live availability',
    dot: true,
    head: 'See which cars are <em>free for your dates</em>',
    /* Explicit break: an inline "·" separator kept landing at the line end. */
    sub: 'Tirana (TIA) &amp; Pristina (PRN)<br>Reserve on WhatsApp in one tap',
  },
  'og-home.jpg': {
    eyebrow: 'Albania &amp; Kosovo',
    dot: false,
    head: 'Rent a car with <em>nothing hidden</em>',
    sub: 'No credit card needed<br>Cash deposit returned on key handover',
  },
};

const html = (c) => `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,500;9..40,600&display=swap" rel="stylesheet">
<style>
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  :root{
    --bg:#07070f; --or:#EA5A1E; --or-l:#FF7A3D; --gold-l:#f0c96a;
    --txt:#eeeef5; --muted:#7878a0; --line:rgba(255,255,255,.07); --ok:#4ade80;
  }
  body{width:${W}px;height:${H}px;background:var(--bg);color:var(--txt);
       font-family:'DM Sans',sans-serif;overflow:hidden;position:relative}
  /* layered radials — the same warm-orange / cool-gold pairing as the site hero */
  .glow{position:absolute;inset:0;
    background:
      radial-gradient(900px 500px at 12% -10%, rgba(234,90,30,.28) 0%, transparent 62%),
      radial-gradient(700px 400px at 96% 112%, rgba(212,168,67,.14) 0%, transparent 66%),
      radial-gradient(600px 420px at 78% 8%, rgba(38,32,82,.5) 0%, transparent 70%);}
  .grain{position:absolute;inset:0;background-image:${GRAIN};opacity:.5}
  .edge{position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--or)}
  /* The whole stack has to fit 630px exactly — body is overflow:hidden, so any
     excess silently clips the footer. Trim here first if you add a line. */
  .wrap{position:relative;height:100%;padding:54px 84px 52px;display:flex;flex-direction:column}
  /* align-self stops the flex column from stretching the img to full width
     (align-items defaults to stretch, which beats width:auto).
     The asset carries generous black padding around the mark, so the box is
     oversized and pulled in with negative margins to sit optically flush. */
  .logo{height:172px;width:auto;display:block;align-self:flex-start;
        mix-blend-mode:screen;margin:-44px 0 0 -22px}
  .eyebrow{display:flex;align-items:center;gap:11px;margin-top:auto;
    font-size:19px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--or-l)}
  .dot{width:10px;height:10px;border-radius:50%;background:var(--ok);
       box-shadow:0 0 0 5px rgba(74,222,128,.16)}
  h1{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:78px;line-height:1.05;
     letter-spacing:-.022em;margin:16px 0 20px;max-width:16ch}
  h1 em{font-style:italic;color:var(--gold-l)}
  /* Lines are broken by hand in the copy (see CARDS) — keep max-width wide
     enough that the <br> is what governs, not the wrap. */
  .sub{font-size:26px;font-weight:300;color:var(--muted);line-height:1.5;max-width:44ch}
  .foot{margin-top:26px;padding-top:22px;border-top:1px solid var(--line);
        display:flex;align-items:baseline;justify-content:space-between}
  .domain{font-size:25px;font-weight:600;color:var(--txt);letter-spacing:-.01em}
  .domain span{color:var(--or)}
  .tag{font-size:19px;color:var(--muted)}
</style></head><body>
  <div class="glow"></div><div class="grain"></div><div class="edge"></div>
  <div class="wrap">
    <img class="logo" src="${logo}" alt="">
    <div class="eyebrow">${c.dot ? '<span class="dot"></span>' : ''}${c.eyebrow}</div>
    <h1>${c.head}</h1>
    <p class="sub">${c.sub}</p>
    <div class="foot">
      <div class="domain">rihladrive<span>.com</span></div>
      <div class="tag">UDrive Car Rental</div>
    </div>
  </div>
</body></html>`;

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });

for (const [file, card] of Object.entries(CARDS)) {
  /* 'load' not 'networkidle0': with the webfont CSS already cached, the second
     card never reaches network-idle and setContent times out. */
  await page.setContent(html(card), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);      // else the serif falls back
  const out = join(assets, file);
  await page.screenshot({ path: out, type: 'jpeg', quality: 88 });
  const kb = Math.round(statSync(out).size / 1024);
  const flag = kb > MAX_KB ? `⚠️  over ${MAX_KB}KB — WhatsApp may skip it` : 'ok';
  console.log(`${file}  ${W}×${H}  ${kb}KB  ${flag}`);
}

await browser.close();
console.log('\nDone. Commit brand_assets/og-*.jpg, then re-scrape:');
console.log('  https://developers.facebook.com/tools/debug/  → Scrape Again');
console.log('WhatsApp caches previews ~7 days: test with book.html?x=1 to bypass it.');
