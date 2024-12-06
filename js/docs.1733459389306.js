{
  function isSystemDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  const root = document.documentElement;
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

  document.addEventListener('DOMContentLoaded', () => {
    const colorScheme = document.querySelector('#color-scheme select');
    const menuBackdrop = document.getElementById('menu-backdrop');
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const body = document.body;

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

    const currentLink = menu.querySelector('a.current');

    if (currentLink.offsetTop) {
      menu.scrollTop = currentLink.offsetTop - 10;
    }
  });
}
