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
  });
}
