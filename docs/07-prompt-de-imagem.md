# 07 · Prompt de imagem: o motor

> Vale para qualquer gerador (ChatGPT/gpt-image, Gemini, outro) e qualquer gênero de peça. Antes de entregar, rode
> `node ferramentas/conferir-prompt.mjs <arquivo>` (ou cole o prompt na entrada padrão): ele barra os erros
> mecânicos que já custaram lotes inteiros.

## A regra de ouro

**O gerador não vê a sua referência nem a sua intenção: só vê o prompt.** Tudo o que não for descrito, ele inventa.
Descreve-se tudo: formato, layout, proporção relativa, tipografia, cor de cada palavra, efeito, luz da foto, posição
de cada elemento, respiro.

## Estrutura de um prompt

```text
[1ª linha] tipo de peça, proporção, qualidade, idioma
ATTACHMENTS: o que é cada anexo (logo, referência, foto real) e como usar
BRAND COLORS: nome + hex, uma vez só
SCENE: a fotografia ou o fundo (o que domina cada região do quadro, luz, ângulo, lente)
LAYOUT & HIERARCHY: zonas topo/meio/base, o que é maior, onde o olho entra
TEXT ON THE ARTWORK: cada zona, em português exato, entre aspas, com peso, caixa e cor
SPACING: margens e folgas em % do canvas
LOGO: variante, posição, escala, texto da logo por extenso, sem chapa atrás
QUALITY: o bloco de fecho
```

## Regras de escrita

- **Prosa técnica em inglês.** Os geradores seguem instrução em inglês com mais precisão.
- **Todo texto visível na arte em português exato, entre aspas duplas**, com acentos, campo por campo. Nunca
  parafrasear: o modelo renderiza o que está entre aspas.
- **A primeira linha declara** tipo, proporção e quantidade: `Static social media ad, square 1:1, photorealistic
  advertising quality, all text in Brazilian Portuguese.`
- **Cores sempre nome + hex** (`deep forest green #1F4D3A`), declaradas uma vez no preâmbulo.
- **Texto branco é `#FFFFFF` explícito.** Sem isso o modelo tinge o texto com a cor ambiente da cena.
- **Posição relativa e hierarquia explícitas:** `top-left`, `lower third`, `right half`, `the price is the largest
  element on the card`.
- **Respiro em número, senão o modelo encosta tudo:** margem de segurança em todas as bordas (cerca de 6% da
  largura), folga vertical entre blocos (cerca de 3% da altura), respiro interno do card (cerca de 4%), folga
  explícita entre CTA, rodapé e logo.
