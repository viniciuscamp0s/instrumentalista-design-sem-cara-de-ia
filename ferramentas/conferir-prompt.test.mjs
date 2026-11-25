import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { conferir } from './conferir-prompt.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');

const BOM = `Static social media ad, square 1:1, photorealistic advertising quality, all text in Brazilian Portuguese.
ATTACHMENTS: Use the attached logo exactly as provided. Do not redraw, restyle or recolor it. The logo reads "CASA BRASA".
BRAND COLORS: ember orange #E4572E, charcoal #1E1E1E.
TEXT ON THE ARTWORK: headline "SEU LANCHE CHEGA QUENTE", white #FFFFFF. CTA "PEÇA PELO APP".
SPACING: 6% safety margin on every edge, 3% vertical gap between blocks.
LOGO: white version, bottom-right, sitting directly on the photo with a soft drop shadow, never on a badge or card.`;

test('prompt correto passa sem bloqueio', () => {
  const r = conferir(BOM);
  assert.deepEqual(r.bloqueios, []);
});

test('barra resolução impossível', () => {
  assert.ok(conferir(BOM + '\nUltra-detailed, 8K.').bloqueios.some((b) => b.includes('resolução')));
});

test('barra logo sobre chapa e aceita a proibição escrita', () => {
  const ruim = BOM.replace('sitting directly on the photo with a soft drop shadow, never on a badge or card', 'placed inside a clean white rounded-rectangle badge');
  assert.ok(conferir(ruim).bloqueios.some((b) => b.includes('chapa')));
  assert.ok(!conferir(BOM).bloqueios.some((b) => b.includes('chapa')));
});

test('barra logo sem instrução de arquivo intocado', () => {
  const ruim = BOM.replace('Use the attached logo exactly as provided. Do not redraw, restyle or recolor it.', '');
  assert.ok(conferir(ruim).bloqueios.some((b) => b.includes('exactly as provided')));
});

test('barra referência sem "não reproduzir"', () => {
  assert.ok(conferir(BOM + '\nA second attached reference ad shows the layout.').bloqueios.some((b) => b.includes('referência')));
  assert.deepEqual(conferir(BOM + '\nA second attached reference ad: use it only as layout and style inspiration, do not reproduce it.').bloqueios, []);
});

test('barra mais de 4 peças, telefone, travessão e nome proibido', () => {
  const lote = Array.from({ length: 5 }, (_, i) => `=== PEÇA ${i + 1} · teste ===`).join('\n');
  assert.ok(conferir(BOM + '\n' + lote).bloqueios.some((b) => b.includes('teto é 4')));
  assert.ok(conferir(BOM + '\nCTA "LIGUE (11) 98765-4321"').bloqueios.some((b) => b.includes('telefone')));
  assert.ok(conferir(BOM + '\nheadline "QUENTE — SEMPRE"').bloqueios.some((b) => b.includes('travessão')));
  assert.ok(conferir(BOM + '\nlike Burger Rival does', { proibir: ['Burger Rival'] }).bloqueios.some((b) => b.includes('Burger Rival')));
});

test('avisa branco sem hex e duas proporções', () => {
  const r = conferir('Static ad, square 1:1 and 9:16 vertical story. white headline "OI".');
  assert.ok(r.avisos.some((a) => a.includes('#FFFFFF')));
  assert.ok(r.avisos.some((a) => a.includes('duas proporções')));
});

test('os prompts dos exemplos passam no conferidor', () => {
  const dir = join(RAIZ, 'exemplos');
  for (const f of readdirSync(dir).filter((n) => n.endsWith('.md') && n !== 'README.md')) {
    const md = readFileSync(join(dir, f), 'utf8');
    const blocos = [...md.matchAll(/```text\n([\s\S]*?)```/g)].map((m) => m[1]).filter((b) => /Brazilian Portuguese/.test(b));
    assert.ok(blocos.length >= 1, `${f} sem prompt de imagem`);
    for (const b of blocos) assert.deepEqual(conferir(b).bloqueios, [], `${f}: ${conferir(b).bloqueios.join(' | ')}`);
  }
});
