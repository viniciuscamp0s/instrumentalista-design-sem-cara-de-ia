# 08 · Carrossel orgânico: desfecho, arquétipo, arte

> Carrossel não é anúncio esticado. O gancho é a **ideia** do post e o objetivo é retenção mais salvar,
> compartilhar, seguir ou comentar.

## A regra de ordem: o desfecho antes do tema

Antes de decidir o que postar, decida o que o post precisa **fazer**. Só então escolha o arquétipo.

| Quer | Use |
|---|---|
| **Salvamentos** | Sistema · Fórmula · Coleção |
| **Compartilhamentos** | Autópsia |
| **Seguidores** | Confissão |
| **Comentários e mensagens** | Preenchível |

Postar uma Confissão e estranhar que ninguém salvou não é problema de qualidade, é de formato.

## Os 6 arquétipos

| Arquétipo | O que é | Vence | Use quando | Exemplo neutro |
|---|---|---|---|---|
| **Sistema** (o playbook) | o processo inteiro, numerado, com uma regra que não se quebra | salvamentos | você tem um processo que roda de verdade | clínica: "O pós-clareamento em 5 passos (e o único que não pode falhar)" |
| **Fórmula** (o blueprint) | uma habilidade quebrada em partes **nomeadas** | salvamentos e autoridade | dá para nomear o que as pessoas acham que é talento | loja de roupa: "O método 3-2-1 para montar 6 looks com 6 peças" |
| **Autópsia** | antes e depois, **uma variável só** | compartilhamentos | dá para pôr duas versões lado a lado | restaurante: o mesmo prato, montagem amadora × montagem da casa |
| **Coleção** | lista numerada grande (17 ferramentas, 30 erros) | a maior taxa de salvamento | você já acumulou uma biblioteca | papelaria: "25 presentes até R$ 50 para o amigo secreto" (preços confirmados) |
| **Preenchível** | não é para ler, é para usar; tem espaço em branco | comentários e mensagens | você tem um modelo que a pessoa completa | academia: "Seu plano de treino da semana: preencha e salve" |
| **Confissão** (a cicatriz) | admissão honesta com a lição grudada | seguidores e comentários (não espere salvamentos) | há um erro real que ensinou o que você ensina hoje | confeitaria: "O bolo que eu perdi no meu primeiro casamento" |

**Cicatriz, não ferida:** confissão é de algo já resolvido. Ferida aberta é desabafo, e o leitor sente.

Arquétipos adaptados de *The 6 Carousel Archetypes* (créditos em [`../CREDITOS.md`](../CREDITOS.md)).

## As 5 regras de arquitetura

1. **A capa tem uma função: parar o dedo.** Não explica tudo.
2. **O card 2 confirma o gancho e dá o motivo de ficar.**
3. **Cada card funciona sozinho.** Se alguém printar um card solto, ele ainda faz sentido. Uma ideia por card.
4. **Todo carrossel tem um card que vale salvar** (o modelo, a regra, a frase para guardar).
5. **A legenda continua o post; o CTA pede uma ação só**, a da emoção que o conteúdo gerou.

## O teste antes de montar

1. **Tape a headline de cada card.** Se o que sobra não ensina nada, o card está vazio.
2. **Todo card tem algo que não é afirmação:** exemplo, antes e depois, frase citada, lacuna para preencher,
   diagrama, dado com fonte. Afirmação flutuando sobre imagem bonita não é card.
3. **Se a ideia inteira cabe numa frase, não é carrossel:** a pessoa entende pela capa e nunca arrasta.

## Quantos cards

| Para quem | Faixa | Estrutura |
|---|---|---|
| Perfil que constrói autoridade (o seu, o da sua marca) | **6 a 10** (o mais comum entre os que performam: 7) | capa · mapa (nomeia as partes) · uma parte por card · reframe (reposiciona o tema numa categoria maior) · pedido |
| Entrega enxuta em escala (cliente de agência, calendário apertado) | **até 4** | capa · desenvolvimento · desenvolvimento · fecho |

**Pack de carrosséis: 1 em 4 mais profundo.** Numa linha editorial, reserve 1 a cada 4 para um formato denso: um
tema só, menos cards, parágrafos mais longos. Estrutura: definição → causa → comparação ou linha do tempo → o que
muda agora → fechamento ligado ao negócio.

## Armadilhas de campo

- **"X coisas que..." como fórmula fixa de capa.** Duas capas seguidas com a mesma construção viram vício. Alterne:
  pergunta, afirmação direta, cena concreta, dado que surpreende.
- **Antítese vazia** ("Não é X, é Y") como gancho.
- **Inimigo em comum.** Falar do que a marca **tem e entrega**, nunca do que "o outro" faz errado. Sem apelido
  pejorativo de concorrente; na Autópsia, contraste cenários, não pessoas.
- **Anáfora e redundância:** três cards seguidos abrindo com a mesma palavra; card que repete o anterior com
  outras palavras.

## A arte do carrossel

- **Cada carrossel é único.** Estilo e fonte mudam de um para o outro; nenhuma fonte "da marca" é obrigatória a
  menos que você peça. **Dentro** do carrossel, os cards conversam (mesma tipografia, mesmo sistema).
- **Plano de composição antes do prompt:** gênero escolhido, o que entra em cada card (estrutura visual), e por
  que esse gênero serve ao gancho. Aprovado o plano, escreve-se o prompt.
- **Nunca o mesmo gênero em posts consecutivos** da mesma marca na mesma semana.
- **Texto literal:** o texto de cada card é o que a copy aprovou; a direção de arte não reescreve.
- **Consistência declarada no prompt:** que os cards são o mesmo sistema visual (paleta, tipografia, lógica de
  fundo), a lógica de continuidade (numeração, cor alternada, elemento recorrente, indicação de "arrasta") e a
  hierarquia de cada card.

## Geração: o que funciona e o que já falhou

| Abordagem | Resultado |
|---|---|
| Várias seções `=== CARD n ===` numa chamada pedindo N cards | ❌ o gerador devolve uma colagem num arquivo só |
| N imagens totalmente separadas | ⚠️ resolve a colagem, mas cada card nasce sem relação com o anterior; compense descrevendo o sistema visual inteiro em cada prompt e anexando o card anterior aprovado como referência de cor e luz |
| Tira de 2 painéis numa imagem só, com **um único objeto físico** atravessando o canvas | ✅ funciona quando há uma cena real para compartilhar (ex.: uma bancada única atravessando de ponta a ponta). Nunca chame as metades de "panel" ou "card" (o modelo desenha dois cartões com canto arredondado): diga "left half of the canvas" e "one single flat continuous photograph" |
| Tira em cards só tipográficos | ❌ fica vazio ou poluído |
| Linha-guia de corte em cor vistosa | ❌ aparece na prévia |
| Dois passos: 1) só a foto larga, sem texto; 2) reanexar a foto e pedir só a camada de texto por cima | 🧪 promissor para continuidade; teste e registre o resultado na ficha da marca |

**Efeito infinito** (a imagem continua de um card para o outro): planeje como uma peça larga única e fatie; o ponto
de corte cai em área sem texto e sem rosto. Escolha 1 ou 2 duplas por **par lógico** (capa + mapa é o mais seguro).

## Formatos

- Card de feed: **1080×1350** (4:5).
- Versão Stories do mesmo conteúdo: **1080×1920**, com zona morta (cerca de 250 px no topo e na base; capa de
  Reels, cerca de 350 px na base). Nunca esticar a arte do feed: são duas peças.
- Mais em [`10-formatos-e-entrega.md`](10-formatos-e-entrega.md).
