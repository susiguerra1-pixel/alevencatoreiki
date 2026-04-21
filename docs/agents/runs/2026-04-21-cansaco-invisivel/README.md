# Carrossel — "Cansaço Invisível"

**Data:** 2026-04-21
**Marca:** Ale Vencato Reiki (alevencatoreiki.com.br)
**Canal:** Instagram feed — carrossel 10 slides 1080×1350
**Objetivo:** crescer audiência (KPI: salvamentos + seguidores novos em 7d)

## Arquivos

| Arquivo | O que é |
|---|---|
| `carrossel.html` | HTML auto-contido com os 10 slides empilhados lado-a-lado. Abre no browser, fontes carregam do Google Fonts. |
| `slides/slide-01.png` → `slide-10.png` | PNGs exportados em 1080×1350, prontos pra upload no Instagram. |
| `img/slide-01-woman.jpg` / `img/slide-09-hands.jpg` | Imagens Unsplash (livres) usadas nos slides 1 e 9 como painel lateral direito. |
| `figma-apply.js` | Script Figma Plugin API pronto pra rodar quando a quota MCP resetar (replica o carrossel no arquivo Templates). |
| `../2026-04-21-cansaco-invisivel.yaml` | Run completo (Growth + Content + Copy + Designer consolidado). Fonte da verdade pra re-rodar. |

## Como usar

1. **Pra postar agora:** subir os 10 PNGs na ordem no IG, copiar a legenda do YAML (`copy.caption_full`), publicar.
2. **Pra ajustar:** editar `carrossel.html` e rodar `node /sessions/optimistic-keen-faraday/render.js` pra re-exportar os PNGs.
3. **Pra replicar no Figma (quando quota resetar):** o YAML tem tokens e beats prontos — é só alimentar o Designer agent novamente.

## Decisões chave

- **Reiki só aparece no slide 9** — o objetivo é salvamento, não conversão. Vender no slide 1 mata o KPI.
- **Slide 1 é confissão, não lista** — "Você já chorou no banho só pra ter 5 minutos em paz?" gera identificação profunda.
- **Slides 3-7 são um diagnóstico cumulativo** — cada "sinal" é um "eu também" que leva ao reframe do slide 8.
- **Slide 10 pede o que interessa pro KPI:** salvar, compartilhar, seguir. Zero "agende sua sessão".
- **Imagens só nos slides 1 e 9** — painel lateral direito com fade creme suave. Slide 1 (mulher na janela) = identificação emocional; slide 9 (mãos/contas) = atmosfera Reiki sem mostrar a prática explicitamente.

## Porque arquivos locais e não Figma

Tentativa de publicar no arquivo Figma `payP5Pl00wJawrKX5LduvX` bateu limite do plano Starter (`Figma MCP tool call limit`). Pivot pra HTML+PNG pra não travar a urgência. O run YAML preserva tudo pra retomar no Figma depois.
