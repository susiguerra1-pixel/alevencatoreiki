# Pipeline de Criação de Conteúdo — Agentes

Squad de 5 agentes especialistas em marketing, organizados como
**pipeline sequencial** onde o output de cada agente vira input do
próximo, até aterrissar num visual publicado no Figma.

## O pipeline

```
usuário
   │
   ▼
🎛️ Orquestrador ──┐  (investiga até ter clareza; nunca dispara com briefing morno)
                  │
                  ▼
           📈 Growth Strategist   → define POR QUEM, PRA QUEM, POR QUÊ
                  │
                  ▼
           🧠 Content Strategist  → define O QUE, QUANTAS PEÇAS, EM QUE ESTRUTURA
                  │
                  ▼
           ✍️ Copywriter          → escreve o TEXTO FINAL de cada beat
                  │
                  ▼
           🎨 Designer            → publica o VISUAL no Figma via MCP
                  │
                  ▼
             🎛️ Orquestrador      (fecha o ciclo, entrega link + resumo)
```

## Arquivos

| # | Arquivo | Papel |
|---|---|---|
| 0 | [`05-orchestrator.md`](./05-orchestrator.md) | Maestro — conduz a conversa e encadeia as 4 etapas |
| 1 | [`01-growth-strategist.md`](./01-growth-strategist.md) | Posicionamento, canal, hipótese, métrica |
| 2 | [`02-content-strategist.md`](./02-content-strategist.md) | Pilares, formato físico, arco narrativo, ganchos |
| 3 | [`03-copywriter.md`](./03-copywriter.md) | Headlines, hooks, CTA, microcopy |
| 4 | [`04-designer.md`](./04-designer.md) | Layout final no Figma via MCP |

## Princípios do pipeline

1. **Agentes são genéricos** — a marca é sempre input (não hardcoded).
   Qualquer cliente entra no pipeline informando marca/tokens/Figma.
2. **Questionar antes de produzir** — cada agente tem um protocolo de
   perguntas e um *critério de pronto*. Só entrega ao próximo quando
   o checklist bate.
3. **YAML transversal acumulativo** — o briefing cresce a cada etapa;
   nunca substitui. O arquivo de run vira fonte da verdade.
4. **Designer não inventa copy, Copywriter não inventa layout** — cada
   agente é soberano no seu domínio e só consome o domínio anterior.
5. **Orquestrador é a única porta pro usuário** — lacunas voltam pra
   ele, nunca são resolvidas sozinhas.

## Como rodar (manual, sem subagents automatizados)

Cole no chat principal:

```
/pipeline conteúdo

Briefing inicial (livre):
{1–3 parágrafos do que você quer}

Figma alvo (quando chegar no Designer):
{url completo}
```

O Claude principal assume o papel de Orquestrador e conduz.

## Como rodar (com subagents reais — futuro)

Se migrarmos pra `.claude/agents/`, o Orquestrador vai usar o `Task`
tool pra disparar cada especialista como subagent isolado, passando
o YAML acumulado como prompt. Cada subagent retorna só o delta que
ele produziu, e o Orquestrador consolida.

## Runs persistidos

Cada execução bem-sucedida gera:

```
docs/agents/runs/YYYY-MM-DD-{slug}.yaml
```

Com o briefing completo consolidado. Útil pra:

- Rodar novamente com ajuste (ex.: trocar só o canal).
- Auditar decisões antigas.
- Treinar futuros prompts.

## Extensões possíveis

- **Analista de Performance** (agente 6, pós-publicação) — lê métricas
  do post depois de X dias e devolve hipóteses pro próximo ciclo.
- **Revisor de Compliance** — intercepta entre Copywriter e Designer
  pra validar claims regulados (saúde, finanças).
- **Tradutor de Canal** — replica uma peça aprovada pra outros formatos
  (carrossel → reel, post → newsletter) sem refazer pipeline inteiro.
