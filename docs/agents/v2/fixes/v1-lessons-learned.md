---
doc: v1-lessons-learned
role: fixes-ledger
version: v2
---

# Fixes · Lições aprendidas no v1

Registro dos bugs/atritos reais observados durante o primeiro run
completo do pipeline v1 (carrossel "Cansaço invisível", Ale Reiki
Caxias do Sul, 2026-04-21) e como o v2 os previne por contrato,
não por bom senso.

Cada entrada tem: **sintoma**, **causa raiz**, **fix imediato no
run v1**, **prevenção no v2**, **arquivo onde a regra mora agora**.

---

## L1 · Render viewport quebrado em grid 2-colunas

### Sintoma
`render.js` rodou sem erro. Os PNGs `slide-01.png`, `slide-02.png`, …
ficaram salvos, mas o conteúdo visual dos slides estava **deslocado**
— o screenshot de `#slide-01` capturava pedaços do `#slide-02`, e assim
por diante. Inspeção de bounding box confirmou: os elementos existiam,
mas não renderizavam no viewport.

### Causa raiz
O HTML do carrossel usava um grid CSS pra mostrar os 10 slides em
2 colunas × 5 linhas durante o render (para inspeção visual antes de
screenshotar individualmente). O `render.js` v1 usava viewport fixo
`1080×1350` — tamanho de **um slide**, não do grid inteiro.

Como o grid precisava de pelo menos `2 × 1080 + gap + padding`
de largura pra renderizar, o Chromium colapsava os slides fora do
viewport em layout degradado. O `element.screenshot(#slide-01)` então
capturava uma região que visualmente continha o conteúdo errado.

### Fix imediato no run v1
Alterado `render.js` pra viewport `2240×2800` (margem pra 2 colunas
× 2 linhas visíveis com folga), rodado de novo, PNGs regerados com
conteúdo correto.

### Prevenção no v2
Contrato no Designer v2: **a largura e altura do viewport são
calculadas por fórmula**, não chutadas. Ver
`docs/agents/v2/04-designer.md` seção "CRÍTICO — viewport do render.js".

Fórmula obrigatória:

```
viewport.width  = (slide.width × colunas_do_grid) + gap × (colunas-1) + body.padding × 2
viewport.height = (slide.height × linhas_do_grid) + gap × (linhas-1) + body.padding × 2
```

E `render.js v2 canônico` já referencia as constantes:

```javascript
const SLIDE_W   = 1080;
const SLIDE_H   = 1350;
const GRID_COLS = 2;
const GRID_ROWS = 5;
const GAP       = 32;
const PADDING   = 40;

viewport: {
  width:  GRID_COLS * SLIDE_W + (GRID_COLS - 1) * GAP + 2 * PADDING,
  height: GRID_ROWS * SLIDE_H + (GRID_ROWS - 1) * GAP + 2 * PADDING,
}
```

QA obrigatório: `render_viewport_correct: true` no YAML do run.

### Arquivo
`04-designer.md` (fórmula + render.js canônico) ·
YAML `qa_check.render_viewport_correct` (check obrigatório).

---

## L2 · Figma MCP quota-limited sem plano B declarado

### Sintoma
O Designer v1 tentou publicar no Figma. A chamada `use_figma`
retornou "MCP tool call limit" (Starter plan). O agente ficou
**pendurado** — nem caiu pro HTML local, nem pediu autorização pro
usuário. A entrega atrasou porque o bastidor precisou ser narrado
("o Figma bateu limite, tô gerando local"), violando a Regra de
Superfície.

### Causa raiz
v1 assumia Figma como único caminho. Plano B (HTML+PNG via
Playwright) existia como improviso, não como contrato.

### Fix imediato no run v1
Gerei HTML+PNG localmente. Narrei o fallback pro usuário (erro de
processo — violou R3/R4 do Master Spec).

### Prevenção no v2
Plano A e Plano B **ambos declarados antes de começar** a Etapa 12.
Designer v2 testa Plano A primeiro com chamada leve (`whoami` ou
`get_metadata`). Se quota bate, transiciona pro Plano B **sem narrar
na resposta visível**. O YAML do run registra:

```yaml
deliverable:
  render_plan_used: "B"
  render_plan_a_blocked_reason: "Figma MCP tool call limit"
```

Regra O4 do Orquestrador: fallback de Designer **nunca é visível**.

### Arquivo
`04-designer.md` (Plano A / Plano B declarados) ·
`05-orchestrator.md` (O4 · Fallback invisível) ·
`00-master-spec.md` (R3 preamble, R4 bastidor invisível).

---

