# Exemplo 1 · Hamburgueria artesanal: pack de anúncio (dor, prova, oferta)

> Marca fictícia, números fictícios. Mostra o método inteiro até o prompt. Nenhuma imagem foi gerada: a imagem você
> gera colando o prompt no seu gerador.

## 1. Pedido

"Quero anúncios para aumentar os pedidos de delivery à noite da minha hamburgueria."

## 2. Ficha da marca (resumo)

| Campo | Resposta |
|---|---|
| Marca | **Casa Brasa**, hamburgueria artesanal de bairro, delivery próprio |
| Público | 22 a 40 anos, mora a até 5 km, pede à noite durante a semana, já se decepcionou com lanche frio e murcho |
| Cidade | cidade média do interior, sem cartão-postal unânime (pesquisado); bairro residencial com casas e sobrados |
| Desejo | lanche de verdade, quente, sem sair de casa |
| Dor concreta | o lanche chega frio, com o pão encharcado, 50 minutos depois |
| Diferencial (apoio) | embalagem térmica própria, entrega em até 30 min no raio |
| Oferta | combo burger + fritas + refri: **R$ 39,90** no app próprio (tabela da casa, válida no mês) |
| Prova real | **4,8 estrelas em 1.900 avaliações** no app de delivery (conferido na página da loja) |
| Cores (da logo) | brasa `ember orange #E4572E` · carvão `charcoal #1E1E1E` · creme `warm cream #F4EBDD` |
| Logo | `marca/logo-branca.png`; a logo diz "CASA BRASA" e, embaixo, "HAMBURGUERIA" |
| Histórico | o anúncio que mais trouxe pedido mostrava o preço do combo grande, à vista |

## 3. Pesquisa do mercado (síntese)

Busca "hamburgueria delivery" na Biblioteca de Anúncios, anunciantes da região com mais tempo no ar:

1. **Palavras que se repetem:** "artesanal", "suculento", "smash", "combo".
2. **Promessas batidas:** "o melhor da cidade", "ingredientes selecionados".
3. **Ganchos que rodam há mais tempo:** os de combo com preço e os de "chegou quentinho".
4. **O que ninguém faz:** provar o "quente" na imagem; todos dizem, ninguém mostra.
5. **Clichê visual a evitar:** burger em pé sobre tábua de madeira, fundo escuro, fumaça falsa.

## 4. Direção de arte (uma por peça)

| Peça | Ângulo | Público | Gênero | Plano de destaque |
|---|---|---|---|---|
| 01 | dor | frio | cena documental noturna com headline | headline > cena > CTA |
| 02 | prova | morno | cartaz tipográfico com foto recortada do produto | número da avaliação > headline > produto |
| 03 | oferta | quente | key visual de produto com card de preço | preço > nome do combo > CTA |

Três composições bem diferentes de propósito: o teste compara abordagens, não detalhes.

## 5. Copy nos 4 campos (aprovada antes do prompt)

**Peça 01 · dor**

- **Rótulo interno:** `CASABRASA_DELIVERY_L1_01_dor-frio`
- **Texto na arte:** rótulo "PARA QUEM PEDE À NOITE" · headline "SEU LANCHE CHEGA QUENTE." · linha 2 "OU A GENTE MANDA OUTRO." · CTA "PEÇA PELO APP"
- **Legenda:** Pão encharcado e queijo frio não são "normal de delivery". Nossa embalagem térmica segura o calor até a sua porta, e se chegar frio, a gente manda outro. Peça pelo app.
- **Conceito visual:** um entregador de moto parado no farol, à noite, abre a bag e o vapor sobe do lanche aberto na embalagem. A prova do "quente" está na imagem; o público frio entende sem ler.

**Peça 02 · prova**

