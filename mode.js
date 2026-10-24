(function () {
  const root = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function current() {
    const set = root.getAttribute('data-theme');
    if (set === 'light' || set === 'dark') return set;
    return darkQuery.matches ? 'dark' : 'light';
  }

  function labelToggles() {
    const next = current() === 'dark' ? 'light' : 'dark';
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.setAttribute('aria-label', `Switch to ${next} mode`);
      btn.title = `Switch to ${next} mode`;
    });
  }

  function toggle() {
    const next = current() === 'dark' ? 'light' : 'dark';
    const apply = () => {
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      labelToggles();
    };
    if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    labelToggles();
    document.querySelectorAll('.theme-toggle').forEach(btn => btn.addEventListener('click', toggle));
    darkQuery.addEventListener('change', labelToggles);
  });

  // Copy helpers
  window.copySnippet = function (btn) {
    const pre = btn.closest('.code')?.querySelector('pre');
    if (pre) window.copyText(pre.innerText.trim(), btn);
  };

  window.copyText = function (text, btn) {
    const done = () => showFeedback(btn);
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  };

  function fallbackCopy(text, done) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { if (document.execCommand('copy')) done(); } catch (e) {}
    document.body.removeChild(ta);
  }

  function showFeedback(btn) {
    if (!btn) return;
    const label = btn.querySelector('.label');
    const original = label ? label.textContent : null;
    btn.classList.add('done');
    if (label) label.textContent = 'Copied';
    clearTimeout(btn._t);
    btn._t = setTimeout(() => {
      btn.classList.remove('done');
      if (label) label.textContent = original;
    }, 1600);
  }
})();
