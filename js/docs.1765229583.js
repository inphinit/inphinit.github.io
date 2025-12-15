function fixTabs(text)
{
  let trimLineSize = null;

  const texts = text.replace(/^\n+/g, '').replace(/\s+$/g, '').split(/\r?\n/);

  texts.some(line => {
    if (trimLineSize === null && line.trim() !== '') {
      trimLineSize = line.length - line.trimStart().length;
      return true;
    }
  });

  return texts.map(line => {
    line = trimLineSize > 0 ? line.substring(trimLineSize) : line;
    return line.replace(/[<]/g, '&lt;').replace(/[>]/g, '&gt;');
  }).join("\n");
}

function applySpans(contents, showLine, skipLines)
{
  const texts = contents.replace(/^\n+/g, '').replace(/\s+$/g, '').split(/\r?\n/);

  skipLines = skipLines ?? -1;

  return texts.reverse().map((line, index) => {
    if (showLine && (skipLines === -1 || index >= skipLines)) {
      line = `<span>${line}</span>`;
    }

    return line;
  }).reverse().join("\n");
}

function highlightConfig(contents)
{
  return contents
    .replace(/(^|\n\s*)(\/\/|#)(.+)/g, '$1<strong>$2$3</strong>')
    .replace(/(^|\n\s*)(\w[\w-:]*\:*)(\s+?.*?)/g, '$1<b>$2</b>$3');
}

function highlightJson(contents)
{
  return contents.replace(/"([^"]+?)"/g, '<b>"$1"</b>');
}

function highlightML(contents)
{
  const attrs = /('[^']+?'|"[^"]+?")/g;

  return contents
  .replace(/\</g, '&lt;')
  .replace(/\>/g, '&gt;')
  .replace(/&lt;(\/)?(\w+?)&gt;/g, '&lt;$1<i>$2</i>&gt;')
  .replace(/&lt;(\??\w+?)(\s[\s\S]+?)&gt;/g, (_, tag, extras) => {
    extras = extras.replace(attrs, '<b>$1</b>');
    return `&lt;<i>${tag}</i>${extras}&gt;`;
  })
  .replace(/&lt;\!([\s\S]+?)&gt;/g, '<strong>&lt;!$1&gt;</strong>');
}

function highlightPhp(contents)
{
  const strs1 = /(\<{3}(["']|)([A-Za-z]+?)\2\n[\s\S]+?\n\3;|'[^']+?'|"[^"]+?")/g;
  const attrs = /\#\[([^\]]+?)\]/g;
  const lang1 = /(\s)(as|abstract|class|const|extends|final|function|implements|interface|namespace|static|use)(\s)/g;
  const lang2 = /(\s)(public|private|protected|static|new|foreach|for|while|if|elseif|else if|else|require_once|include_once|require|include)(\s)/g;
  const lang3 = /(^|[&\|\(\[,\s=])(\w+?)\:\:/g;
  const lang4 = /([^$])\$(\w+?)-\>/g;
  const lang5 = /(\s)(echo|return|case|switch|default\:|exit|continue)(\s)/g;
  const lang6 = /(\s)(break|continue|exit);/g;
  const docs1 = /(^|\s)\@(\w+)(.*?)(\|?)(array|boolean|false|true|callable|float|int|null|scalar|string|void)(\||\s|$)/g;
  const docs2 = /([\s\|])(@\w+?)([\s\|])/g;
  const types = /(^|[&\|\(\[,\s=])(int|bool|false|true|string|array|float|callable|void)([^&]|$)/g;
  const vars  = /(^|[&\|\(\[,\s=])\$(\w+?)([^\w]|$)/g;
  const vals  = /([&\|\(,\s=])(null|false|true)([\),;\s]|$)/gi;

  contents = contents.replace(/&lt;/g, '<').replace(/&gt;/g, '>');

  const inferPhp = /((^|.)\?\>|\<\?([\s=]|php(\s|$)))/.test(contents) === false;

  if (inferPhp) {
    contents = `<?php ${contents}`;
  }

  // Remove unnecessary lines at the end of the string.
  contents = contents.trimEnd();

  // Add `?>` at the beginning to make it easier to isolate the HTML from the PHP.
  if (contents.startsWith('?>') === false) {
    contents = `?>${contents}`;
  }

  // Add `<?` at the ending to make it easier to isolate the HTML from the PHP.
  if (contents.endsWith('<?php') === false && contents.endsWith('<?') === false) {
    contents += '<?php';
  }

  contents = contents

  // HTML
  .replace(/\?\>([\s\S]*?)\<\?([\s=]|php(\s|$))/g, (_, html, end) => {
    html = highlightML(html);
    return `?>${html}<?${end}`;
  });

  contents = contents

  // PHP
  .replace(/(\<\?[\s=]|\<\?php\s)([\s\S]*?)(\?\>|$)/g, (_, prefix, php, sulfix) => {
    const fixPrefix = prefix.trimEnd();

    if (fixPrefix !== prefix) {
      const rest = prefix.substring(fixPrefix.length);
      php = `${rest}${php}`;
    }

    prefix = fixPrefix.replace(/\</, '&lt;');
    sulfix = sulfix.replace(/\>/, '&gt;');

    // Strings
    php = php
    .replace(strs1, str => {
      str = str
      .replace(/"/g,  '&#34;')
      .replace(/\$/g, '&#36;')
      .replace(/'/g,  '&#39;')
      .replace(/\(/g, '&#40;')
      .replace(/\)/g, '&#41;')
      .replace(/\-/g, '&#45;')
      .replace(/\//g, '&#47;')
      .replace(/\:/g, '&#58;')
      .replace(/\[/g, '&#91;')
      .replace(/\\/g, '&#92;')
      .replace(/\</g, '&lt;')
      .replace(/\>/g, '&gt;')
      .replace(/ /g,  '&nbsp;')
      .replace(/\t/g, '&#9;')
      .split(/\n/)
      .join('</b>\n<b>');

      return `<b>${str}</b>`;
    })

    // Attributes
    .replace(attrs, '<i>&#35;[</i>$1<i>]</i>')

    // Comments
    .replace(/(^|\s)(\#.*?|\/\/.*)/g, (_, prefix, comment) => {
      comment = comment
      .trimEnd()
      .replace(/ /g, '&nbsp;')
      .replace(/\t/g, '&#9;')
      .replace(/\$/g, '&#36;');

      return `${prefix}<strong>${comment}</strong>`;
    })

    .replace(/\/\*([\s\S]+?)\*\//g, block => {
      while (docs1.test(block)) {
        block = block.replace(docs1, '$1@$2$3$4<i>$5</i>$6');
      }

      block = block
      .replace(/\$/g, '&#36;')
      .replace(docs2, '$1<b>$2</b>$3')
      .split(/\n/)
      .join('</strong>\n<strong>');

      return `<strong>${block}</strong>`;
    })

    // Lang + docs
    .replace(lang1, '$1<em>$2</em>$3')
    .replace(lang2, '$1<em>$2</em>$3')
    .replace(lang3, '$1<i>$2::</i>')
    .replace(lang4, '$1\$<i>$2-&gt;</i>')
    .replace(lang5, '$1<em>$2</em>$3')
    .replace(lang6, '$1<em>$2</em>;')
    .replace(types, '$1<i>$2</i>$3')
    .replace(vars,  '$1\$<i>$2</i>$3')
    .replace(vals,  '$1<i>$2</i>$3')

    // Restore/reduce
    .replace(/&nbsp;/g, ' ').replace(/&#9;/g, '\t');

    return prefix + php + sulfix;
  });

  // Remove `?>` from the beginning of the string.
  contents = contents.replace(/(^\?\>|\<\?(php)?\s*$)/g, '');

  if (inferPhp) {
    contents = contents.substring(9);
  }

  return contents.replace(/^\n+|\s+$/g, '');
}

function updateCodeBlocks(el)
{
  const lang = el.dataset.lang;

  let contents = fixTabs(el.textContent), lines = true, spans = false;

  if (lang === 'conf') {
    contents = highlightConfig(contents);
  } else if (lang === 'json') {
    contents = highlightJson(contents);
  } else if (lang === 'php') {
    contents = highlightPhp(contents);
  } else if (lang === 'html' || lang === 'xml') {
    contents = highlightML(contents);
  } else if (lang === 'terminal') {
    lines = false;
    spans = true;
  } else if (lang === 'none') {
    lines = false;
  }

  if (lines) {
    el.classList.toggle('lines', true);
    spans = true;
  }

  if (spans) {
    contents = applySpans(contents, el.dataset.lang !== 'none', el.dataset.langSkip);
  }

  el.innerHTML = contents;
}

{
  const doc = document;
  const loc = location;
  const win = window;

  function isSystemDark() {
    return win.matchMedia && win.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  const root = doc.documentElement;
  const currentColorScheme = localStorage.getItem('color-scheme');

  switch (localStorage.getItem('color-scheme')) {
    case 'dark':
      root.classList.toggle('dark', true);
      break;

    case 'light':
      // Nothing
      break;

    default:
      if (isSystemDark()) {
        root.classList.toggle('dark', true);
      }
  }

  doc.addEventListener('DOMContentLoaded', () => {
    const colorScheme = doc.querySelector('#color-scheme select');
    const menuBackdrop = doc.getElementById('menu-backdrop');
    const menuToggle = doc.getElementById('menu-toggle');
    const menu = doc.getElementById('menu');
    const body = doc.body;

    switch (currentColorScheme) {
      case 'auto':
      case 'dark':
      case 'light':
        colorScheme.value = currentColorScheme;
        break;
    }

    colorScheme.addEventListener('change', () => {
      const value = colorScheme.value.trim().toLowerCase();
      let isDark = false;

      if (value === 'auto') {
        isDark = isSystemDark();
      } else {
        isDark = value === 'dark';
      }

      root.classList.toggle('dark', isDark);
      localStorage.setItem('color-scheme', value);
    });

    menuToggle.addEventListener('click', () => {
      body.classList.toggle('show-menu');
    });

    menuBackdrop.addEventListener('click', () => {
      body.classList.toggle('show-menu', false);
    });

    const path = loc.pathname;

    if (path) {
      const currentLink = menu.querySelector(`a[href="${path}"]`);

      if (currentLink && currentLink.offsetTop) {
        menu.scrollTop = currentLink.offsetTop - 10;
      }

      menu.querySelectorAll(`a[href="${path}"]`).forEach(el => {
        el.classList.toggle('current', true);
      });
    }

    doc.querySelectorAll('.box > code').forEach(el => setTimeout(updateCodeBlocks, 10, el));
  });
}
