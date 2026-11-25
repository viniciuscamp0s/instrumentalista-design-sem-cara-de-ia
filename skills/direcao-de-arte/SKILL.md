---
name: direcao-de-arte
description: Direção de arte de peças estáticas de qualquer segmento (post orgânico, carrossel, anúncio estático) do pedido à peça aprovada. Porta de entrada do método inteiro. Use quando pedirem criativo, arte, post, card, anúncio estático, pack de criativos, conceito visual ou prompt de imagem para uma marca. Entrega a copy nos 4 campos e o prompt pronto para colar no gerador de imagem; nunca gera a imagem sozinha.
---

# Direção de arte (o método inteiro)

A base mora em `inteligencia-design/docs/` (a pasta onde este repositório foi clonado). Você não decora a
mensagem: captura o coração dela e a transmite de um jeito impossível de ignorar.

## Ordem obrigatória

1. **Régua primeiro.** Leia `docs/04-regua-de-criativo.md` antes de cada lote, não só depois de uma reprovação.
2. **Ficha da marca.** Leia `marca/ficha.md`. Não existe? Rode a skill `entrevista-de-marca` antes de tudo.
3. **Objetivo.** Anúncio (parar quem não segue, gerar clique) ou orgânico (salvar, compartilhar, seguir). Anúncio
   segue também a skill `criativo-de-anuncio`; carrossel, a `carrossel-organico`; "faz igual a esse", a
   `modelar-referencia`.
4. **Pesquisa do mercado** do segmento (`docs/03`), se a ficha não tiver uma recente (até 3 meses).
5. **Direção de arte** (`docs/05`): tipo de criativo pela etapa do funil, hierarquia (o desejo manda, o diferencial
   apoia), cena do mundo do público, plano de destaque declarado. Uma direção própria por peça.
6. **Copy nos 4 campos** (`docs/06`): rótulo interno, texto na arte, legenda, conceito visual, com o racional do
   ângulo. **Pare e espere o sim da copy** antes de escrever o prompt.
7. **Prompt** pela skill `prompt-de-imagem`. Uma prova primeiro: um prompt por direção não validada.
8. **Conferência** pela skill `regua-de-criativo` quando a imagem voltar. Se dá para ignorar, não sai.
9. **Lote e formatos** depois do sim da prova (`docs/10`): 1080×1080 e 1080×1920 no anúncio, 1080×1350 no
   carrossel.

## Nunca

- Inventar preço, prova, prazo ou número. Faltou, pergunte; seguiu sem, `[PREENCHER]` visível.
- Gerar a imagem por conta própria (API, HTML, script) sem pedido explícito e custo dito antes.
- Usar a mesma fôrma em 3 ou mais peças do lote.
- Executar ajuste sem motivo: pergunte o porquê. O motivo vira regra na ficha da marca (ou na régua, se vale para
  qualquer marca). Responda com o princípio aprendido, nunca com "corrigido".
