---
name: modelar-referencia
description: Recria um anúncio ou post de referência para outra marca, decompondo a peça em 9 pontos e trocando identidade visual e todo o texto, sem copiar conteúdo de terceiro. Use quando pedirem "faz igual a esse", "modela essa referência", "copia esse estilo para a minha marca" ou mandarem um print de anúncio que admiram.
---

# Modelar referência

Base: `inteligencia-design/docs/09-modelar-referencia.md`.

1. **Leia todas as referências** antes de qualquer prompt. Várias peças: pergunte se recria o pack todo ou algumas.
2. **Estilo pode, conteúdo nunca.** Composição, luz, tipografia, efeitos e ritmo podem sair idênticos. O texto se
   escreve com a referência fechada; marca, cores, mascote e rosto de terceiro nunca entram.
3. As cores da marca nova, lidas da logo real, substituem a paleta da referência nos destaques.
4. **Decomponha** pelos 9 pontos (formato, fundo, layout, blocos de texto, tipografia, efeitos, ícones e selos, CTA,
   rodapé) e monte a **tabela de substituição**; pergunte só o que falta (oferta, prova, cena adaptada ao produto).
5. **Um prompt por imagem**, com "use it only as layout and style inspiration, do not reproduce it".
6. Antes de entregar, rode
   `node inteligencia-design/ferramentas/conferir-prompt.mjs prompt.txt --proibir "<nome da marca da referência>"`
   para pegar contaminação cruzada, e confira se a cena faz sentido para o produto novo.
