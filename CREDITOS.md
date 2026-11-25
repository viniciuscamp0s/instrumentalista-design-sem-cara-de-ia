# Créditos

Este repositório junta a inteligência que usamos para fazer arte estática (anúncios, posts e carrosséis). Uma parte
é nossa: os documentos de [`docs/`](docs/), as skills de [`skills/`](skills/), os modelos, os exemplos e as
ferramentas. A outra parte são skills e referências abertas de terceiros que usamos no dia a dia: **elas não são
redistribuídas aqui**. Apontamos para o original, com autor e licença, e a instalação (opcional) baixa de lá. Todo o
mérito delas é de quem as fez.

## O que é nosso (criado por nós, MIT)

| Peça | O que é |
|---|---|
| `docs/01` a `docs/12` | o método, a régua de criativo, o motor de prompt, carrossel, referência, formatos e os erros que viraram regra |
| `skills/direcao-de-arte`, `entrevista-de-marca`, `criativo-de-anuncio`, `carrossel-organico`, `modelar-referencia`, `prompt-de-imagem`, `regua-de-criativo`, `texto-de-impacto` | as nossas skills, em versão universal |
| `ferramentas/conferir-prompt.mjs`, `ferramentas/logo.py` | conferidor de prompt e ferramenta de logo oficial (versão branca, composição) |
| `ferramentas/varredura.mjs`, `ferramentas/publicar.mjs` | varredura de privacidade e publicação sem IA, para quem quiser publicar um fork |

## Skills de terceiros que usamos, por função (opcionais)

| Função | Skill | Autor | Repositório original | Licença |
|---|---|---|---|---|
| Banner, identidade, sistema visual | `banner-design`, `brand`, `design-system` | ClaudeKit (mrgoonie) | [mrgoonie/claudekit-skills](https://github.com/mrgoonie/claudekit-skills) | MIT (declarada no cabeçalho de cada skill) |
| Paletas, pares de fonte, estilos | `ui-ux-pro-max` | nextlevelbuilder | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | MIT |
| Crítica de interface (peça que vira página) | `impeccable` | Paul Bakaus | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Apache-2.0 |
| Texto sem cara de IA | `humanizer` | blader | [blader/humanizer](https://github.com/blader/humanizer) | MIT |
| Ganchos de texto | `copywriting-hooks` | Samuel Berthe (samber) | [samber/cc-skills](https://github.com/samber/cc-skills) | MIT |

Se você é autor de uma delas e quer outra forma de crédito, abra uma issue.

## Ideias e referências de terceiros

| Ideia | Origem | Como entrou aqui |
|---|---|---|
| Os 6 arquétipos de carrossel (Sistema, Fórmula, Autópsia, Coleção, Preenchível, Confissão) e a regra "desfecho antes do tema" | *The 6 Carousel Archetypes*, GrowWithAlex | reescritos com nossas palavras e exemplos, somados ao que aprendemos em campo ([`docs/08`](docs/08-carrossel-organico.md)) |
| Leitura de anúncios ativos por nicho | Biblioteca de Anúncios da Meta (pública) | método de pesquisa em [`docs/03`](docs/03-pesquisa-de-mercado.md) |

## Ferramentas abertas

| Ferramenta | Licença | Uso aqui |
|---|---|---|
| [Node.js](https://nodejs.org) 22+ | MIT | conferidor de prompt, testes, varredura |
| [Python](https://www.python.org) 3 + [Pillow](https://python-pillow.org) | PSF / MIT-CMU | versão branca da logo, composição da logo oficial |
