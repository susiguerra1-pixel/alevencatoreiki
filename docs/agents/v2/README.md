# Pipeline de Criação de Conteúdo — v2

> Evolução da v1, reforçada com princípios validados de mercado
> (Content Machine 5.4) e correções aprendidas no primeiro run real.
> **A v1 continua disponível em `docs/agents/*.md` — não foi sobrescrita.**

## O que mudou vs. v1

| Dimensão | v1 | v2 |
|---|---|---|
| **Fluxo** | Protocolo de perguntas por agente | **Máquina de estados** rígida com triggers explícitos |
| **Saídas** | YAML estruturado livre | **Contratos fechados**: tabela obrigatória + contagem exata (10 headlines, 18 blocos, etc) |
| **Linguagem** | Narrava o próprio funcionamento | **Bastidor invisível**: proibido "vou consultar / validar / avançar" |
| **Superfície** | Prefácio/postamble conversacional | **Regra de superfície**: resposta começa direto no formato da etapa |
| **Headlines** | Briefing de 3 direções | **10 opções** com distribuição de natureza (reenquadramento, conflito, inversão, etc) |
| **Designer** | Assumia Figma disponível | **Plano B obrigatório** quando MCP paywall / quota |
| **Render local** | Viewport que quebrava grid | **Viewport calculado**: 2×(slide.width) + gap + body.padding |
| **QA visual** | "Frames == beats" | **Pixel-sampling** + bounding-box inspect + licença de imagem |
| **Commands** | Livres | **Fixos**: `ok`, `refazer headlines`, `reiniciar`, `refazer copy`, `refazer design` |

## Estrutura da pasta

```
docs/agents/v2/
├── README.md                    (este arquivo)
├── 00-master-spec.md            regras globais — aplicam a TODOS os agentes
├── 01-growth-strategist.md      define POR QUEM, PRA QUEM, POR QUÊ
├── 02-content-strategist.md     define O QUE, QUANTAS, EM QUE ESTRUTURA
├── 03-copywriter.md             escreve TEXTO FINAL com mecanismos de captura
├── 04-designer.md               publica VISUAL (Figma MCP ou HTML+PNG)
├── 05-orchestrator.md           máquina de estados + memória transversal
├── templates/
│   ├── headlines.md             contrato das 10 headlines CM 5.4
│   ├── spine.md                 contrato da espinha dorsal
│   └── render-templates.md      4 templates de render (18, 14, 18, 21 blocos)
└── fixes/
    └── v1-lessons-learned.md    bugs e como v2 os evita
```

## Ordem de leitura pra operadores

1. `00-master-spec.md` — o que vale pra todo mundo
2. `05-orchestrator.md` — entende a máquina de estados
3. `01 → 02 → 03 → 04` — na ordem do pipeline
4. `templates/` — contratos de saída detalhados
5. `fixes/v1-lessons-learned.md` — só se for tocar no Designer

## Pipeline (igual ao v1, rigor novo)

```
usuário
   │
   ▼
🎛️ Orquestrador v2  (máquina de estados; único ponto de contato com usuário)
   │
   ▼
📈 Growth v2        → Tese + Hipótese + Métrica
   │
   ▼
🧠 Content v2       → 10 Headlines (CM 5.4) + Espinha dorsal
   │
   ▼
✍️ Copy v2          → Render final em 1 dos 4 templates + caption
   │
   ▼
🎨 Designer v2      → Figma MCP (primário) OU HTML+PNG (fallback) + QA visual
   │
   ▼
🎛️ Orquestrador v2  (fecha o ciclo, entrega link)
```

## Princípios inegociáveis v2

1. **Bastidor invisível** — nenhum agente narra o próprio funcionamento.
   Nada de "vou consultar", "próxima etapa", "encontrei a etapa correta".
2. **Contratos fechados** — cada saída tem formato fixo e contagem fixa.
   10 headlines é 10, não 8, não 12. 18 blocos é 18.
3. **Regra de superfície** — resposta começa no formato da etapa,
   sem preâmbulo/postamble. Exceção: Etapa 2 (headlines) tem 2 linhas
   introdutórias.
4. **Máquina de estados** — transições só acontecem em triggers
   declarados (`ok`, número de 1 a N, `refazer X`).
5. **Plano B obrigatório** — qualquer agente com dependência externa
   (Figma MCP, API, imagem) declara fallback na entrada do estado.
6. **Memória transversal acumula** — o YAML do run só cresce;
   nenhum agente apaga saída do anterior.
7. **QA sai com número** — nada de "tá bom". QA de Designer entrega
   booleans + pixel samples + bounding-box checks.

## Como rodar v2

Igual a v1 — cole no chat:

```
/pipeline conteúdo v2

Briefing inicial:
{1–3 parágrafos}
```

O Claude assume papel de Orquestrador v2 e conduz pela máquina de estados.

## Quando usar v1 vs. v2

- **v1** → projetos onde a liberdade conversacional vale mais que
  rigor de formato (discovery, briefing exploratório, cliente novo).
- **v2** → produção em escala, marca com sistema fechado, conteúdo
  recorrente, quando rigor de formato importa mais que criatividade
  conversacional.

## Runs persistidos (continua igual a v1)

`docs/agents/runs/YYYY-MM-DD-{slug}.yaml` — o formato do YAML em v2
inclui o campo `pipeline_version: "v2"` no topo pra diferenciar.
