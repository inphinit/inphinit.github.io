/* search-index.js — gerado por build-index.js. Não edite manualmente. */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.Search = api;
})(typeof self !== 'undefined' ? self : this, function () {
'use strict';
var D = {"paths":["pagina-1.html","pagina-2.html","pagina-3.html"],"docFile":[0,0,0,1,1,1,2,2,2],"docId":["introducao","variaveis","funcoes","o-que-e-node","modulos","assincronismo","indice-invertido","bm25",""],"docText":["Introdução JavaScript é uma linguagem de programação criada para a web. Hoje ela também roda no servidor com Node.js.","Variáveis Use const e let para declarar variáveis. Evite var em código novo.","Funções Funções são valores de primeira classe em JavaScript — podem ser passadas como argumentos & retornadas.","O que é o Node.js Node.js é um ambiente de execução que permite rodar JavaScript fora do navegador, usando o motor V8.","Módulos O Node.js oferece módulos nativos como fs e path, além do ecossistema do npm.","Assincronismo Operações de E/S são assíncronas: callbacks, promises e async/await mantêm o servidor responsivo.","Índice invertido Um índice invertido associa cada termo aos itens onde ele aparece, evitando varrer todos os documentos a cada consulta.","Relevância com BM25 O BM25 pontua os itens pela frequência dos termos, pela raridade de cada termo e pelo tamanho do texto.","Acentuação Ação, coração, pão e São Paulo: a busca ignora acentos e diferenças entre maiúsculas e minúsculas."],"docLen":[20,13,15,24,16,16,21,22,17],"post":[[0,1,6,1,2,1],[8,1],[8,1],[8,1],[4,1],[3,1],[6,1],[6,1],[2,1],[5,1],[5,1],[6,1],[5,1],[5,1],[7,2],[8,1],[6,2,1,1],[5,1],[2,1],[1,1],[0,1,7,1],[2,1,2,1],[1,1],[6,1],[8,1],[0,1],[0,1,2,1,1,1,2,1,2,1],[1,1],[8,1],[3,1,1,2,3,1],[6,1],[7,1],[0,1,1,1,2,2,1,1,1,2,2,1,1,3],[4,1],[0,1],[6,1],[1,1,1,1],[8,1],[6,1],[1,1],[3,1],[3,1],[7,1],[4,1],[2,2],[0,1],[8,1],[6,2],[0,1],[6,2],[6,1,1,1],[0,1,2,1,1,1],[0,1,3,2,1,1],[1,1],[0,1],[8,1],[5,1],[8,1],[4,2],[3,1],[4,1],[3,1],[0,1],[0,1,3,2,1,1],[1,1],[4,1],[3,3,1,1,1,1,2,1],[4,1],[6,1],[5,1],[6,1,1,1],[8,1],[0,1,1,1],[2,1],[4,1],[8,1],[7,2],[7,1],[3,1],[2,1],[7,1],[2,1],[0,1],[5,1],[3,2],[7,1],[7,1],[5,1],[2,1],[0,1],[3,1],[5,1],[2,1,3,1,3,1],[2,1],[0,1,5,1],[7,1],[0,1],[6,1,1,1],[7,1],[7,1],[6,1],[3,1,3,1],[0,1],[3,1],[1,1],[3,1],[2,1],[1,1],[1,2],[6,1],[0,1]],"avg":18.2222,"terms":"a acao acentos acentuacao alem ambiente aos aparece argumentos assincronas assincronismo associa async await bm25 busca cada callbacks classe codigo com como const consulta coracao criada de declarar diferencas do documentos dos e ecossistema ela ele em entre evitando evite execucao fora frequencia fs funcoes hoje ignora indice introducao invertido itens javascript js let linguagem maiusculas mantem minusculas modulos motor nativos navegador no node novo npm o oferece onde operacoes os pao para passadas path paulo pela pelo permite podem pontua primeira programacao promises que raridade relevancia responsivo retornadas roda rodar s sao ser servidor tamanho tambem termo termos texto todos um uma usando use v8 valores var variaveis varrer web"};
function tokenize(s) {
return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]+/g, '').match(/[\p{L}\p{N}]+/gu) || [];
}
function createSearch(D) {
var K1 = 1.2;           // saturação de frequência (BM25)
var B = 0.75;           // normalização por tamanho do documento (BM25)
var MAX_TOKENS = 32;    // palavras distintas consideradas por consulta
var MAX_PREFIX = 30;    // termos expandidos pelo prefixo da última palavra
var PREFIX_WEIGHT = 0.5;
var DEFAULT_LIMIT = 10;
var terms = D.terms ? D.terms.split(' ') : [];   // ordenados (ordem de code units)
var post = D.post;                               // post[i] = [deltaDoc, tf, deltaDoc, tf, ...]
var paths = D.paths, docFile = D.docFile, docId = D.docId, docText = D.docText, docLen = D.docLen;
var N = docLen.length;
var avg = D.avg || 1;
var scores = new Float64Array(N);
var hits = new Uint8Array(N);
var lastTok = new Int16Array(N);
var stamp = new Uint32Array(N);
var touched = new Int32Array(N);
var gen = 0;
var nt = 0;
function lowerBound(t) {
var lo = 0, hi = terms.length;
while (lo < hi) {
var mid = (lo + hi) >> 1;
if (terms[mid] < t) lo = mid + 1; else hi = mid;
}
return lo;
}
function add(idx, weight, tok) {
var p = post[idx];
var df = p.length >> 1;
var idf = Math.log(1 + (N - df + 0.5) / (df + 0.5)) * weight;
var d = 0;
for (var k = 0; k < p.length; k += 2) {
d += p[k];
if (stamp[d] !== gen) {
stamp[d] = gen; scores[d] = 0; hits[d] = 0; lastTok[d] = -1;
touched[nt++] = d;
}
if (lastTok[d] !== tok) { lastTok[d] = tok; hits[d]++; }
var tf = p[k + 1];
scores[d] += idf * tf * (K1 + 1) / (tf + K1 * (1 - B + B * docLen[d] / avg));
}
}
function better(a, b) {
return scores[a] > scores[b] || (scores[a] === scores[b] && a < b);
}
function query(text, limit) {
if (typeof text !== 'string' || !N) return [];
var max = typeof limit === 'string' ? parseFloat(limit) : limit;
max = typeof max === 'number' && max === max ? Math.floor(max) : DEFAULT_LIMIT;
if (max <= 0) return [];
if (max > N) max = N;
var all = tokenize(text), toks = [], i;
for (i = 0; i < all.length && toks.length < MAX_TOKENS; i++) {
if (toks.indexOf(all[i]) < 0) toks.push(all[i]);
}
if (!toks.length) return [];
gen = (gen + 1) >>> 0;
if (!gen) { stamp.fill(0); gen = 1; }
nt = 0;
var last = toks.length - 1;
for (var t = 0; t <= last; t++) {
var w = toks[t];
var lb = lowerBound(w);
var exact = lb < terms.length && terms[lb] === w;
if (exact) add(lb, 1, t);
if (t === last && w.length >= 3) {
for (var j = exact ? lb + 1 : lb, c = 0; j < terms.length && c < MAX_PREFIX && terms[j].startsWith(w); j++, c++) {
add(j, PREFIX_WEIGHT, t);
}
}
}
if (!nt) return [];
var d;
for (i = 0; i < nt; i++) { d = touched[i]; scores[d] *= hits[d] / toks.length; }
var top;
if (max >= nt) {
top = Array.from(touched.subarray(0, nt));
top.sort(function (a, b) { return scores[b] - scores[a] || a - b; });
} else {
top = [];
for (i = 0; i < nt; i++) {
d = touched[i];
if (top.length === max && !better(d, top[max - 1])) continue;
var lo = 0, hi = top.length;
while (lo < hi) {
var mid = (lo + hi) >> 1;
if (better(top[mid], d)) lo = mid + 1; else hi = mid;
}
top.splice(lo, 0, d);
if (top.length > max) top.pop();
}
}
var out = new Array(top.length);
var j = top.length;
for (i = 0; i < j; i++) {
d = top[i];
out[i] = {
id: docId[d] || null,
path: paths[docFile[d]],
score: Math.round(scores[d] * 1e4) / 1e4,
text: docText[d],
};
}
return out;
}
return { query: query, size: N };
}
return createSearch(D);
});
