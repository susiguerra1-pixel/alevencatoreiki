---
template: spine
owner: content-strategist
stage: 6
version: v2
---

# Templates · Espinha Dorsal (Etapa 6)

Contrato fechado para a tabela de espinha dorsal da Etapa 6.
Referenciado por `02-content-strategist.md` e `05-orchestrator.md`.

---

## Saída obrigatória — ordem literal

1. Tabela Markdown com exatamente 6 linhas (1 por campo).
2. Fecho de 1 linha imediatamente após a tabela.

Nenhuma linha antes da tabela. Nenhum parágrafo explicando a
espinha depois da tabela e antes do fecho.

---

## Formato da tabela

```
| Campo | Extrato |
|---|---|
| Headline escolhida | {linha 1 da headline}<br>{linha 2 da headline} |
| Hook | {contextualiza a tensão da headline; não repete a headline} |
| Mecanismo | {explica POR QUE o fenômeno acontece} |
| Prova | {prosa curta de contexto. A) ... B) ... C) ... (D/E se necessário)} |
| Aplicação | {traduz a leitura em consequência mais ampla} |
| Direção | {próximo passo lógico do carrossel — sem CTA comercial} |
```

### Regras por campo

**Headline escolhida**
- Único campo onde `<br>` é permitido (e obrigatório).
- Preservar pontuação original da headline (linha 1 `?/:`,
  linha 2 `./!`).
- Não editar a headline — reproduzir exatamente como selecionada.

**Hook**
- 1-3 frases.
- Contextualiza a tensão que a headline introduziu.
- **Não repete** a headline, nem parafraseia com sinônimos.
- Estabelece o chão afetivo/cognitivo de onde o leitor vai partir.

**Mecanismo**
- 2-4 frases.
- Parte mais "ensina algo" da espinha.
- Explica POR QUE o fenômeno acontece — dinâmica causal,
  biológica, social, econômica.
- Evita jargão técnico sem tradução.
- Não faz claim de cura/diagnóstico se há compliance.

**Prova**
- Prosa curta de introdução (1-2 frases) + lista com âncoras
  `A)`, `B)`, `C)` no mínimo (`D)`, `E)` se o material comporta).
- Cada âncora é **observável** — sinal concreto, dado, cena.
- Nenhuma âncora genérica tipo "muitas pessoas sentem isso".
- Se veio de pesquisa automática (R6), as âncoras devem ser
  verificáveis por fonte pública.

**Aplicação**
- 1-3 frases.
- Traduz a leitura em consequência mais ampla — o "e daí?"
  pra vida, trabalho, relação, sociedade.
- Evita prescrição direta (isso é papel do CTA).

**Direção**
- 1-2 frases.
- Aponta o próximo passo lógico **do carrossel** — o que o leitor
  deve sentir/saber ao chegar no último slide.
- **Não é CTA comercial** ("agende sua sessão", "compre agora").
- É narrativa: reframe, permissão, convite à pausa, nomeação, etc.
- O CTA comercial é decisão do Copywriter na Etapa 10 conforme
  o template escolhido.

---

## Fecho (1 linha)

```
Digite "ok" para escolher o template.
```

Imutável. Nada depois.

---

## Exemplo válido completo

```
| Campo | Extrato |
|---|---|
| Headline escolhida | Você já chorou no banho só pra ter 5 minutos em paz?<br>Se sim, talvez o que você sente tenha nome. |
| Hook | Existe um cansaço que não grita — mora nos 5 minutos de trégua escondidos no banho, no silêncio dentro do carro antes de entrar em casa, no sorriso automático na reunião. É um estado que não aparece na agenda, mas dita o humor da semana. |
| Mecanismo | O sistema nervoso de quem carrega carga invisível entra em modo de sobrevivência crônico: alerta constante, recuperação parcial, sono fragmentado. O corpo não desliga porque a mente nunca sinaliza "seguro"; e a mente nunca sinaliza "seguro" porque a lista de responsabilidades nunca fecha. O cansaço vira o estado-base, não o sintoma. |
| Prova | Olhando pra quem vive isso em primeira pessoa, alguns sinais se repetem: A) dorme 8 horas e acorda já cansada; B) descansa e sente culpa, como se "estar parada" fosse ineficiência moral; C) reage desproporcionalmente a estímulos pequenos — pia cheia, criança reclamando, trânsito; D) o corpo avisa antes da cabeça (ombro travado, mandíbula dura, sono leve); E) à noite a mente acelera no exato momento em que o corpo deveria relaxar. |
| Aplicação | Nomear esse estado como "cansaço invisível" faz diferença prática: tira o peso moral de "preguiça", devolve o direito de descansar sem justificar, e transforma o olhar sobre o próprio corpo de julgamento em observação. Não é discurso de auto-ajuda — é reposicionamento cognitivo. |
| Direção | O carrossel leva a leitora do reconhecimento ("é isso que eu sinto") até a permissão ("descansar também é aprendido"), terminando em um convite à pausa concreta, sem prescrever uma solução comercial. |

Digite "ok" para escolher o template.
```

---

## Exemplo inválido (o que NÃO fazer)

```
Aqui está a espinha dorsal baseada na headline que você escolheu:   ← ❌ preamble proibido

| Campo | Extrato |
|---|---|
| Headline escolhida | Você já chorou... / Se sim... |   ← ❌ usou barra, não <br>
| Hook | Você já chorou no banho pra ter paz.             |   ← ❌ repete a headline
| Mecanismo | O cansaço é ruim.                            |   ← ❌ telegráfico, sem explicar POR QUÊ
| Prova | Muita gente sente isso.                          |   ← ❌ sem âncoras A) B) C)
| Aplicação | Descanse mais.                               |   ← ❌ prescrição direta
| Direção | Agende uma sessão de Reiki hoje.               |   ← ❌ CTA comercial

Essa espinha cobre bem o tema. Digite "ok" pra seguir.         ← ❌ comentário + paráfrase do fecho
```

---

## Validação interna antes de emitir

- [ ] Tabela com exatamente 6 linhas de dados (Headline escolhida,
      Hook, Mecanismo, Prova, Aplicação, Direção) — além do header.
- [ ] `<br>` apenas na célula Headline escolhida.
- [ ] Hook não repete a headline.
- [ ] Mecanismo explica POR QUÊ, não só O QUÊ.
- [ ] Prova tem âncoras `A)`, `B)`, `C)` observáveis.
- [ ] Direção é narrativa, não CTA comercial.
- [ ] Nenhum preamble antes da tabela.
- [ ] Nenhum comentário entre tabela e fecho.
- [ ] Fecho literal presente.
- [ ] Nenhum vazamento de bastidor.
