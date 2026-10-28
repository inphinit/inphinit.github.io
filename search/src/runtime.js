// Núcleo da busca.
// - O build-index.js embute este arquivo (até o marcador de exports) dentro de
//   search-index.js, ao lado dos dados.
// - O mesmo build usa `tokenize` via require(), garantindo que indexação e
//   consulta normalizem o texto exatamente da mesma forma.
// Escrito sem dependências e compatível com navegadores modernos e Node >= 18.

// minúsculas -> decompõe acentos (NFD) -> remove marcas combinantes -> palavras
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

  // Buffers reutilizados entre consultas: nenhuma varredura/reset de N itens por busca.
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

  // query(texto, limite)
  //  - texto não-string, vazio ou sem palavras -> []
  //  - limite ausente/inválido -> 10; limite <= 0 -> []; fracionário -> arredondado para baixo
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
      // A última palavra também casa por prefixo (busca "enquanto digita").
      if (t === last && w.length >= 3) {
        for (var j = exact ? lb + 1 : lb, c = 0; j < terms.length && c < MAX_PREFIX && terms[j].startsWith(w); j++, c++) {
          add(j, PREFIX_WEIGHT, t);
        }
      }
    }
    if (!nt) return [];

    // Cobertura: quanto mais palavras da consulta o item contém, maior a nota final.
    var d;
    for (i = 0; i < nt; i++) { d = touched[i]; scores[d] *= hits[d] / toks.length; }

    var top;
    if (max >= nt) {
      top = Array.from(touched.subarray(0, nt));
      top.sort(function (a, b) { return scores[b] - scores[a] || a - b; });
    } else {
      // Top-k por inserção ordenada: custo ~O(itens tocados), sem ordenar tudo.
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

//# exports
module.exports = { tokenize, createSearch };