## L3 · Foto Unsplash+ (paga) usada sem validação de licença

### Sintoma
Na primeira rodada de slides do run v1, uma das imagens tinha URL
`plus.unsplash.com/...` — conteúdo **Unsplash+ (premium)**. Como o
domínio `plus.` é diferente do gratuito `images.unsplash.com`, o
download via curl funcionou (a imagem é servida), mas usar em
produção requer plano pago — violação de licença silenciosa.

### Causa raiz
v1 não tinha check de domínio. Pegava qualquer URL Unsplash que
aparecia na busca.

### Fix imediato no run v1
Substituí a foto por uma de `images.unsplash.com` (livre).

### Prevenção no v2
Regra de validação obrigatória no Designer v2:

- URL `images.unsplash.com/photo-XXX` → **livre** (OK).
- URL `plus.unsplash.com/...` → **Unsplash+ premium**, não usar.
- Qualquer URL com redirect a login → não usar.

QA obrigatório: `image_license_ok: true` no YAML do run.

### Arquivo
`04-designer.md` seção "VALIDAÇÃO DE IMAGENS" ·
YAML `qa_check.image_license_ok`.

---

## L4 · Imagem `background-image` externa flakey no headless

### Sintoma
Em uma rodada, o Playwright screenshotou slide antes do
`background-image: url('https://images.unsplash.com/...')` terminar
de baixar. Resultado: slide com retângulo cor-base no lugar da foto.
A detecção só aconteceu por inspeção manual do PNG — não foi
detectada automaticamente.

### Causa raiz
Dependência de rede dentro do headless browser + `waitUntil:
'networkidle'` nem sempre cobre `background-image` via CSS.

### Fix imediato no run v1
Baixei as fotos localmente (`curl` → `img/slide-XX.jpg`), reescrevi
HTML pra usar `background-image: url('img/slide-XX.jpg')`, rodei
render de novo.

### Prevenção no v2
**Download local obrigatório** antes de rodar `render.js`:

```bash
curl -sL -o img/slide-XX.jpg "https://images.unsplash.com/photo-{id}?w=1400&q=85"
file img/slide-XX.jpg  # validar JPEG image data
```

HTML sempre usa path local. Se `curl` falha ou retorna HTML em vez
de JPEG, **descarta e escolhe outra URL** (F4).

QA de suporte: amostragem de pixels via Pillow confirma que a
região da foto tem variância (não é cor sólida).

### Arquivo
`04-designer.md` seção "Download local obrigatório" + F4 fallback.

---

## L5 · Font carregada "OK" no Figma mas não aparece

### Sintoma
No Plano A, chamei `figma.loadFontAsync({ family: "Cormorant Garamond",
style: "Regular" })`. A API retornou sem erro. Mas os blocos de texto
ficaram com font fallback sistema (Arial), porque a biblioteca Cormorant
Garamond não estava publicada no arquivo de design.

### Causa raiz
Plugin API do Figma **silencia** erros de font não disponível. O
retorno "sucesso" não significa font carregada; pode significar
"fallback aceito sem avisar".

### Fix imediato no run v1
Troquei pra Playfair Display (estava no design system do cliente).

### Prevenção no v2
**Fallback em cadeia obrigatório** na função `loadFirst(candidates)`:

```javascript
const fontCandidates = [
  { family: "Cormorant Garamond", style: "Regular" },
  { family: "Cormorant", style: "Regular" },
  { family: "Playfair Display", style: "Regular" },
  { family: "Georgia", style: "Regular" },
];
```

Verificar explicitamente pós-criação que o `fontName` dos text nodes
corresponde ao esperado (não só que a promise resolveu).

QA obrigatório: `fonts_loaded_ok: true`.

### Arquivo
`04-designer.md` Passo 2 + F2 fallback.

---

## L6 · QA visual só "tá bom" — sem prova

### Sintoma
No v1, o QA final era olhar os PNGs no VSCode e aprovar por
olhômetro. Dois bugs escaparam (L1 viewport, L3 licença) porque
o olho humano não pega tudo.

### Causa raiz
QA sem critério objetivo.

### Prevenção no v2
QA visual **pixel-level** obrigatório, via Pillow em pelo menos
1 slide de cada tipo (capa, sinal, reframe, CTA):

```python
from PIL import Image
im = Image.open('slides/slide-01.png')
assert im.size == (1080, 1350), f"Tamanho errado: {im.size}"

for y in [100, 400, 700, 1000, 1300]:
    for x in [100, 300, 500, 700, 900]:
        r, g, b = im.getpixel((x, y))
        # esperado: slides text-only = cream (~240,235,230)
        # esperado: slides com foto = foto na metade direita apenas
```