- **Descreva em termos positivos.** "no blurred background, no bokeh, no glow" já fez o gerador entregar exatamente
  fundo desfocado com halos. Diga o que você quer ("plain pure white page background, solid shapes with sharp clean
  edges") e deixe um negativo curto só no fecho.
- **Nunca peça "8K" ou "ultra high resolution".** Não existe resolução nativa assim: o modelo inventa textura falsa
  e a peça piora. Precisa de mais definição? Gere normal e passe por um ampliador depois.
- **Objeto com texto de fábrica** (relógio, medidor, display, embalagem com letra miúda): descreva pela forma e cor,
  sem exigir número ou marca legível, senão sai deformado.
- **Fecho de qualidade:**
  `Ultra-detailed, professional ad design, crisp legible typography, high contrast, no watermarks, no English text
  on the artwork, no phone numbers anywhere.`

## Anexos

Você anexa os arquivos na mesma mensagem em que cola o prompt. O preâmbulo diz qual é qual:

- **Logo:** `Use the attached logo exactly as provided. Do not redraw, restyle or recolor it. The logo reads
  "NOME DA MARCA" with the tagline "TAGLINE" (nothing else).` O texto da logo por extenso é reforço obrigatório: o
  gerador já inventou subtítulo que a marca não tem.
- **Referência:** `The second attached image is a reference ad. Use it only as layout and style inspiration
  (composition, energy, photo treatment). Do not copy its logo, colors or text, and do not reproduce this image.`
- **Foto real** (lugar, equipe, produto): `Preserve the attached photos exactly; do not repaint people or places.`

## A logo na arte

1. **Variante certa para o fundo:** fundo escuro ou colorido pede a **versão branca monocromática do arquivo
   oficial** (gere com `python ferramentas/logo.py branca`). Use exatamente a variante anexada para aquela peça.
2. **Pousa direto na composição.** Contraste, quando faltar, por sombra suave ou degradê escuro difuso (atmosfera:
   sem borda, sem canto). **Nunca** escreva "place the logo inside a white rounded badge": sai o adesivo que a régua
   proíbe.
3. **Nunca como objeto físico da cena** ("a logo na parede"): o modelo inventa uma plaquinha.
4. **Arquivo com fundo opaco embutido:** mande usar só as formas da marca como recorte e descartar o fundo.
5. **Plano B** quando o gerador errou a marca mesmo com o anexo: gere com o canto limpo (sem marca, sem texto) e
   componha o arquivo oficial por código (`python ferramentas/logo.py compor`), medindo a área livre, nunca pintando
   um retângulo fixo por cima (já comeu letras do título).

## Lote: bloco único, teto de 4

- Um lote sai num **único bloco de código**, com uma seção `=== PEÇA n · nome ===` por imagem e o preâmbulo
  (anexos, cores) compartilhado no topo.
- **No máximo 4 imagens por bloco.** Acima disso, blocos de até 4, cada um autocontido (preâmbulo repetido). Pedir
  mais derruba a qualidade.
- O gerador pode entregar **menos** do que o pedido, ou refazer a referência no lugar de uma peça. Com referência
  anexada, ou quando o lote já falhou naquela marca, **um prompt por imagem**.
- **Uma proporção por vez.** Pedir 1:1 e 9:16 juntos no mesmo prompt divide o esforço do modelo. Gere a proporção
  da prova; as outras saem depois da aprovação.

## Pessoa real a partir de fotos

Gera-se uma foto nova a partir de fotos reais anexadas (rosto de vários ângulos e corpo inteiro), nunca a partir de
foto feita por IA. Vigie: palavras como *sturdy*, *broad shoulders*, *imposing* viram físico de academia; *heavy
eyelids*, *calm, serious* viram olhar caído. Peça corpo comum casado com a foto de corpo inteiro, cabeça erguida,
olhar atento, e silhueta inteira dentro do quadro com folga (a foto vai ser recortada).

## Por gerador

| Gerador | Observações |
|---|---|
| **ChatGPT (gpt-image)** | o padrão. Cole o prompt e anexe os arquivos na mesma mensagem. Teto de 4 imagens por mensagem; peça "um link de download por imagem" em lote |
| **Gemini** | aceita o mesmo prompt; texto longo na arte tende a sair pior: corte a copy ao mínimo e confira letra por letra |
| **Outros (Midjourney, Flux, Ideogram...)** | mesmo método; texto na arte varia muito de um para outro. Se o texto sair errado, gere a imagem sem texto e componha o texto por código ou num editor |

Gerar imagem por API cobra por imagem: só com o custo dito antes e o seu sim. O padrão do repositório é colar na
sua assinatura.

## Formato de entrega

**O prompt vai direto no chat, como primeiro conteúdo da mensagem, num bloco de código único e contínuo.** Nada de
texto quebrando o bloco. Comentário vem depois. Sempre dizer **quais arquivos anexar** junto.

## Conferência final do prompt

- [ ] Todos os textos da arte entre aspas, em português correto, acentos incluídos
- [ ] Zero número inventado: preço, parcela, prova e claim só do confirmado
- [ ] Cores da marca (da logo real) em todos os pontos de destaque, com hex
- [ ] Instrução de logo intocada, com o texto da logo por extenso, sem chapa atrás
- [ ] Instrução de "referência só inspiração, não reproduzir", quando houver referência
- [ ] **Releu caçando o nome e as cores da marca da referência** (contaminação cruzada é erro grave)
- [ ] Nenhum bloco com mais de 4 imagens; uma proporção por prompt
- [ ] Respiro declarado em %
- [ ] Nenhum telefone, nenhuma marca real de terceiro, nenhum "8K"
- [ ] Nenhum travessão nos textos da arte
- [ ] `node ferramentas/conferir-prompt.mjs` sem bloqueio
