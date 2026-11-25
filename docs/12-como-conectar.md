# 12 · Como usar em qualquer estrutura de IA

| Onde | Como |
|---|---|
| **Claude Code** | o [`INSTALAR.md`](../INSTALAR.md) copia as skills para `.claude/skills/`. Peça em linguagem natural: "anúncio para a minha hamburgueria", "carrossel sobre clareamento", "modela esse anúncio para a minha loja" |
| **Codex** (ou outro agente de código) | a instalação cria um `AGENTS.md` que aponta para `instrumentalista-design-sem-cara-de-ia/docs/` como base e para `skills/*/SKILL.md` como procedimentos |
| **ChatGPT (Projetos ou GPT personalizado)** | suba os `docs/01` a `docs/11` e a sua `marca/ficha.md` como arquivos do projeto; nas instruções, cole o conteúdo de [`skills/direcao-de-arte/SKILL.md`](../skills/direcao-de-arte/SKILL.md). O prompt de imagem sai na mesma conversa, e você gera ali mesmo |
| **Claude.ai (Projetos)** | mesmo esquema: docs e ficha como conhecimento do projeto, a skill de direção de arte nas instruções |
| **Gemini (Gems)** | mesmo esquema; a geração de imagem do Gemini aceita o prompt, com mais cuidado no texto longo |
| **Automação (N8N, Make)** | a régua e o motor viram o prompt de sistema de um nó de IA; o `conferir-prompt.mjs` roda como passo de código antes de mandar o prompt ao gerador, e barra o que ele achar |

## O que cada estrutura precisa ter

1. **A base:** `docs/04-regua-de-criativo.md` e `docs/07-prompt-de-imagem.md` no mínimo. Sem a régua, a IA entrega
   peça bonita e ignorável.
2. **A ficha da marca** (`marca/ficha.md`), relida antes de cada peça.
3. **A regra de ordem:** copy aprovada, depois uma prova, depois o lote.

## Custos

| Item | Custo |
|---|---|
| O repositório, as skills, as ferramentas | 0 (MIT) |
| Gerar a imagem colando o prompt na sua assinatura (ChatGPT, Gemini) | o que você já paga |
| Gerar por API (automação) | cobrado por imagem pelo fornecedor; diga o custo antes de ligar |
| Ferramentas locais (`ferramentas/`) | 0 (Node 22+ e, para a logo, Python 3 com Pillow) |
