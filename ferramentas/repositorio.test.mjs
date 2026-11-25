// Confere a integridade do repositório: links internos dos .md apontam para arquivos que existem,
// e toda skill tem frontmatter com name e description.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { acharEmTexto } from './varredura.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');

function mds(dir, saida = []) {
  for (const n of readdirSync(dir)) {
    if (n.startsWith('.') || n === 'node_modules') continue;
    const p = join(dir, n);
    if (statSync(p).isDirectory()) mds(p, saida);
    else if (n.endsWith('.md')) saida.push(p);
  }
  return saida;
}

test('links internos dos documentos existem', () => {
  const quebrados = [];
  for (const arq of mds(RAIZ)) {
    const md = readFileSync(arq, 'utf8');
    for (const [, alvo] of md.matchAll(/\]\(([^)#\s]+)(?:#[^)]*)?\)/g)) {
      if (/^(https?:|mailto:)/.test(alvo)) continue;
      if (!existsSync(resolve(dirname(arq), alvo))) quebrados.push(`${arq.slice(RAIZ.length + 1)} -> ${alvo}`);
    }
  }
  assert.deepEqual(quebrados, []);
});

test('toda skill tem name e description', () => {
  const dir = join(RAIZ, 'skills');
  for (const n of readdirSync(dir).filter((x) => statSync(join(dir, x)).isDirectory())) {
    const s = readFileSync(join(dir, n, 'SKILL.md'), 'utf8');
    assert.match(s, /^---\nname: [a-z0-9-]+\ndescription: .{40,}\n---/m, `skills/${n}/SKILL.md sem frontmatter válido`);
    assert.match(s, new RegExp(`^name: ${n}$`, 'm'), `skills/${n}: name diferente da pasta`);
  }
});

test('a varredura pega e-mail, telefone e termo privado', () => {
  assert.ok(acharEmTexto('fale com joao' + '@' + 'empresa.com.br').length);
  assert.ok(acharEmTexto('ligue +55 11 ' + '98765-4321').length);
  assert.ok(acharEmTexto('cliente Marca Secreta', ['Marca Secreta']).length);
  assert.equal(acharEmTexto('anúncio 1080×1080 com 6% de margem').length, 0);
});
