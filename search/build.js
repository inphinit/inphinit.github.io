#!/usr/bin/env node
'use strict';

/*
 * Gera search-index.js a partir de arquivos HTML.
 *
 *   node build-index.js [--dir ./html] [--selector "main > section"] [--out ./search-index.js]
 *                       [--ignore "script, style"] [--max-text 0] [--recursive]
 *
 * Cheerio só é usado aqui; o arquivo gerado não depende de nada.
 */

const fs = require('node:fs');
const path = require('node:path');
const { parseArgs } = require('node:util');
const { tokenize } = require('./src/runtime.js');

// Configuração padrão (sobrescrevível por linha de comando).
const DEFAULTS = {
  //dir: '../dist/pt/docs',
  //out: './search-pt.1793154197.js',
  dir: '../dist/en/docs',
  out: './search-en.1793154197.js',
  selector: 'main>section',
  ignore: 'script,style,noscript,template,svg,iframe,object,canvas,.box>code,a,aside,button,table',
  maxText: 0, // 0 = guarda o texto inteiro; N = trunca o texto EXIBIDO (a indexação usa o texto completo)
  recursive: true,
};

// Elementos que separam palavras mesmo sem espaço entre as tags (<p>a</p><p>b</p> -> "a b").
const BLOCKS = 'address,article,aside,blockquote,br,dd,details,div,dl,dt,fieldset,figcaption,figure,' +
  'footer,form,h1,h2,h3,h4,h5,h6,header,hr,li,main,nav,ol,p,pre,section,summary,table,tbody,td,tfoot,' +
  'th,thead,tr,ul';

function listHtmlFiles(root, recursive) {
  const found = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) { if (recursive) walk(full); }
      else if (/\.html?$/i.test(e.name)) found.push(path.relative(root, full).split(path.sep).join('/'));
    }
  })(root);
  return found.sort();
}

function extractText($, el, ignore) {
  const $el = $(el);
  if ($el.is(ignore) || $el.closest(ignore).length) return '';
  const $copy = $el.clone();
  $copy.find(ignore).remove();
  $copy.find(BLOCKS).after(' ');
  return $copy.text().replace(/\s+/g, ' ').trim();
}

function truncate(text, max) {
  if (!max || text.length <= max) return text;
  const cut = text.lastIndexOf(' ', max);
  return text.slice(0, cut > max / 2 ? cut : max).trimEnd() + '…';
}

