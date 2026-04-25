// =============================================================
// Figma Plugin API script — cola no console da Figma Plugin API
// OU executa via use_figma MCP (quando quota da Starter resetar).
// Cria página nova "Carrossel · Cansaço Invisível — 2026-04-21"
// no arquivo payP5Pl00wJawrKX5LduvX com 10 frames 1080x1350
// seguindo o template Gokai (cream bg, blobs gold+lilac, Cormorant
// italic, ∞, brand, dots), + imagens Unsplash nos slides 1 e 9.
// =============================================================

const log = [];
const warn = (m) => { log.push("WARN: " + m); };
const note = (m) => { log.push(m); };

const CREAM     = { r: 245/255, g: 240/255, b: 235/255 };
const GOLD      = { r: 184/255, g: 149/255, b: 106/255 };
const GOLD_SOFT = { r: 212/255, g: 175/255, b: 130/255 };
const BROWN     = { r:  74/255, g:  46/255, b:  10/255 };
const TEXT_MAIN = { r:  74/255, g:  64/255, b:  64/255 };
const TEXT_BODY = { r:  82/255, g:  72/255, b:  72/255 };
const LILAC     = { r: 180/255, g: 164/255, b: 200/255 };

async function loadFirst(candidates) {
  for (const f of candidates) {
    try { await figma.loadFontAsync(f); return f; } catch (e) {}
  }
  return null;
}
const FSerifItalicLight = await loadFirst([
  { family: "Cormorant Garamond", style: "Light Italic" },
  { family: "Cormorant Garamond", style: "Italic" },
  { family: "Cormorant", style: "Light Italic" },
  { family: "Playfair Display", style: "Italic" },
  { family: "Georgia", style: "Italic" },
]);
const FSerifItalic = await loadFirst([
  { family: "Cormorant Garamond", style: "Italic" },
  { family: "Playfair Display", style: "Italic" },
  { family: "Georgia", style: "Italic" },
]);
const FSerifReg = await loadFirst([
  { family: "Cormorant Garamond", style: "Light" },
  { family: "Cormorant Garamond", style: "Regular" },
  { family: "Playfair Display", style: "Regular" },
  { family: "Georgia", style: "Regular" },
]);
const FSansReg = await loadFirst([
  { family: "Jost", style: "Regular" },
  { family: "Inter", style: "Regular" },
  { family: "Helvetica", style: "Regular" },
  { family: "Arial", style: "Regular" },
]);
const FSansLight = await loadFirst([
  { family: "Jost", style: "Light" },
  { family: "Inter", style: "Light" },
  { family: "Helvetica", style: "Light" },
  { family: "Arial", style: "Regular" },
]);
if (!FSerifItalicLight || !FSansReg) {
  throw new Error("Fonte essencial faltando. Instala Cormorant Garamond e Jost na máquina da Figma.");
}

const page = figma.createPage();
page.name = "Carrossel · Cansaço Invisível — 2026-04-21";
await figma.setCurrentPageAsync(page);

async function loadImg(url) {
  try { return await figma.createImageAsync(url); } catch (e) { warn("img fail: " + e.message); return null; }
}
const imgWoman = await loadImg("https://images.unsplash.com/photo-1698231209258-03de1b427e0f?w=1200&q=80");
const imgHands = await loadImg("https://images.unsplash.com/photo-1762894110127-87fee1d11a57?w=1200&q=80");

