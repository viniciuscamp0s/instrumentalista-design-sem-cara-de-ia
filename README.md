# instrumentalista-design-sem-cara-de-ia

**A inteligência de direção de arte de peças estáticas, pronta para instalar no Claude Code, no Codex ou em qualquer
estrutura de IA.** Posts, carrosséis e anúncios de **qualquer segmento**, com o mesmo método que usamos todos os
dias.

Você diz o segmento, a marca e o objetivo. A IA faz a entrevista da marca, pesquisa o que o mercado do segmento já
valida, dá a cada peça uma direção de arte própria, escreve a copy nos 4 campos e entrega o **prompt de imagem
pronto** para colar no ChatGPT, no Gemini ou no gerador que você usa. Uma peça de prova antes do lote, e a régua de
criativo como conferência final: **se dá para ignorar, não sai.**

O que você leva:

- **A régua de criativo** ([`docs/04`](docs/04-regua-de-criativo.md)): 4 lentes (scroll, anunciante, valor
  percebido, capricho) e as regras de ouro que mais reprovam peça. Nasceu de centenas de correções reais.
- **O motor de prompt** ([`docs/07`](docs/07-prompt-de-imagem.md)): texto exato em português, cores em hex, respiro
  em porcentagem, logo nunca redesenhada, teto de 4 imagens, o que funciona em cada gerador.
- **Mais de 80 erros reais que viraram regra** ([`docs/11`](docs/11-erros-que-ja-cometemos.md)): direção de arte,
  texto, logo, preço, carrossel, prompt, referência e processo.
- **Carrossel que as pessoas salvam** ([`docs/08`](docs/08-carrossel-organico.md)): desfecho antes do tema, 6
  arquétipos, arquitetura de cards e o que já falhou na geração.
- **Ferramentas sem IA**: o `conferir-prompt.mjs` barra os erros mecânicos antes de você gastar uma geração; o
  `logo.py` faz a versão branca da logo oficial e compõe a logo por cima da arte, sem chapa atrás.
- **3 exemplos de ponta a ponta** em segmentos diferentes ([`exemplos/`](exemplos/)): hamburgueria (anúncio),
  clínica odontológica (carrossel), loja de roupa (post fixado e anúncio).

## Instalar

Cole no Claude Code ou no Codex o prompt de [`INSTALAR.md`](INSTALAR.md). A IA instala, testa e, no fim, faz a
entrevista da sua marca.

## Por onde começar

| Você quer | Leia |
|---|---|
| Entender o caminho de uma peça | [`docs/01-o-metodo.md`](docs/01-o-metodo.md) |
| Montar a ficha da marca | [`docs/02-entrevista-de-marca.md`](docs/02-entrevista-de-marca.md) |
| Ver como o seu segmento já anuncia | [`docs/03-pesquisa-de-mercado.md`](docs/03-pesquisa-de-mercado.md) |
| **Saber o que reprova uma peça (leia antes de entregar)** | [`docs/04-regua-de-criativo.md`](docs/04-regua-de-criativo.md) |
| Decidir o que a peça mostra | [`docs/05-direcao-de-arte.md`](docs/05-direcao-de-arte.md) |
| Escrever o texto da arte e a legenda | [`docs/06-copy-na-arte.md`](docs/06-copy-na-arte.md) |
| Escrever o prompt de imagem | [`docs/07-prompt-de-imagem.md`](docs/07-prompt-de-imagem.md) |
| Fazer um carrossel | [`docs/08-carrossel-organico.md`](docs/08-carrossel-organico.md) |
| Recriar um anúncio que você admira | [`docs/09-modelar-referencia.md`](docs/09-modelar-referencia.md) |
| Tamanhos, zona morta e entrega | [`docs/10-formatos-e-entrega.md`](docs/10-formatos-e-entrega.md) |
| **Os erros que não podem voltar** | [`docs/11-erros-que-ja-cometemos.md`](docs/11-erros-que-ja-cometemos.md) |
| Usar no ChatGPT, Claude.ai, Gemini ou numa automação | [`docs/12-como-conectar.md`](docs/12-como-conectar.md) |
| As skills por função | [`skills/README.md`](skills/README.md) |
| Quem fez as skills de terceiros | [`CREDITOS.md`](CREDITOS.md) |

## O caminho de uma peça

```text
objetivo ──> ficha da marca ──> pesquisa do mercado ──> direção de arte (uma por peça)
                                                                │
          régua de criativo <── UMA prova <── prompt <── copy nos 4 campos (aprovada)
                 │
          lote (variando gênero) ──> formatos finais e entrega
```

**A IA cria o prompt, você gera a imagem, o código confere.** IA só onde há julgamento (direção, copy, prompt).
Conferir prompt, fazer a versão branca da logo e compor a logo são código: custam zero.

## Experimente em 1 minuto

```bash
git clone https://github.com/viniciuscamp0s/instrumentalista-design-sem-cara-de-ia.git && cd instrumentalista-design-sem-cara-de-ia
npm test                                          # testes, sem dependências
echo 'Static ad, square 1:1. Logo inside a white rounded badge. 8K.' | node ferramentas/conferir-prompt.mjs
```

Precisa de Node 22+. Para a ferramenta de logo, Python 3 com Pillow (`pip install pillow`; no Windows, `py`).

## O que não está aqui

Nenhum dado de cliente, nenhuma marca real, nenhuma arte de cliente, nenhuma inteligência de um segmento
específico: as regras são universais e os exemplos são de marcas fictícias. As skills de terceiros não são
redistribuídas: a instalação baixa cada uma do original, se você quiser.

## Desenvolvimento

```bash
npm test                         # testes (node --test): conferidor, links, skills, exemplos
node ferramentas/varredura.mjs   # varredura de privacidade antes de publicar um fork
```

## Licença e créditos

MIT. Feito por Vinicius Campos ([@viniciuscamp0s_](https://www.instagram.com/viniciuscamp0s_/) no Instagram), a
partir das artes que dirigimos para marcas de vários segmentos. Skills e referências de terceiros: ver
[`CREDITOS.md`](CREDITOS.md).
