# 10 · Formatos e entrega

## Os tamanhos

| Peça | Tamanho | Zona morta (nada crítico ali) |
|---|---|---|
| Anúncio estático (feed) | **1080×1080** | margem de segurança de cerca de 6% |
| Anúncio estático (Stories e Reels) | **1080×1920** | cerca de 250 px no topo e 250 px na base |
| Card de carrossel ou post orgânico de feed | **1080×1350** | margem de cerca de 6% |
| Stories orgânico | **1080×1920** | cerca de 250 px no topo e na base |
| Capa de Reels | **1080×1920** | cerca de 250 px no topo e 350 px na base (a barra de ações ocupa mais) |

Anúncio estático sai em **dois tamanhos: 1080×1080 e 1080×1920**. O 4:5 no anúncio só se você pedir.

**Não leve a zona morta do Stories para o feed:** o recuo errado rouba altura útil e amontoa os elementos.

## A ordem dos tamanhos

1. **A prova sai só no tamanho em que foi gerada.** Nada de cópia da mesma peça em dois tamanhos na pasta de
   aprovação.
2. **Os formatos de subida só existem depois de tudo aprovado.**
3. Uma proporção por prompt; a outra sai da peça aprovada.

## Readequar uma arte aprovada (quadrado para vertical e vice-versa)

- **Muda só dimensão e posição.** Texto, oferta, cores e identidade ficam idênticos; mudou conteúdo, é arte nova
  que precisa de aprovação.
- **O espaço extra se distribui** entre respiro, espaçamento interno e margem; nenhuma zona absorve tudo (senão fica
  vazio de um lado e amontoado do outro).
- **Selo e logo são unidades rígidas:** movem inteiros, proporcionais, nunca distorcidos.
- Gerar a vertical pelo gerador: anexe a peça aprovada e peça para estender o fundo, preservando cada elemento
  exatamente.

## O pack de entrega

Para cada peça:

```text
MARCA_CAMPANHA_L1_01_dor-espera.png
  Ângulo: dor · Para: público frio · Objetivo: clique
  Texto na arte: (cada zona, literal)
  Legenda: (pronta para colar)
  Conceito visual: (2 a 3 linhas, com o porquê)
  Conferência: lentes 1 a 4 ok · logo oficial conferida · texto letra a letra ok · números conferidos
```

- **Lote de 3 por conjunto de anúncios** (dor, prova, oferta) é o padrão.
- Nomenclatura que ordena sozinha: `MARCA_CAMPANHA_L{lote}_{seq}_{angulo}.png`.
- Versão superada sai da pasta (backup da aprovada antes de sobrescrever).
- **Mostrar e deixar reprovar:** a peça e a conferência declarada, sem pedir aprovação item a item num texto longo.
- **Texto que você vai usar** (legenda, prompt) vem pronto para copiar, um bloco por uso.

## Peça nova não substitui peça no ar

Campanha nova sobe em estrutura nova; a peça que já rodou fica pausada, intacta, porque ela é o histórico do que deu
certo. Trocar o criativo de um anúncio que está no ar apaga o aprendizado dele.

## Arte final: onde guardar

Arte de marca (sua ou de cliente) **não vai para o git**: binário não comprime entre versões e o repositório incha.
Guarde as artes finais numa pasta da marca com cópia num drive, e no git só texto (ficha, pesquisa, prompts de
referência se quiser).