const beats = [
  { eyebrow: "PARA QUEM SE RECONHECE",   headline: "Você já chorou no banho só pra ter 5 minutos em paz?", body: "Se sim — arrasta. Talvez o que você sente tenha nome.", headlineSize: 84,  image: imgWoman },
  { eyebrow: "O QUE PROVAVELMENTE É",    headline: "Não é fraqueza.", body: "É um tipo de cansaço que dorme com você.\nAbaixo, 5 sinais de que ele te encontrou.", headlineSize: 140 },
  { eyebrow: "SINAL · 01",               headline: "Dorme 8 horas.\nAcorda cansada.", body: "Como se o descanso passasse por cima de você — sem te tocar.", headlineSize: 106 },
  { eyebrow: "SINAL · 02",               headline: "Descansa —\ne sente culpa.", body: "Tem 20 minutos livres, e a cabeça já lista 5 coisas que você 'devia' tar fazendo.", headlineSize: 106 },
  { eyebrow: "SINAL · 03",               headline: "A pia cheia\nte tira do eixo.", body: "Não é a louça. É que o seu copo tá cheio há tempo demais — e uma gota transborda tudo.", headlineSize: 106 },
  { eyebrow: "SINAL · 04",               headline: "De dia some você.\nÀ noite, só tem pensamento.", body: "A cama vira tribunal: revisa o que falou, planeja amanhã, revive 2015. Dormir vira tarefa.", headlineSize: 82 },
  { eyebrow: "SINAL · 05",               headline: "O corpo avisa\nantes da cabeça.", body: "Ombro duro. Mandíbula travada. Respiração curta. Ele carrega o que a cabeça ainda tenta negar.", headlineSize: 106 },
  { eyebrow: "O NOME DISSO",             headline: "Se 3 desses são seus —\nnão é preguiça.", body: "É sistema nervoso em modo sobrevivência. Você não tá fraca. Tá há tempo demais no 'pra frente'.", headlineSize: 86 },
  { eyebrow: "UM GESTO POSSÍVEL",        headline: "Descansar também\né aprendido.", body_serif: true, body: "Existem gestos que ensinam o corpo a lembrar o que é pausa. O Reiki é um deles — silêncio, toque leve, 50 minutos sem precisar resolver nada.", headlineSize: 106, image: imgHands },
  { eyebrow: "SE RESSOOU",               headline: "Não passa direto.", cta_list: ["Salva pra reler numa quinta difícil.", "Manda pra quem anda no limite.", "Me segue — escrevo sobre o cansaço de quem cuida de tudo."], headlineSize: 106 },
];

function solid(c, o) { return { type: 'SOLID', color: { r: c.r, g: c.g, b: c.b }, opacity: o == null ? 1 : o }; }
function setText(node, font, chars, size, color, extra) {
  node.fontName = font;
  node.characters = chars;
  node.fontSize = size;
  node.fills = [solid(color)];
  if (extra && extra.letterSpacing != null) node.letterSpacing = { value: extra.letterSpacing, unit: 'PIXELS' };
  if (extra && extra.lineHeight != null) node.lineHeight = { value: extra.lineHeight, unit: 'PERCENT' };
}