function build(options = {}) {
  const cheerio = require('cheerio');
  const o = { ...DEFAULTS, ...options };
  const started = process.hrtime.bigint();
  const warnings = [];

  const root = path.resolve(o.dir);
  let names;
  try {
    names = listHtmlFiles(root, o.recursive);
  } catch (err) {
    throw new Error(`Não foi possível ler a pasta "${o.dir}": ${err.message}`);
  }

  try {
    cheerio.load('<p></p>')(o.selector);
  } catch (err) {
    throw new Error(`Seletor CSS inválido "${o.selector}": ${err.message}`);
  }

  if (!names.length) warnings.push(`Nenhum arquivo .html encontrado em "${o.dir}". Será gerado um índice vazio.`);

  const paths = [], docFile = [], docId = [], docText = [], docLen = [];
  const inv = new Map();            // termo -> [doc, tf, doc, tf, ...] (doc absoluto, em ordem crescente)
  let totalLen = 0, skipped = 0;

  for (const name of names) {
    let $;
    try {
      const html = fs.readFileSync(path.join(root, name), 'utf8').replace(/^﻿/, '');
      $ = cheerio.load(html);
    } catch (err) {
      warnings.push(`Ignorado "${name}": ${err.message}`);
      skipped++;
      continue;
    }

    let fileIdx = -1;
    for (const el of $(o.selector).toArray()) {
      const full = extractText($, el, o.ignore);
      let secId = $(el).attr('id');

      if (!secId) {
        const h2 = $('h2', el);
        secId = h2.attr('id');
      }

      const tokens = full ? tokenize(full) : [];
      if (!tokens.length) continue;                         // sem texto útil

      if (fileIdx < 0) fileIdx = paths.push(name) - 1;
      const doc = docText.length;
      docFile.push(fileIdx);
      docId.push(secId);
      docText.push(truncate(full, o.maxText));
      docLen.push(tokens.length);
      totalLen += tokens.length;

      const tf = new Map();
      for (const t of tokens) tf.set(t, (tf.get(t) || 0) + 1);
      for (const [t, n] of tf) {
        const p = inv.get(t);
        if (p) p.push(doc, n); else inv.set(t, [doc, n]);
      }
    }
  }

  // Termos ordenados (permite busca binária e por prefixo); postings com ids em delta.
  const terms = [...inv.keys()].sort();
  const post = terms.map((t) => {
    const p = inv.get(t), out = new Array(p.length);
    for (let i = 0, prev = 0; i < p.length; i += 2) { out[i] = p[i] - prev; prev = p[i]; out[i + 1] = p[i + 1]; }
    return out;
  });

  const data = {
    paths, docFile, docId, docText, docLen, post,
    avg: docText.length ? Math.round((totalLen / docText.length) * 1e4) / 1e4 : 1,
    terms: terms.join(' '),
  };

  // "<", U+2028 e U+2029 escapados: seguro mesmo se o arquivo for embutido em <script>.
  const json = JSON.stringify(data).replace(/[<\u2028\u2029]/g, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));

  // Runtime sem comentários de linha e sem indentação (minificação conservadora).
  const runtime = fs.readFileSync(path.join(__dirname, 'src', 'runtime.js'), 'utf8')
    .split('//# exports')[0]
    .split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('//')).join('\n');

  const js =
`/* search-index.js — gerado por build-index.js. Não edite manualmente. */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.Search = api;
})(typeof self !== 'undefined' ? self : this, function () {
'use strict';
var D = ${json};
${runtime}
return createSearch(D);
});
`;

  const out = path.resolve(o.out);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out + '.tmp', js);
  fs.renameSync(out + '.tmp', out);                          // escrita atômica

  return {
    out,
    warnings,
    stats: {
      paths: names.length, skipped, items: docText.length, terms: terms.length,
      bytes: Buffer.byteLength(js),
      ms: Number(process.hrtime.bigint() - started) / 1e6
    }
  };
}

function main() {
  const usage = `Uso: node build-index.js [--dir <pasta>] [--selector <css>] [--out <arquivo.js>]
                         [--ignore <css>] [--max-text <n>] [--recursive]
Padrões: --dir ${DEFAULTS.dir}  --selector "${DEFAULTS.selector}"  --out ${DEFAULTS.out}`;
  let values;
  try {
    ({ values } = parseArgs({
      options: {
        dir: { type: 'string' }, selector: { type: 'string' }, out: { type: 'string' },
        ignore: { type: 'string' }, 'max-text': { type: 'string' },
        recursive: { type: 'boolean' }, help: { type: 'boolean', short: 'h' }
      }
    }));
  } catch (err) {
    console.error(err.message + '\n' + usage);
    process.exit(1);
  }
  if (values.help) { console.log(usage); return; }

  const opts = {};
  for (const k of ['dir', 'selector', 'out', 'ignore']) if (values[k] !== undefined) opts[k] = values[k];
  if (values.recursive) opts.recursive = true;
  if (values['max-text'] !== undefined) opts.maxText = Math.max(0, parseInt(values['max-text'], 10) || 0);

  try {
    const { out, warnings, stats } = build(opts);
    for (const w of warnings) console.warn('aviso: ' + w);
    console.log(`${path.relative(process.cwd(), out) || out}: ${stats.items} itens de ${stats.paths - stats.skipped} arquivo(s), ` +
      `${stats.terms} termos, ${(stats.bytes / 1024).toFixed(1)} KB, ${stats.ms.toFixed(0)} ms`);
  } catch (err) {
    console.error('erro: ' + err.message);
    process.exit(1);
  }
}

module.exports = { build, DEFAULTS };
if (require.main === module) main();
