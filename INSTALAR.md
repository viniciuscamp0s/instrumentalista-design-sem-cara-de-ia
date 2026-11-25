# Instalar

Abra o Claude Code ou o Codex **na pasta do seu projeto** e cole o prompt abaixo. A IA instala sozinha e, no fim,
faz a entrevista da sua marca.

```text
Instale a inteligência de design de artes estáticas do repositório https://github.com/viniciuscamp0s/inteligencia-design
neste projeto, seguindo o INSTALAR.md dele à risca:
1. Clone o repositório numa pasta inteligencia-design/ dentro deste projeto (ou atualize com git pull se já existir).
2. Confira as ferramentas: node 22+ (obrigatório) e python 3 com Pillow (para a logo; no Windows o comando é py).
   Para cada uma que faltar, me diga o comando de instalação do meu sistema e instale com o meu ok.
3. Instale as nossas skills: copie cada pasta de inteligencia-design/skills/ (menos o README.md) para .claude/skills/
   deste projeto. Se você for o Codex ou outro agente sem pasta de skills, crie um AGENTS.md que aponte para
   inteligencia-design/docs/ como base e para inteligencia-design/skills/*/SKILL.md como procedimentos, começando
   por skills/direcao-de-arte/SKILL.md.
4. Pergunte se eu quero as skills de terceiros opcionais listadas em inteligencia-design/CREDITOS.md. Se sim, clone
   cada repositório original numa pasta temporária e copie só as pastas de skill para .claude/skills/, mantendo o
   LICENSE de cada uma. Não copie nada que a licença não permita.
5. Rode o teste: cd inteligencia-design && npm test, e depois rode
   node ferramentas/conferir-prompt.mjs num dos prompts de inteligencia-design/exemplos/ para eu ver como ele confere.
6. Me mostre em 5 linhas o que ficou instalado e como pedir cada coisa (anúncio, carrossel, post, modelar uma
   referência, revisar uma arte).
7. Por último, crie a pasta marca/ neste projeto e faça a entrevista da minha marca pela skill entrevista-de-marca,
   uma pergunta por vez, gravando marca/ficha.md. Peça o arquivo da minha logo.
Regras: nada pago sem me dizer o custo antes; gerar imagem por API só com o meu sim; segredo (token, senha) eu colo
direto no .env, nunca no chat.
```

## O que a instalação faz

| Passo | O que acontece | Quanto custa |
|---|---|---|
| Ferramentas | Node 22+, Python 3 + Pillow | 0 (tudo aberto) |
| Skills nossas | `direcao-de-arte`, `entrevista-de-marca`, `criativo-de-anuncio`, `carrossel-organico`, `modelar-referencia`, `prompt-de-imagem`, `regua-de-criativo`, `texto-de-impacto` | 0 |
| Skills de terceiros | opcionais, baixadas dos originais (lista e licenças em [`CREDITOS.md`](CREDITOS.md)) | 0 |
| Teste | `npm test` | alguns segundos |
| Ficha da marca | entrevista de 10 a 15 minutos | 0 |

## Instalação manual (sem IA)

```bash
git clone https://github.com/viniciuscamp0s/inteligencia-design.git
cd inteligencia-design
npm test
mkdir -p ../.claude/skills && cp -r skills/*/ ../.claude/skills/
mkdir -p ../marca && cp modelos/ficha-de-marca.md ../marca/ficha.md
```

Quer em todos os seus projetos? Copie as skills para `~/.claude/skills/` em vez de `.claude/skills/`.

## Usar sem Claude Code nem Codex

ChatGPT, Claude.ai ou Gemini: suba os `docs/` e a sua ficha como arquivos do projeto e cole a skill de direção de
arte nas instruções. Passo a passo em [`docs/12-como-conectar.md`](docs/12-como-conectar.md).

## Atualizar

`cd inteligencia-design && git pull`, depois copie de novo as pastas de `skills/`. A sua pasta `marca/` não é
tocada. O que mudou em cada versão está em [`CHANGELOG.md`](CHANGELOG.md).