Checks adicionais quando o slide tem foto:
- [ ] Foto na **metade correta** (direita se `.slide--with-photo`
      com painel 520px).
- [ ] Overlay creme aplicado.
- [ ] Texto permanece legível na metade oposta à foto.

QA obrigatório: `pixel_sample_photo_position: true`.

### Arquivo
`04-designer.md` seção "QA visual obrigatório".

---

## L7 · Bastidor vazando no chat

### Sintoma
Em vários momentos v1, respostas começaram com "Vou consultar o
Growth Strategist", "Vou rodar a pesquisa automática", "Beleza,
deixa eu montar a tabela…" — tudo bastidor que quebra imersão.

### Causa raiz
Nenhum agente tinha regra explícita de "superfície". O Master Spec
só implicava.

### Prevenção no v2
**Regra R4 explícita no Master Spec**: banned phrases. Toda resposta
inicia diretamente no formato exigido pela etapa.

Banned list literal:

- "vou consultar"
- "vou conferir"
- "vou validar"
- "deixa eu montar"
- "só um momento"
- "próxima etapa"
- "contrato"
- "fluxo"
- "pipeline" (exceto Estado 0 e Estado 14)
- "agente"
- "beleza"
- "perfeito"

QA obrigatório: `bastidor_leaked: false`.

### Arquivo
`00-master-spec.md` seção "Regra de Superfície (R4)" + lista
banida · `05-orchestrator.md` O1 (identificação silenciosa).

---

## L8 · "Refazer copy" regerando no mesmo template

### Sintoma
Usuário pediu `refazer copy` no Estado 11. v1 interpretou como
"melhorar o render atual", gerou outra versão **no mesmo template**.
Usuário queria trocar template.

### Causa raiz
v1 não distinguia "ajustar copy dentro do template" vs. "trocar
template". O comando era ambíguo.

### Prevenção no v2
Contrato de triggers explícito no Orquestrador v2:

| Comando | Volta ao Estado |
|---|---|
| `refazer headlines` | 4 |
| `refazer copy` | 8 (menu de templates — permite trocar) |
| `refazer design` | 12 |
| `reiniciar` | 0 |

`refazer copy` sempre volta pro menu de templates (Estado 8), nunca
pra regeração dentro do mesmo template. Se o usuário quiser ajustar
sem trocar, escolhe o mesmo número no menu novamente.

### Arquivo
`05-orchestrator.md` Estado 11 + O6 (loop curto pós-entrega).

---

## L9 · YAML do run não persistido

### Sintoma
Run v1 do "cansaço invisível" gerou arquivos soltos
(`carrossel.html`, `slides/*.png`, `render.js`) em
`docs/agents/runs/2026-04-21-cansaco-invisivel/`, mas sem YAML
consolidado. Retomar o contexto em uma sessão futura exige reler
o carrossel e reconstituir brand/audience/hypothesis na mão.

### Causa raiz
v1 tratava YAML como nice-to-have.

### Prevenção no v2
YAML do run é **obrigatório** e persistido ao final do Estado 14.
Formato fixo em `05-orchestrator.md` seção "FORMATO DO YAML DE RUN".

Path canônico:

```
docs/agents/runs/{YYYY-MM-DD}-{slug}.yaml
```

Campos obrigatórios: `pipeline_version: "v2"`, `run`, `brand`,
`audience`, `channel`, `hypothesis`, `constraints`, `triage_table`,
`headlines_batch`, `headline_winner`, `spine`, `template_choice`,
`render_markdown`, `caption_full`, `deliverable`, `qa_check`.

Em cliente recorrente (F3 do Growth), o YAML anterior é carregado
pelo Orquestrador no Estado 0 e sobrescrito apenas nos campos
explicitamente alterados.

### Arquivo
`05-orchestrator.md` (FORMATO DO YAML DE RUN) ·
`01-growth-strategist.md` F3 (cliente recorrente).

---

## Check de aplicabilidade — como usar este doc

Antes de começar um novo run v2, ler este doc uma vez. Se for um
run com mudança grande (novo cliente, novo canal, nova marca), rever
L3, L4, L5 especificamente. Se for carrossel Instagram com 2-coluna
grid, rever L1 explicitamente antes de configurar viewport.

Cada novo run que descobrir um bug novo **adiciona uma entrada aqui**,
com o mesmo formato (sintoma, causa raiz, fix, prevenção, arquivo).
Esse é o contrato de memória do pipeline.

---

## Mandamento das lições

> Todo bug vira contrato. Todo contrato vira check automático.
> Nenhum bug escapa duas vezes.
