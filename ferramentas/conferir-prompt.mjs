#!/usr/bin/env node
// CONFERIR PROMPT: barra os erros mecânicos de um prompt de imagem antes de você colar no gerador. Sem IA, custo zero.
//
// USO
//   node ferramentas/conferir-prompt.mjs prompt.txt
//   node ferramentas/conferir-prompt.mjs prompt.txt --proibir "Marca da Referência,Outra Marca"
//   cat prompt.txt | node ferramentas/conferir-prompt.mjs
//
// BLOQUEIA (código 1): o que já derrubou lote inteiro
//   - pedir resolução ("8K", "ultra high resolution")
//   - chapa, badge, pílula ou adesivo atrás da logo; logo como objeto da cena
//   - logo citada sem a instrução de usar o arquivo exatamente como está
//   - referência anexada sem a instrução de não reproduzir
//   - mais de 4 peças no mesmo bloco
//   - telefone ou travessão dentro do texto da arte (entre aspas)
//   - nome proibido (--proibir), para pegar contaminação da marca da referência
// AVISA (não bloqueia): sem texto entre aspas, sem cor em hex, sem respiro em %, branco sem #FFFFFF,
//   duas proporções no mesmo prompt, lista longa de negativos, [PREENCHER] por preencher, "panel/card" em tira.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const citacoes = (t) => [...t.matchAll(/"([^"\n]{1,300})"|“([^”\n]{1,300})”/g)].map((m) => m[1] ?? m[2]);

