import puppeteer from 'puppeteer';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, 'temporary screenshots');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';

function nextIndex() {
  try {
    const files = readdirSync(outDir).filter(f => f.startsWith('screenshot-') && f.endsWith('.png'));
    const nums = files.map(f => parseInt(f.replace('screenshot-','').split(/[-\.]/)[0])).filter(n => !isNaN(n));
    return nums.length ? Math.max(...nums) + 1 : 1;
  } catch { return 1; }
}

const idx  = nextIndex();
const file = join(outDir, `screenshot-${idx}${label}.png`);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 }); // iPhone 14 Pro
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1200));
await page.screenshot({ path: file, fullPage: false });
await browser.close();

console.log(`Screenshot saved: ${file}`);
