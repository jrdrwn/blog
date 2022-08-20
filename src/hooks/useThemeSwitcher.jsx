import { useEffect } from 'react';

export default function useThemeSwitcher(
  button,
  { light = 'light', dark = 'dark' }
) {
  useEffect(() => {
    if (
      localStorage.theme === dark ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.dataset.theme = dark;
      button.current.classList.add('swap-active');
    } else {
      document.documentElement.dataset.theme = light;
    }
  }, []);

  return (ev) => {
    ev.currentTarget.classList.toggle('swap-active');
    const theme = ev.currentTarget.classList.contains('swap-active')
      ? dark
      : light;
    document.documentElement.dataset.theme = theme;
    localStorage.theme = theme;
  };
}
