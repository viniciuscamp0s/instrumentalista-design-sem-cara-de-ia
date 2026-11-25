# 02 · Entrevista de marca: a ficha que toda peça relê

> A IA não chuta cor, público nem oferta. Ela pergunta uma vez, grava em `marca/ficha.md` (modelo em
> [`../modelos/ficha-de-marca.md`](../modelos/ficha-de-marca.md)) e relê a ficha antes de cada peça.

## Como conduzir

- **Uma pergunta por vez**, com exemplo de resposta, para a pessoa não travar.
- O que dá para descobrir sozinha (cores da logo, site, perfil público, anúncios ativos) a IA descobre e só
  **confirma**; não pergunta.
- Resposta vaga ("público geral", "tom profissional") não serve: a IA devolve com uma proposta concreta para a
  pessoa confirmar ou corrigir.
- Leva de 10 a 15 minutos. Marcas com várias unidades ou produtos ganham uma ficha por linha de produto.

## As perguntas, na ordem

| # | Pergunta | Por que a peça precisa disso |
|---|---|---|
| 1 | **O que você vende e para quem?** Em uma frase, como você diria a um amigo | a cena tem de dizer o produto em 1 segundo, e nunca outro produto |
| 2 | **Quem é o público literal?** Idade, profissão, renda, onde mora, o que faz no dia a dia | a cena tem de ser do mundo dele; cena fora do mundo do público vira piada |
| 3 | **Em que cidade ou região você atende?** | paisagem e casa têm a cara da cidade real; região vira chamada de público |
| 4 | **Qual o imaginário visual desse público?** Telas e cidade? Gente, casa, consultório? | define quanto a arte pode estilizar sem gerar rejeição ([`05`](05-direcao-de-arte.md)) |
| 5 | **Qual o desejo principal dele?** O que ele quer que aconteça na vida | o desejo é a headline; o diferencial vira apoio |
| 6 | **Qual a dor concreta?** Uma situação que ele sente hoje, com detalhe | anúncio de dor sem detalhe passa batido |
| 7 | **Qual a oferta?** Preço, condições, validade, de onde vem cada número | número sem fonte não entra na arte |
| 8 | **Quais provas existem de verdade?** Anos, clientes atendidos, avaliações, selos, fotos reais | prova inventada é risco legal; prova real é ouro |
| 9 | **Quais os seus diferenciais?** | entram como satélite (selo, linha de apoio), nunca como headline |
| 10 | **Tom de voz:** como a marca fala? Três palavras e uma que ela nunca usaria | a copy da arte segue o tom; a palavra proibida entra na ficha |
| 11 | **Logo:** mande o arquivo (PNG com fundo transparente). Tem versão branca? | a logo nunca é desenhada pela IA; sem versão branca, o código gera ([`07`](07-prompt-de-imagem.md)) |
| 12 | **Cores:** a IA lê da logo e confirma com nome e hex | cor chutada faz a peça parecer de outra marca |
| 13 | **Fontes da marca:** existem? São obrigatórias? | por padrão a fonte é livre por peça; só trava se você pedir |
| 14 | **Fotos reais disponíveis:** equipe, local, produto, eventos | foto real vence cena gerada quando o assunto é real |
| 15 | **Histórico:** quais anúncios ou posts já deram mais resultado? Mande os 3 melhores | o card de oferta e o ângulo saem do que já converteu, não de chute |
| 16 | **Referências que você admira** (de qualquer segmento) e **o que nunca quer ver** | estilo de referência pode ser modelado; conteúdo nunca |
| 17 | **Onde publica:** feed, Stories, anúncio, quais redes | define os formatos de entrega |

## O que a IA confere sozinha antes de fechar a ficha

- A logo tem **transparência real**? Arquivo "branco" que na verdade é branco sobre quadrado preto opaco cola o
  quadrado inteiro na arte. Se não tiver, avisa e usa só as formas da marca.
- Existe `marca/logo-branca.png`? Se a logo é colorida e não há versão branca, gera com
  `python ferramentas/logo.py branca marca/logo.png` antes de escrever qualquer prompt.
- Cada preço tem fonte e validade? Cada rótulo ("à vista", "parcelado", "a partir de") bate com a tabela?
- A cidade tem cartão-postal **unânime**? A IA pesquisa (nunca decide de memória) e anota na ficha.

## Depois da ficha

A ficha é viva. Cada correção sua que vale só para essa marca entra na seção **"Aprendizados"** dela, com a data e
o motivo. É isso que faz a terceira campanha sair melhor que a primeira sem você repetir nada.
