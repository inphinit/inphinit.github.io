'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { build } = require('../build-index.js');

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'search-test-'));
test.after(() => fs.rmSync(tmp, { recursive: true, force: true }));

let counter = 0;
// Cria uma pasta de HTMLs, gera o índice e devolve { Search, out, result }.
function fixture(files, options = {}) {
  const dir = path.join(tmp, 'case' + counter++);
  fs.mkdirSync(dir, { recursive: true });
  for (const [name, html] of Object.entries(files)) fs.writeFileSync(path.join(dir, name), html);
  const out = path.join(dir, 'out', 'search-index.js');
  const result = build({ dir, out, ...options });
  delete require.cache[require.resolve(out)];
  return { Search: require(out), out, dir, result };
}

const page = (sections) => `<!doctype html><html><body><main>${sections}</main></body></html>`;

test('acentos e maiúsculas não importam, nos dois sentidos', () => {
  const { Search } = fixture({
    'a.html': page('<section id="s1"><p>Ação e coração: São Paulo</p></section><section id="s2"><p>acao simples</p></section>')
  });
  assert.equal(Search.query('ACAO', 5).length, 2);
  assert.equal(Search.query('coração', 5)[0].id, 's1');
  assert.equal(Search.query('sao paulo', 5)[0].id, 's1');
  assert.equal(Search.query('AÇÃO', 5).length, 2);
  // O texto exibido mantém o original
  assert.equal(Search.query('coracao', 1)[0].text, 'Ação e coração: São Paulo');
});

test('consultas com várias palavras priorizam quem contém mais termos', () => {
  const { Search } = fixture({
    'a.html': page(
      '<section id="so-js"><p>javascript javascript javascript</p></section>' +
      '<section id="ambos"><p>javascript roda no node</p></section>' +
      '<section id="so-node"><p>node</p></section>')
  });
  const r = Search.query('javascript node', 5);
  assert.deepEqual(r.map((x) => x.id), ['ambos', 'so-js', 'so-node']);
  assert.ok(r[0].score >= r[1].score && r[1].score >= r[2].score);
});

test('sem correspondências retorna array vazio', () => {
  const { Search } = fixture({ 'a.html': page('<section><p>olá mundo</p></section>') });
  assert.deepEqual(Search.query('inexistente', 5), []);
});

test('seletor que retorna vários elementos por arquivo; ids e metadados', () => {
  const { Search, result } = fixture({
    'a.html': page('<section id="x"><p>alfa</p></section><section><p>alfa beta</p></section>'),
    'b.html': page('<section id="y"><p>alfa gama</p></section>')
  });
  assert.equal(result.stats.items, 3);
  const r = Search.query('alfa', 10);
  assert.equal(r.length, 3);
  assert.deepEqual(r.map((x) => x.file).sort(), ['a.html', 'a.html', 'b.html']);
  assert.ok(r.some((x) => x.id === null));
  assert.ok(r.some((x) => x.id === 'y' && x.file === 'b.html'));
});

test('seletor configurável', () => {
  const { Search } = fixture(
    { 'a.html': '<body><article class="post"><p>gato</p></article><div><p>cachorro</p></div></body>' },
    { selector: 'article.post' }
  );
  assert.equal(Search.query('gato', 5).length, 1);
  assert.deepEqual(Search.query('cachorro', 5), []);
});

test('script, style e elementos vazios ficam fora do índice', () => {
  const { Search, result } = fixture({
    'a.html': page(
      '<section id="ok"><p>texto util</p><script>var segredo=1</script><style>.segredo{}</style></section>' +
      '<section id="vazia">   <script>so script</script></section>' +
      '<section id="so-pontuacao"> ... --- </section>')
  });
  assert.equal(result.stats.items, 1);
  assert.deepEqual(Search.query('segredo', 5), []);
  assert.equal(Search.query('util', 5)[0].id, 'ok');
});

test('entidades HTML e tags adjacentes viram texto separado por espaço', () => {
  const { Search } = fixture({
    'a.html': page('<section id="e"><p>caf&eacute; &amp; p&atilde;o</p><p>segundo</p><ul><li>um</li><li>dois</li></ul></section>')
  });
  assert.equal(Search.query('cafe pao', 5)[0].text, 'café & pão segundo um dois');
  assert.equal(Search.query('segundo', 5).length, 1);
  assert.equal(Search.query('dois', 5).length, 1);          // não vira "umdois"
  assert.deepEqual(Search.query('umdois', 5), []);
});

test('pasta sem arquivos HTML gera índice vazio válido', () => {
  const { Search, result } = fixture({ 'leia-me.txt': 'nada' });
  assert.equal(result.stats.items, 0);
  assert.ok(result.warnings.length >= 1);
  assert.equal(Search.size, 0);
  assert.deepEqual(Search.query('qualquer', 5), []);
});

test('arquivo ilegível ou HTML estranho não interrompe o processo', () => {
  const dir = path.join(tmp, 'case-bad');
  fs.mkdirSync(dir, { recursive: true });
  fs.mkdirSync(path.join(dir, 'pasta.html'));                            // diretório com nome .html: ignorado
  fs.symlinkSync('nao-existe.html', path.join(dir, 'link-quebrado.html')); // erro de leitura (ENOENT)
  fs.writeFileSync(path.join(dir, 'quebrado.html'), '<main><section id="q"><p>texto <b>sem fechar</section>');
  fs.writeFileSync(path.join(dir, 'binario.html'), Buffer.from([0xff, 0xfe, 0x00, 0x01, 0x80]));
  fs.writeFileSync(path.join(dir, 'vazio.html'), '');
  const out = path.join(dir, 'idx.js');
  const { warnings, stats } = build({ dir, out });
  assert.equal(stats.skipped, 1);
  assert.ok(warnings.some((w) => w.includes('link-quebrado.html')));
  assert.equal(require(out).query('fechar', 5)[0].id, 'q');
});

