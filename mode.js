  const toggleBtn = document.getElementById('toggle-theme');
  const root = document.documentElement;

  function setTheme(mode) {
    root.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    if (toggleBtn) toggleBtn.textContent = mode === 'dark' ? '🌞' : '🌙';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultMode = saved || (prefersDark ? 'dark' : 'light');
    setTheme(defaultMode);
  });