- **Rótulo interno:** `CASABRASA_DELIVERY_L1_02_prova-avaliacao`
- **Texto na arte:** número "4,8" · apoio "EM 1.900 AVALIAÇÕES NO APP" · headline "O BAIRRO JÁ PROVOU." · CTA "PEÇA O SEU"
- **Legenda:** 1.900 avaliações, nota 4,8. A gente não diz que é bom: quem pediu diz. Peça pelo app e conte você também.
- **Conceito visual:** cartaz tipográfico creme com o "4,8" monumental em carvão e o burger recortado, em escala grande, invadindo a borda. Nada de fumaça nem tábua de madeira: o número é a imagem.

**Peça 03 · oferta**

- **Rótulo interno:** `CASABRASA_DELIVERY_L1_03_oferta-combo`
- **Texto na arte:** headline "COMBO BRASA" · card: "R$ 39,90" (destaque) e "burger + fritas + refri" (apoio) · CTA "PEÇA PELO APP" · rodapé "Válido no app próprio, consulte o raio de entrega."
- **Legenda:** Combo Brasa: burger artesanal, fritas e refri por R$ 39,90, só no nosso app. Chega quente em até 30 minutos no bairro.
- **Conceito visual:** o combo em estúdio escuro, luz de recorte quente vindo de trás, camadas de profundidade (fritas desfocadas em primeiro plano). Card de preço como overlay limpo, o preço é o maior elemento do card.

## 6. A prova (um prompt só, a peça 01)

Anexar: `marca/logo-branca.png`.

```text
Static social media ad, square 1:1, photorealistic advertising quality, all text in Brazilian Portuguese.

ATTACHMENTS: Use the attached logo exactly as provided. Do not redraw, restyle or recolor it. The logo reads "CASA BRASA" with "HAMBURGUERIA" below it, nothing else.

BRAND COLORS: ember orange #E4572E (accent), charcoal #1E1E1E, warm cream #F4EBDD.

SCENE: Documentary night photo on a residential Brazilian street of houses and small townhouses. A delivery rider in a plain dark jacket (no brand on clothing) has stopped his motorcycle at a red light and opened the thermal delivery bag on the back seat. Inside, an open kraft burger box: a real artisanal burger, melted cheese, steam visibly rising into the cold night air, lit by the warm red glow of the traffic light and a streetlamp. Shallow depth of field, 35mm lens, camera at bag height, slightly low angle. Believable, unstaged, nothing surreal.

LAYOUT & HIERARCHY: The steaming burger box sits in the right half, large and sharp. The headline block sits in the upper-left area over the darker part of the street. The eye enters on the headline, then the steam, then the CTA.

TEXT ON THE ARTWORK:
- small label above the headline, condensed sans-serif caps, warm cream #F4EBDD: "PARA QUEM PEDE À NOITE"
- headline line 1, heavy condensed sans-serif, all caps, pure white #FFFFFF: "SEU LANCHE CHEGA QUENTE."
- headline line 2, same font, the words inside a solid ember orange #E4572E box with white #FFFFFF text: "OU A GENTE MANDA OUTRO."
- CTA button, solid ember orange #E4572E with white #FFFFFF text, lower-left: "PEÇA PELO APP"

SPACING: 6% safety margin on every edge, nothing touches the border. 3% vertical gap between label, headline and CTA. 4% inner padding inside the orange box and the button. Clear gap between the CTA and the logo.

LOGO: the white version, bottom-right corner, about 22% of the canvas width, sitting directly on the photo with a soft drop shadow for contrast. Never place it on a badge, card or plate.

QUALITY: Ultra-detailed, professional ad design, crisp legible typography, high contrast, no watermarks, no English text on the artwork, no phone numbers anywhere.
```

Conferido com `node ferramentas/conferir-prompt.mjs`: sem bloqueio.

## 7. Depois do sim da prova: as peças 02 e 03

Anexar: `marca/logo-branca.png` (peça 03) e `marca/logo.png` colorida (peça 02, fundo creme). Um prompt por imagem.