test('pasta inexistente e seletor inválido geram erro claro', () => {
  assert.throws(() => build({ dir: path.join(tmp, 'nao-existe') }), /pasta/);
  const dir = path.join(tmp, 'case-sel');
  fs.mkdirSync(dir, { recursive: true });
  assert.throws(() => build({ dir, selector: 'main >>> [' }), /Seletor/);
});

test('entradas inválidas e limites', () => {
  const sections = Array.from({ length: 15 }, (_, i) => `<section id="s${i}"><p>palavra comum ${i}</p></section>`).join('');
  const { Search } = fixture({ 'a.html': page(sections) });

  for (const bad of [undefined, null, 42, {}, [], true]) assert.deepEqual(Search.query(bad, 5), []);
  assert.deepEqual(Search.query('', 5), []);
  assert.deepEqual(Search.query('   ', 5), []);
  assert.deepEqual(Search.query('!!! ???', 5), []);

  assert.equal(Search.query('palavra', 3).length, 3);
  assert.equal(Search.query('palavra', 3.9).length, 3);     // fracionário: para baixo
  assert.equal(Search.query('palavra', '4').length, 4);     // string numérica
  assert.equal(Search.query('palavra').length, 10);         // ausente: padrão 10
  assert.equal(Search.query('palavra', NaN).length, 10);    // inválido: padrão 10
  assert.equal(Search.query('palavra', 'abc').length, 10);
  assert.equal(Search.query('palavra', Infinity).length, 15);
  assert.equal(Search.query('palavra', 1000).length, 15);
  assert.deepEqual(Search.query('palavra', 0), []);
  assert.deepEqual(Search.query('palavra', -3), []);
});

test('busca por prefixo na última palavra; exato vence prefixo', () => {
  const { Search } = fixture({
    'a.html': page('<section id="exato"><p>node</p></section><section id="prefixo"><p>nodemon</p></section>')
  });
  assert.deepEqual(Search.query('nod', 5).map((x) => x.id).sort(), ['exato', 'prefixo']);
  assert.equal(Search.query('node', 5)[0].id, 'exato');
  assert.deepEqual(Search.query('no', 5), []);              // prefixos curtos (<3) não expandem
  assert.deepEqual(Search.query('nod java', 5), []);        // prefixo só vale para a ÚLTIMA palavra
});

test('resultado é determinístico e saída é reproduzível byte a byte', () => {
  const files = { 'a.html': page('<section id="a"><p>um dois três</p></section><section id="b"><p>três quatro</p></section>') };
  const one = fixture(files);
  const two = build({ dir: one.dir, out: path.join(one.dir, 'out', 'again.js') });
  assert.equal(fs.readFileSync(one.out, 'utf8'), fs.readFileSync(two.out, 'utf8'));
  assert.deepEqual(one.Search.query('tres', 5), one.Search.query('tres', 5));
});

test('arquivo gerado funciona no navegador (global Search) e não depende de cheerio/require', () => {
  const { out } = fixture({ 'a.html': page('<section id="x"><p>JavaScript &amp; Node</p></section>') });
  const src = fs.readFileSync(out, 'utf8');
  assert.ok(!/require\(|cheerio/.test(src));

  const sandbox = { console };          // sem `module`: simula <script src="search-index.js">
  sandbox.self = sandbox;
  vm.runInNewContext(src, sandbox);
  const results = sandbox.Search.query('javascript node', 5);
  assert.equal(results.length, 1);
  assert.equal(results[0].file, 'a.html');
  assert.equal(results[0].id, 'x');
});

test('caracteres especiais no texto não quebram o JS gerado', () => {
  const { Search } = fixture({
    'a.html': page('<section id="z"><p>&lt;/script&gt; aspas " e \\ barra\u2028separador</p></section>')
  });
  assert.equal(Search.query('barra', 5)[0].id, 'z');
  assert.equal(Search.query('script', 5)[0].id, 'z');
});

test('--max-text trunca só o texto exibido, não a indexação', () => {
  const { Search } = fixture(
    { 'a.html': page('<section id="t"><p>' + 'inicio '.repeat(5) + 'palavrafinal</p></section>') },
    { maxText: 20 }
  );
  const [r] = Search.query('palavrafinal', 1);
  assert.equal(r.id, 't');
  assert.ok(r.text.length <= 21 && r.text.endsWith('…'));
});

test('busca em subpastas apenas com recursive', () => {
  const dir = path.join(tmp, 'case-rec');
  fs.mkdirSync(path.join(dir, 'sub'), { recursive: true });
  fs.writeFileSync(path.join(dir, 'a.html'), page('<section><p>raiz</p></section>'));
  fs.writeFileSync(path.join(dir, 'sub', 'b.html'), page('<section><p>filho</p></section>'));
  const flat = build({ dir, out: path.join(dir, 'f.js') });
  const deep = build({ dir, out: path.join(dir, 'd.js'), recursive: true });
  assert.equal(flat.stats.items, 1);
  assert.equal(deep.stats.items, 2);
  assert.equal(require(path.join(dir, 'd.js')).query('filho', 1)[0].file, 'sub/b.html');
});
