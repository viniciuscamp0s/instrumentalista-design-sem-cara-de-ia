# 11 · Erros que já cometemos (e a regra que cada um virou)

> Cada linha aconteceu de verdade, em anúncios, posts e carrosséis de marcas de segmentos diferentes, e voltou na
> aprovação. Leia antes de entregar. Corrigir um erro num lote e repeti-lo no seguinte é o pior erro de todos.

## Direção de arte

| Erro | Regra |
|---|---|
| Profissional genérico em escritório genérico, bem fotografado | **Ignorável.** Se a imagem serve a qualquer anúncio trocando marca e headline, refazer |
| Corredor de portas infinitas, parede de cartazes idênticos | **Surreal = cara de IA.** A cena tem de ser fotografável de verdade, com orçamento |
| Sala de diretoria de terno num anúncio para quem trabalha no operacional | **A cena é do mundo do público literal.** Descrever quem ele é antes de escolher a cena |
| Parede de monitores com dezenas de dashboards inventados | **Teste do profissional do ramo:** se ele riria, reprova. Ninguém precisa avisar |
| Prompt sem âncora ("pessoas felizes num escritório") virou foto de banco | **Ancorar** em lugar, objeto e ação específicos, ou em foto real |
| Headline citava um objeto que não aparecia na cena | **Tudo que o texto cita aparece inconfundível no quadro**, e isso se escreve no prompt |
| Paisagem e casa de alto padrão como protagonistas de um anúncio de produto | **A cena diz o produto em 1 segundo.** Senão vira lead desqualificado que achou que era outro anúncio |
| Cenário de capital do estado para uma marca do interior | **Cara da cidade real.** Pesquisar o cartão-postal unânime antes de concluir que não existe |
| Cena com cara de filme estrangeiro para um público local | **Realismo cultural local**: material, fachada, roupa e luz reais |
| Pedido de "sofisticado" respondido com eclipse, fogo e brasão | **Sofisticação é composição e técnica**, não tema sem relação com o produto |
| Tema da campanha comunicado só por um selinho no canto | O tema ganha **key visual** (lettering com acabamento de material), não um adesivo |
| Peça sóbria demais, luz plana | **Peso visual:** efeito, profundidade, tratamento. Sóbrio demais vira "pobre" |
| Cenário de renda errada para o público | **O cenário segue a renda e o contexto de quem vê** |
| Evento real divulgado com cena gerada e frase de efeito | **Foto real + informação objetiva** (o quê, para quem, onde, quando, CTA) |
| Elemento grandioso sem função na mensagem | Todo elemento tem função. **Enfeite sai** |
| Arte poluída: selo, faixa, ícone e moldura disputando o olhar | **Menos poluição:** uma imagem, uma ideia, o mínimo de texto |

## Texto e tipografia

| Erro | Regra |
|---|---|
| Carimbo "OBRIGATÓRIO POR LEI" sem dizer o quê nem qual lei | **Todo texto dentro da imagem faz sentido completo sozinho** |
| "30 OPÇÕES. UMA DECISÃO." (opções de quê?) | **Headline autossuficiente:** lida sozinha, diz o que se vende |
| Duas frases com nexo, sem conclusão aplicável | A headline **conclui**. Precisa de tamanho? Diagrama, não amputa |
| Frase + subfrase + selo + selo encolhidos para caber | **Teste do outdoor:** corta texto, nunca o corpo. Headline + 1 chamada + preço + CTA |
| Valor pequeno encostado no canto de um card meio vazio | **O texto ocupa o espaço que tem.** Conferir sem ninguém pedir |
| Headline branca saiu levemente tingida | **`#FFFFFF` explícito** no prompt |
| Travou em "3 linhas com hierarquia" em todas as peças | **O número de linhas sai da copy**, não do template |
| Mesma estrutura de frase com substantivos trocados no lote inteiro | **Ideia nova por peça**, ritmo e diagramação diferentes |
| Fonte e estilo travados por hábito | **Fonte livre por padrão**; trava só com pedido |
| Fonte desenhada pelo gerador, impossível de reproduzir no ajuste | Achar a fonte mais próxima em arquivo, ajustar métrica e **registrar qual foi** |
| Palavra "logo" dentro de uma frase da arte virou pedido de logotipo | **Texto a exibir entre aspas; instrução técnica fora delas** |
| Travessão na arte | **Ponto ou vírgula.** Travessão é marca de texto de IA |
| "Não é X, é Y" como gancho, repetido | **Antítese vazia é muleta.** Cena concreta, dado, pergunta genuína |
| Palavra que rebaixa o produto ("qualquer um dos nossos...") | **Afirmação de valor**, nunca construção de commodity |

## Marca e logo

| Erro | Regra |
|---|---|
| O gerador redesenhou a logo em cada peça, todas diferentes | **A logo nunca é gerada.** Arquivo oficial anexado ou composto por código, conferido peça a peça |
| Logo sobre um card branco arredondado "para dar contraste" | **Nunca chapa, badge ou pílula.** Versão branca + sombra suave ou degradê difuso |
| A mesma proibição escrita na régua, e o prompt seguinte pediu "white rounded badge" de novo | **Reler o prompt contra a régua** antes de entregar (o `conferir-prompt.mjs` barra isso) |
| Arquivo "branco" era branco sobre quadrado preto, colado inteiro | **Conferir a transparência** do arquivo; usar só as formas da marca |
| Logo colorida usada onde a branca foi enviada | **Exatamente a variante anexada** para aquela peça |
| Logo oficial, mas minúscula | **Escala do padrão da marca** (referência: 20% a 25% da largura no anúncio) |
| Subtítulo inventado na logo | **Texto da logo por extenso no prompt**, palavra por palavra, e conferido |
| "A logo como elemento da cena" virou uma plaquinha na parede | **A marca é composta por cima**, nunca objeto da cena |
| Retângulo fixo pintado para a logo comeu letras do título | **Medir a área livre** antes de compor |
| Marca errada em todas as peças, culpa atribuída ao código | **Conferir primeiro o arquivo de origem** |
| Cores chutadas | **Cores lidas da logo real**, nome + hex |