```text
Static social media ad, square 1:1, premium graphic design with a photographic product cut-out, all text in Brazilian Portuguese.

ATTACHMENTS: Use the attached logo exactly as provided. Do not redraw, restyle or recolor it. The logo reads "CASA BRASA" with "HAMBURGUERIA" below it, nothing else.

BRAND COLORS: warm cream #F4EBDD (background), charcoal #1E1E1E (type), ember orange #E4572E (accent).

SCENE: A flat warm cream page with a subtle paper grain. A real photographic artisanal burger, cut out cleanly, very large, entering from the right edge and bleeding off the canvas, with natural soft shadow on the page.

LAYOUT & HIERARCHY: The number is the hero and the largest element, top-left. Below it the support line, then the headline. The burger fills the right 45%.

TEXT ON THE ARTWORK:
- hero number, monumental bold sans-serif, charcoal #1E1E1E: "4,8"
- support line, medium caps, ember orange #E4572E: "EM 1.900 AVALIAÇÕES NO APP"
- headline, heavy condensed caps, charcoal #1E1E1E: "O BAIRRO JÁ PROVOU."
- CTA button, solid charcoal #1E1E1E with warm cream #F4EBDD text: "PEÇA O SEU"

SPACING: 6% safety margin on every edge, 3% vertical gap between blocks, 4% inner padding in the button.

LOGO: the full-color logo, top-right corner, about 20% of the canvas width, sitting directly on the cream page. Never on a badge or card.

QUALITY: Ultra-detailed, professional ad design, crisp legible typography, high contrast, no watermarks, no English text on the artwork, no phone numbers anywhere.
```

```text
Static social media ad, square 1:1, photorealistic advertising quality, all text in Brazilian Portuguese.

ATTACHMENTS: Use the attached logo exactly as provided. Do not redraw, restyle or recolor it. The logo reads "CASA BRASA" with "HAMBURGUERIA" below it, nothing else.

BRAND COLORS: ember orange #E4572E (accent), charcoal #1E1E1E (background), warm cream #F4EBDD.

SCENE: Dark studio product shot. The combo is the hero on a matte charcoal surface: an artisanal burger in front, a paper cone of fries and a glass bottle of soda behind it (no brand labels). Warm rim light from behind, gentle top fill, layers of depth with a few fries softly out of focus in the foreground.

LAYOUT & HIERARCHY: Headline at the top center. Product in the center. The price card in the lower-left is the second focus and never competes with the headline. The price is the largest element inside the card.

TEXT ON THE ARTWORK:
- headline, heavy condensed caps, pure white #FFFFFF: "COMBO BRASA"
- price card, clean rounded overlay in warm cream #F4EBDD with soft shadow, price in ember orange #E4572E, extra bold, filling the card width: "R$ 39,90"
- line under the price, inside the card, charcoal #1E1E1E: "burger + fritas + refri"
- CTA button, solid ember orange #E4572E with white #FFFFFF text, lower-right: "PEÇA PELO APP"
- small footnote, warm cream #F4EBDD, bottom: "Válido no app próprio, consulte o raio de entrega."

SPACING: 6% safety margin on every edge, 3% vertical gap between blocks, 4% inner padding in the card and button, clear gap between CTA, footnote and logo.

LOGO: the white version, top-left corner, about 18% of the canvas width, sitting directly on the dark background with a soft glow for contrast. Never on a badge or card.

QUALITY: Ultra-detailed, professional ad design, crisp legible typography, high contrast, no watermarks, no English text on the artwork, no phone numbers anywhere.
```

## 8. Conferência pela régua (quando as imagens voltarem)

| Lente | Peça 01 | O que olhar |
|---|---|---|
| 1 · Scroll | vapor real, cena noturna crível | o vapor está visível? a cena é fotografável? |
| 2 · Anunciante | o lanche é o protagonista | dá para confundir com anúncio de moto ou de app de transporte? |
| 3 · Valor | headline promete e garante | a garantia ("a gente manda outro") é real na casa? |
| 4 · Capricho | letra por letra, logo branca, 22% | "À" com crase, logo com "HAMBURGUERIA" e nada mais |

Depois do sim do lote: as versões 1080×1920 de cada peça, com o texto fora dos 250 px do topo e da base.