const createdFrames = [];
for (let i = 0; i < beats.length; i++) {
  const b = beats[i];
  const frame = figma.createFrame();
  frame.name = "Slide " + String(i+1).padStart(2,'0') + " — " + b.eyebrow;
  frame.resize(1080, 1350);
  frame.x = i * 1200; frame.y = 0;
  frame.fills = [solid(CREAM)];
  frame.clipsContent = true;
  page.appendChild(frame);

  const blob1 = figma.createEllipse();
  blob1.resize(1200, 1200); blob1.x = 240; blob1.y = -360; blob1.strokes = [];
  blob1.fills = [{ type: 'GRADIENT_RADIAL', gradientTransform: [[1,0,0],[0,1,0]],
    gradientStops: [
      { position: 0,   color: { r: GOLD_SOFT.r, g: GOLD_SOFT.g, b: GOLD_SOFT.b, a: 0.7 } },
      { position: 0.7, color: { r: GOLD_SOFT.r, g: GOLD_SOFT.g, b: GOLD_SOFT.b, a: 0.15 } },
      { position: 1,   color: { r: GOLD_SOFT.r, g: GOLD_SOFT.g, b: GOLD_SOFT.b, a: 0 } },
    ]}];
  frame.appendChild(blob1);

  const blob2 = figma.createEllipse();
  blob2.resize(900, 900); blob2.x = -400; blob2.y = 700; blob2.strokes = [];
  blob2.fills = [{ type: 'GRADIENT_RADIAL', gradientTransform: [[1,0,0],[0,1,0]],
    gradientStops: [
      { position: 0,   color: { r: LILAC.r, g: LILAC.g, b: LILAC.b, a: 0.45 } },
      { position: 0.7, color: { r: LILAC.r, g: LILAC.g, b: LILAC.b, a: 0.1 } },
      { position: 1,   color: { r: LILAC.r, g: LILAC.g, b: LILAC.b, a: 0 } },
    ]}];
  frame.appendChild(blob2);

  if (b.image) {
    const imgR = figma.createRectangle();
    imgR.resize(500, 1350); imgR.x = 580; imgR.y = 0; imgR.strokes = [];
    imgR.fills = [{ type: 'IMAGE', scaleMode: 'FILL', imageHash: b.image.hash }];
    frame.appendChild(imgR);
    const overlay = figma.createRectangle();
    overlay.resize(500, 1350); overlay.x = 580; overlay.y = 0; overlay.strokes = [];
    overlay.fills = [solid(CREAM, 0.35)];
    frame.appendChild(overlay);
    const fade = figma.createRectangle();
    fade.resize(220, 1350); fade.x = 580; fade.y = 0; fade.strokes = [];
    fade.fills = [{ type: 'GRADIENT_LINEAR', gradientTransform: [[1,0,0],[0,1,0]],
      gradientStops: [
        { position: 0, color: { r: CREAM.r, g: CREAM.g, b: CREAM.b, a: 1 } },
        { position: 1, color: { r: CREAM.r, g: CREAM.g, b: CREAM.b, a: 0 } },
      ]}];
    frame.appendChild(fade);
  }

  const eyebrow = figma.createText();
  setText(eyebrow, FSansReg, b.eyebrow, 17, BROWN, { letterSpacing: 4 });
  eyebrow.x = 100; eyebrow.y = 110;
  frame.appendChild(eyebrow);

  const rule = figma.createRectangle();
  rule.resize(44, 1); rule.x = 100; rule.y = 148; rule.strokes = [];
  rule.fills = [solid(GOLD)];
  frame.appendChild(rule);

  const hl = figma.createText();
  setText(hl, FSerifItalicLight, b.headline, b.headlineSize || 96, TEXT_MAIN, { lineHeight: 110, letterSpacing: -1 });
  hl.x = 100; hl.resize(b.image ? 460 : 860, hl.height); hl.y = 470;
  frame.appendChild(hl);

  if (b.cta_list) {
    const cta = figma.createText();
    const lines = b.cta_list.map(s => "↳   " + s).join("\n");
    setText(cta, FSansLight || FSansReg, lines, 30, TEXT_BODY, { lineHeight: 190 });
    cta.x = 100; cta.y = hl.y + hl.height + 44; cta.resize(860, cta.height);
    frame.appendChild(cta);
  } else if (b.body) {
    const body = figma.createText();
    if (b.body_serif && FSerifItalic) setText(body, FSerifItalic, b.body, 34, TEXT_BODY, { lineHeight: 150 });
    else setText(body, FSansLight || FSansReg, b.body, 27, TEXT_BODY, { lineHeight: 165 });
    body.x = 100; body.y = hl.y + hl.height + 40;
    body.resize(b.image ? 440 : 820, body.height);
    const rIdx = b.body.indexOf("Reiki");
    if (rIdx >= 0) { try { body.setRangeFills(rIdx, rIdx + 5, [solid(GOLD)]); } catch (e) {} }
    frame.appendChild(body);
  }

  const inf = figma.createText();
  setText(inf, FSerifReg || FSerifItalicLight, "∞", 72, GOLD);
  inf.x = 100; inf.y = 1080;
  frame.appendChild(inf);

  const bname = figma.createText();
  setText(bname, FSansReg, "ALE VENCATO REIKI", 15, BROWN, { letterSpacing: 4 });
  bname.x = 100; bname.y = 1200;
  frame.appendChild(bname);

  const btag = figma.createText();
  const tagText = (i === 9) ? "@ALEVENCATOREIKI · CAXIAS DO SUL" : "REIKI · CAXIAS DO SUL";
  setText(btag, FSansLight || FSansReg, tagText, 12, TEXT_BODY, { letterSpacing: 3.2 });
  btag.x = 100; btag.y = 1228;
  frame.appendChild(btag);

  const dotCount = 10, gap = 16, dotSize = 8;
  const rowW = dotCount * dotSize + (dotCount - 1) * gap;
  const dotsStartX = 1080 - 100 - rowW;
  for (let d = 0; d < dotCount; d++) {
    const dot = figma.createEllipse();
    dot.resize(dotSize, dotSize);
    dot.x = dotsStartX + d * (dotSize + gap); dot.y = 1228;
    dot.strokes = [];
    dot.fills = [solid(GOLD, d <= i ? 1 : 0.18)];
    frame.appendChild(dot);
  }

  createdFrames.push({ id: frame.id, name: frame.name });
}

try { figma.viewport.scrollAndZoomIntoView(page.children); } catch (e) {}

return {
  ok: true,
  pageId: page.id,
  pageName: page.name,
  framesCreated: createdFrames.length,
  frames: createdFrames,
  log
};
