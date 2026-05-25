/**
 * render-ebook.js
 * Gera public/ebook-ansiedade.pdf a partir de docs/ebook-ansiedade.html
 * Uso: node docs/render-ebook.js
 */

const { chromium } = require('playwright-chromium');
const path = require('path');

async function render() {
  console.log('🔄 Iniciando renderização do ebook...');

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Carrega o HTML local
  const htmlPath = path.resolve(__dirname, 'ebook-ansiedade.html');
  await page.goto(`file://${htmlPath}`);

  // Aguarda fontes do Google Fonts carregarem
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2500);

  // Gera o PDF
  const outputPath = path.resolve(__dirname, '../public/ebook-ansiedade.pdf');

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();

  console.log(`✅ PDF gerado em: ${outputPath}`);
  console.log('📄 Pronto para download em /ebook/obrigada');
}

render().catch((err) => {
  console.error('❌ Erro ao gerar PDF:', err);
  process.exit(1);
});
