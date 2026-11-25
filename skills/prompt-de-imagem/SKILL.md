---
name: prompt-de-imagem
description: Escreve o prompt de imagem de uma peça estática (anúncio, post, card de carrossel) para ChatGPT/gpt-image, Gemini ou outro gerador, com texto exato em português, cores em hex, respiro em porcentagem e logo intocada, e confere com o conferir-prompt.mjs. Use quando a copy já está aprovada e falta o prompt, ou quando pedirem para corrigir um prompt que gerou imagem errada.
---

# Prompt de imagem

Base: `inteligencia-design/docs/07-prompt-de-imagem.md`.

1. Estrutura: primeira linha (tipo, proporção, qualidade, idioma) · ATTACHMENTS · BRAND COLORS · SCENE · LAYOUT &
   HIERARCHY · TEXT ON THE ARTWORK · SPACING · LOGO · QUALITY.
2. Prosa em inglês; **todo texto da arte em português exato, entre aspas**; branco é `#FFFFFF`; cores com hex;
   respiro em % (margem de cerca de 6%, folga de 3%, respiro interno de 4%); descrever em positivo.
3. Logo: arquivo anexado, "exactly as provided, do not redraw", texto da logo por extenso, versão branca em fundo
   escuro, pousada direto na arte com sombra suave. Nunca badge, chapa, pílula ou "logo na parede".
4. Uma proporção por prompt; no máximo 4 peças por bloco; com referência, um prompt por imagem.
5. Nunca "8K", telefone, travessão na arte, marca real de terceiro, número não confirmado.
6. Rode `node inteligencia-design/ferramentas/conferir-prompt.mjs` no prompt. Bloqueio = corrigir antes de entregar.
7. Entregue no chat, **primeiro conteúdo da mensagem, num bloco de código único**, e diga quais arquivos anexar.
8. O gerador errou a logo mesmo assim? Plano B: gerar com o canto vazio e compor com
   `python inteligencia-design/ferramentas/logo.py compor arte.png marca/logo-branca.png --sombra`.