export function conferir(texto, { proibir = [] } = {}) {
  const bloqueios = [];
  const avisos = [];
  const t = texto;
  const baixo = t.toLowerCase();

  // resolução impossível
  if (/\b(8k|16k)\b|ultra[- ]high[- ]resolution|extremely high resolution/i.test(t))
    bloqueios.push('pede resolução no prompt ("8K", "ultra high resolution"): o gerador inventa textura falsa. Tire e use um ampliador depois.');

  // logo
  const citaLogo = /\blogo(tipo|type|mark)?\b/i.test(t);
  const chapa = /(badge|pill|sticker|plaque|patch|chip|label|rounded[- ](rectangle|card|box|square)|white (card|box|rectangle|square)|solid (card|box|background) (behind|under))/i;
  for (const frase of t.split(/(?<=[.!?\n])/)) {
    if (/\blogo/i.test(frase) && chapa.test(frase) && !/\b(no|never|without|nunca|sem)\b[^.]{0,40}(badge|pill|sticker|plaque|patch|card|box|rectangle)/i.test(frase))
      bloqueios.push(`logo sobre chapa, badge ou adesivo: "${frase.trim().slice(0, 120)}". A logo pousa direto na arte; contraste por sombra suave ou degradê.`);
    if (/\blogo/i.test(frase) && /(on|onto|mounted on|painted on|hanging on) (the |a )?(wall|sign|facade|storefront|board|shirt|cup)/i.test(frase) && !/\b(no|never|not)\b/i.test(frase))
      bloqueios.push(`logo como objeto da cena: "${frase.trim().slice(0, 120)}". A marca é composta por cima, nunca parte da cena.`);
  }
  if (citaLogo && !/exactly as provided|do not (re)?draw|don't redraw|do not redesign|without (re)?drawing|leave (the )?(logo )?(area|space|corner) (empty|clean|blank)|no logo/i.test(t))
    bloqueios.push('a logo aparece sem a instrução "Use the attached logo exactly as provided. Do not redraw, restyle or recolor it." (ou de deixar a área vazia para compor depois).');

  // referência
  if (/\breference (image|ad|post|photo)|attached reference|referência anexada/i.test(t) && !/(do not|don't|never) (reproduce|copy|recreate)|not to be reproduced|only as (a )?(layout|style|visual)?\s*(and style )?(inspiration|reference)/i.test(t))
    bloqueios.push('referência anexada sem "use it only as inspiration, do not reproduce it": o gerador já refez a referência no lugar da peça pedida.');

  // peças por bloco
  const secoes = (t.match(/^\s*={3,}\s*(peça|peca|ad|slide|card|foto|piece|image)\b/gim) || []).length;
  if (secoes > 4) bloqueios.push(`${secoes} peças no mesmo bloco: o teto é 4. Divida em blocos autocontidos de até 4 (ou um prompt por imagem).`);

  // texto da arte
  const textos = citacoes(t);
  for (const c of textos) {
    if (/\(?\d{2}\)?[\s.-]?9?\d{4}[\s.-]?\d{4}/.test(c) || /\+\d{2}\s?\d{2}/.test(c))
      bloqueios.push(`telefone no texto da arte: "${c}". O contato vive no botão do anúncio; use CTA genérico.`);
    if (/[—–]/.test(c)) bloqueios.push(`travessão no texto da arte: "${c}". Use ponto ou vírgula.`);
  }

  // contaminação cruzada
  for (const nome of proibir.map((s) => s.trim()).filter(Boolean)) {
    const esc = nome.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (new RegExp(`(?<![\\p{L}\\p{N}])${esc}(?![\\p{L}\\p{N}])`, 'iu').test(t))
      bloqueios.push(`nome proibido no prompt: "${nome}" (contaminação da marca da referência).`);
  }

  // avisos
  if (!textos.length) avisos.push('nenhum texto entre aspas: todo texto visível na arte vai em português exato, entre aspas duplas.');
  if (!/#[0-9a-f]{6}\b/i.test(t)) avisos.push('nenhuma cor em hex: declare as cores da marca com nome + hex (ex.: deep green #1F4D3A).');
  if (textos.length && !/\d+\s?%/.test(t)) avisos.push('respiro sem número: declare margem (≈6% da largura), folga entre blocos (≈3%) e respiro interno (≈4%).');
  if (/\bwhite (text|headline|type|letters|lettering|copy)\b/i.test(t) && !/#fff(fff)?\b/i.test(t))
    avisos.push('texto branco sem #FFFFFF explícito: o gerador tinge com a cor da cena.');
  if (/\b1:1\b|\bsquare\b/i.test(t) && /\b9:16\b|\bvertical story\b/i.test(t))
    avisos.push('duas proporções no mesmo prompt: gere uma por vez (a outra sai da peça aprovada).');
  const negativos = (baixo.match(/\bno [a-z-]+(,| or| and)/g) || []).length;
  if (negativos >= 6) avisos.push(`lista longa de negativos (${negativos}): descreva o que você quer em termos positivos; negativo curto só no fecho.`);
  if (/\[preencher\]|\[fill\]|\[confirmar\]|\[todo\]/i.test(t)) avisos.push('há [PREENCHER] no prompt: preencha antes de gerar, senão ele vai para a arte.');
  if (/\b(left|right) (panel|card)\b/i.test(t)) avisos.push('"left/right panel" faz o gerador desenhar dois cartões com canto arredondado: use "left half of the canvas".');

  return { bloqueios: [...new Set(bloqueios)], avisos };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const args = process.argv.slice(2);
  const i = args.indexOf('--proibir');
  const proibir = i >= 0 ? (args[i + 1] || '').split(',') : [];
  const arquivo = args.find((a, k) => !a.startsWith('--') && args[k - 1] !== '--proibir');
  let texto = '';
  try { texto = readFileSync(arquivo ?? 0, 'utf8'); } catch (e) { console.error(`não consegui ler o prompt: ${e.message}`); process.exit(2); }
  const { bloqueios, avisos } = conferir(texto, { proibir });
  for (const b of bloqueios) console.log(`BLOQUEIO  ${b}`);
  for (const a of avisos) console.log(`aviso     ${a}`);
  if (!bloqueios.length) console.log(`prompt liberado${avisos.length ? ` (${avisos.length} aviso(s) para olhar)` : ''}.`);
  process.exit(bloqueios.length ? 1 : 0);
}
