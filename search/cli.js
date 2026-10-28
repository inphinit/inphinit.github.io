#!/usr/bin/env node
'use strict';

// Uso: node cli.js "termo de pesquisa" [limite]
const Search = require('./search-index.js');

const [, , text = '', limit] = process.argv;
if (!text) {
  console.error('Uso: node cli.js "termo de pesquisa" [limite]');
  process.exit(1);
}

const results = Search.query(text, limit === undefined ? 5 : limit);
if (!results.length) console.log('Nenhum resultado.');
for (const r of results) {
  const where = r.id ? `${r.file}#${r.id}` : r.file;
  console.log(`${r.score.toFixed(3)}  ${where}\n         ${r.text.slice(0, 110)}${r.text.length > 110 ? '…' : ''}`);
}
