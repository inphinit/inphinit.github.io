function isSystemDark() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

setTimeout(() => {
  const root = document.documentElement;

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
}, 1);

const colorScheme = document.querySelector('#color-scheme select');
const currentColorScheme = localStorage.getItem('color-scheme');
const menuBackdrop = document.getElementById('menu-backdrop');
const menuToggle = document.getElementById('menu-toggle');
const root = document.documentElement;
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