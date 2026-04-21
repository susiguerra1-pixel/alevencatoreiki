// Render each .slide in carrossel.html to a 1080x1350 PNG
const { chromium } = require('playwright-chromium');
const path = require('path');

const HTML_FILE = '/sessions/optimistic-keen-faraday/mnt/alevencatoreiki/docs/agents/runs/2026-04-21-cansaco-invisivel/carrossel.html';
const OUT_DIR   = '/sessions/optimistic-keen-faraday/mnt/alevencatoreiki/docs/agents/runs/2026-04-21-cansaco-invisivel/slides';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1350 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  await page.goto('file://' + HTML_FILE, { waitUntil: 'networkidle' });

  // wait for web fonts to be ready
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  });
  // small extra wait so gradients paint cleanly
  await page.waitForTimeout(500);

  for (let i = 1; i <= 10; i++) {
    const id = 'slide-' + String(i).padStart(2, '0');
    const el = await page.$('#' + id);
    if (!el) { console.error('missing', id); continue; }
    const file = path.join(OUT_DIR, id + '.png');
    await el.screenshot({ path: file, omitBackground: false });
    console.log('wrote', file);
  }

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
