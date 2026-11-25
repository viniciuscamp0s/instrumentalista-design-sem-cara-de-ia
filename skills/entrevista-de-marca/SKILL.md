---
name: entrevista-de-marca
description: Entrevista curta de marca (cores da logo real, público, cidade, desejo, dor, oferta com fonte, provas reais, tom, fotos, histórico do que já converteu) que gera a ficha marca/ficha.md relida antes de cada peça. Use na primeira vez com uma marca, quando pedirem "configurar minha marca", "cadastrar cliente", ou quando a skill de direção de arte não achar a ficha.
---

# Entrevista de marca

1. Leia `instrumentalista-design-sem-cara-de-ia/docs/02-entrevista-de-marca.md` e use o modelo
   `instrumentalista-design-sem-cara-de-ia/modelos/ficha-de-marca.md`.
2. Antes de perguntar, descubra sozinho o que é público (site, perfil, anúncios ativos, a própria logo) e só
   confirme.
3. **Uma pergunta por vez**, com exemplo de resposta. Resposta vaga volta com uma proposta concreta para confirmar.
4. Logo: rode `python instrumentalista-design-sem-cara-de-ia/ferramentas/logo.py checar marca/logo.png` (no Windows, `py`). Sem
   transparência ou sem versão branca, gere com `logo.py branca`. Leia as cores da logo (nome + hex); nunca chute.
5. Cidade: pesquise se há cartão-postal unânime; nunca decida de memória.
6. Grave `marca/ficha.md` e mostre um resumo de 8 linhas para a pessoa confirmar.
7. A seção "Aprendizados" da ficha recebe, com data e motivo, cada correção que vale só para essa marca.
