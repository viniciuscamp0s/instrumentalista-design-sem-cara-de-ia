# 01 · O método: do pedido à peça aprovada

> Vale para qualquer segmento e para os três objetivos: **post orgânico**, **carrossel** e **anúncio estático**.
> Os outros documentos detalham cada passo; este é o mapa.

## A divisão do trabalho

| Quem | Faz | Por quê |
|---|---|---|
| **A IA** (Claude, Codex, ChatGPT) | entrevista, pesquisa, direção de arte, copy, **o prompt** | é onde há julgamento |
| **O gerador de imagem** (ChatGPT/gpt-image, Gemini, outro) | a imagem, a partir do prompt | você gera na sua assinatura, custo zero por peça |
| **O código** (`ferramentas/`) | confere o prompt, faz a versão branca da logo, compõe a logo oficial, varre dado privado | o que se repete não deve gastar IA nem depender de memória |
| **Você** | aprova a copy, aprova a prova, aprova o lote | a autoridade final sobre a marca é sua |

**O produto da IA é o prompt, nunca a imagem.** A IA não monta arte por conta própria (nem em HTML, nem em script,
nem por API paga) a menos que você peça naquela hora. Se pedir, vale a regra da prova (passo 7).

## Os 10 passos

```text
 1. objetivo ─> 2. ficha de marca ─> 3. pesquisa do mercado ─> 4. direção de arte (uma por peça)
                                                                       │
 8. régua de criativo <── 7. UMA prova <── 6. prompt de imagem <── 5. copy nos 4 campos (aprovada)
        │
 9. lote (variando gênero) ─> 10. formatos finais e entrega
```

1. **Objetivo.** Anúncio (parar o scroll de quem não te segue e gerar clique) ou orgânico (fazer quem já te vê
   salvar, compartilhar, seguir, comentar). No carrossel, decida o **desfecho** antes do tema
   ([`08-carrossel-organico.md`](08-carrossel-organico.md)).
2. **Ficha de marca.** Entrevista curta, uma pergunta por vez: cores (tiradas da logo real), público, tom, oferta,
   provas que existem de verdade. Fica salva e é relida a cada peça ([`02-entrevista-de-marca.md`](02-entrevista-de-marca.md)).
3. **Pesquisa do mercado.** Antes de escrever, ver como o segmento já anuncia: ganchos, palavras e promessas que o
   público já entende. Do mercado se aprende o padrão, nunca a frase ([`03-pesquisa-de-mercado.md`](03-pesquisa-de-mercado.md)).
4. **Direção de arte.** Uma direção própria por peça: tipo de criativo pela etapa do funil, gênero visual, cena,
   hierarquia ([`05-direcao-de-arte.md`](05-direcao-de-arte.md)). Nada herdado por hábito da peça anterior.
5. **Copy nos 4 campos.** Rótulo interno, texto na arte, legenda, conceito visual
   ([`06-copy-na-arte.md`](06-copy-na-arte.md)). **Copy primeiro, arte depois da aprovação:** texto é barato de
   revisar, imagem não.
6. **Prompt de imagem.** Prosa técnica em inglês, todo texto da arte em português exato entre aspas, cores com hex,
   respiro em porcentagem, logo intocada ([`07-prompt-de-imagem.md`](07-prompt-de-imagem.md)). Passe pelo
   `node ferramentas/conferir-prompt.mjs` antes de entregar.
7. **Uma prova antes do lote.** Uma peça gerada, mostrada e aprovada antes de qualquer outra. Lote produzido antes
   da primeira revisão é lote inteiro no lixo. Vale também para prompts: direção não validada sai com **um prompt
   de prova por direção**, não cinco.
8. **Régua de criativo.** A conferência final: as 4 lentes e as regras de ouro
   ([`04-regua-de-criativo.md`](04-regua-de-criativo.md)). **Se dá para ignorar, não sai.**
9. **Lote.** Depois do sim, o resto do lote, variando gênero e diagramação entre as peças (3 ou mais peças com o
   mesmo recurso viraram fôrma).
10. **Formatos e entrega.** A prova sai só no tamanho em que foi gerada; os formatos de subida (1080×1080,
    Stories 1080×1920, carrossel 1080×1350) só depois de tudo aprovado. Entrega em pack com o racional
    ([`10-formatos-e-entrega.md`](10-formatos-e-entrega.md)).

## Anúncio × orgânico: a composição muda

|  | **Anúncio** | **Orgânico** |
|---|---|---|
| Objetivo | parar o scroll de quem **não** te segue e gerar clique | quem já te vê **salvar, compartilhar, seguir** |
| Tempo de leitura | 1 segundo: a ideia inteira cabe nele | vários segundos, card a card |
| Texto | headline monumental, no máximo 4 zonas de texto | mais texto é permitido, mas uma ideia por card |
| Estrutura | peça única ou pack (dor, prova, oferta) | carrossel com arco narrativo |
| Preço | com preço para quem já conhece a marca; sem preço para público frio | raramente: vende sem parecer que vende |
| Erro fatal | **bonito e confuso** | **bonito e raso** |

## Quando parar e perguntar

- Falta a copy, o preço, a condição ou a prova: **pergunte, nunca invente**. Se mandarem seguir sem o dado, use
  `[PREENCHER]` visível e avise.
- Você pediu um ajuste sem dizer o motivo: a IA pergunta o porquê antes de executar. Cada motivo explicado vira
  regra escrita na ficha da marca (ou na régua, se valer para qualquer marca). Corrigir sem entender repete o erro.
- O método falhou (o gerador não obedece, a cena sai genérica): a IA propõe trocar o caminho e espera o seu sim.
  Trocar de ferramenta ou de método sozinha, no meio do lote, é proibido.

## O aprendizado que não se perde

Cada correção sua é aula, não ordem. A IA responde com o princípio aprendido, nunca com "corrigido", e grava:

- **na ficha da marca** (`marca/ficha.md`), o que vale só para ela;
- **na régua** (`docs/04`), o que vale para qualquer marca. Na dúvida, é da marca.

Corrigir um erro num lote e repeti-lo no seguinte é o pior erro possível. A régua é relida **antes de cada lote**,
não só depois de uma reprovação.