## Oferta e preço

| Erro | Regra |
|---|---|
| Quatro valores grandes no card, nenhum em destaque | **Um valor em destaque**, escolhido pelo histórico; o outro menor e visível |
| Parcela com o rótulo "à vista" | **Cada valor com o rótulo exato**, conferido contra a tabela |
| Preço de tabela antiga sem validade | **Fonte e validade** em cada preço |
| "Caiu para" sem valor anterior | "De/por" e "caiu" **só com origem verificável** |
| Dígito errado no preço gerado pela IA | **Número exato renderizado por código** quando o gerador erra |
| Preço competindo com a headline | **Dois focos concorrentes é erro:** preço em bloco próprio |
| Preço para quem nunca ouviu falar da marca | **Oferta com preço para público quente**; dor sem preço para frio |
| Prova social inventada ("+500 clientes") | **Só número confirmado.** Sem dado, afirmação genérica verdadeira |
| Telefone impresso na arte | **CTA genérico;** o contato vive no botão |
| Urgência sem estoque nem prazo | **Urgência só real** |

## Carrossel

| Erro | Regra |
|---|---|
| Carrossel lindo que ninguém salvou | **Desfecho antes do tema:** o arquétipo errado para o resultado |
| Cards que só afirmam sobre imagem bonita | **Cada card tem um artefato** (exemplo, dado, modelo, lacuna) |
| Duas capas seguidas com "X coisas que..." | **Alternar a construção da capa** |
| Tom de "nós contra o fornecedor ruim" | **Falar do que a marca entrega**, nunca do vilão |
| Pedido de N cards numa chamada virou colagem | **Um card por chamada** ou tira com um único objeto atravessando |
| "Left panel / right panel" virou dois cartões com canto arredondado | **"Left half of the canvas"** e "one continuous photograph" |
| Menos cards do que o pedido | **Contar os arquivos** antes de mostrar |
| Carrossel seguinte com a mesma fonte e estilo por hábito | **Cada carrossel é único** |

## Prompt e geração

| Erro | Regra |
|---|---|
| Lote de 6 imagens numa mensagem, vieram 3 piores | **Teto de 4 por bloco;** com referência, um prompt por imagem |
| A peça de referência anexada foi reproduzida no lugar da pedida | **"Use only as reference, do not reproduce"** no prompt |
| "8K ultra high resolution" para ganhar nitidez | **Nunca resolução no prompt.** Ampliador depois |
| "no blur, no bokeh, no glow" gerou exatamente isso | **Descrever em positivo;** negativo curto só no fecho |
| Margens descritas com adjetivo, tudo encostado na borda | **Respiro em % do canvas** |
| 1:1 e 9:16 pedidos juntos, os dois piores | **Uma proporção por prompt** |
| Medidor com números legíveis saiu deformado | **Objeto com texto de fábrica pela forma**, sem exigir número |
| Pessoa real saiu com físico de academia e olhar derrotado | **Corpo comum casado com a foto, cabeça erguida, olhar atento** |
| Foto de pessoa com ombro cortado, inútil para recorte | **Silhueta inteira com folga** dos dois lados |
| Nome da marca da referência esquecido no prompt da marca nova | **Caçar contaminação cruzada** em todo prompt modelado |
| Geração em paralelo derrubada pelo limite do serviço | **Gerar em sequência** quando há limite; medir antes de disparar lote |

## Referência e cópia

| Erro | Regra |
|---|---|
| Texto de post alheio aproveitado "com outras palavras" | **Conteúdo nunca se copia;** escrever com a referência fechada |
| Peça alheia com só logo e preço trocados | **Recriar do zero** com a própria identidade |
| Marca, app ou rosto real num mockup | **Identidade fictícia**, só a convenção do gênero |
| Prompt escrito com base em 2 de 6 referências da pasta | **Ler todas** antes de escrever |
| Banco de referências virou tela e projeto | **Referência é insumo**, não produto |

## Processo e entrega

| Erro | Regra |
|---|---|
| Arte gerada sobre copy não aprovada; a copy caiu e levou a arte | **Copy primeiro**, arte depois do sim |
| 10 arquivos produzidos antes de mostrar o primeiro; os 10 no lixo | **Uma prova antes do lote** |
| O método mudou no meio (de gerador para montagem manual) sem combinar | **Propor a troca e esperar o sim** |
| Ajuste de uma palavra, imagem regerada e pior, aprovada perdida | **Ajuste de texto muda só o texto.** Backup antes de sobrescrever |
| Prova e formato de subida gerados juntos | **Só a prova** até o sim |
| Criativo no ar trocado no mesmo anúncio | **Peça nova em anúncio novo**; o antigo pausa intacto |
| "Conferido" dito sem ter conferido peça a peça | **Conferência declarada é conferência feita** |
| Ajuste pedido sem motivo, executado às cegas, erro repetido | **Perguntar o porquê;** cada motivo vira regra escrita |
| Mesma correção num lote, mesmo erro no seguinte | **Reler a régua antes de cada lote** |
| Entrega maior que o pedido (tela, sistema, painel) | **Entregar o que foi pedido**; o resto é proposta |
| Arquivo superado deixado na pasta de aprovação | **Apagar a versão antiga** ao substituir (backup da aprovada) |
