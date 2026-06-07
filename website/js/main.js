// ── NAVIGATION ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navUl  = document.querySelector('nav ul');

  if (toggle && navUl) {
    toggle.addEventListener('click', () => {
      navUl.classList.toggle('open');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('header')) {
        navUl.classList.remove('open');
      }
    });
  }

  // Mark active nav link
  const links = document.querySelectorAll('nav a');
  const path  = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    // Normalize paths
    const linkPath = href.replace(/^\.\.\//, '/').replace(/^\.\//, '/');
    const current  = path.replace(/\/index\.html$/, '/');
    if (
      (href === 'index.html' && (path === '/' || path.endsWith('/index.html'))) ||
      (href !== 'index.html' && path.includes(linkPath.replace('.html', '')))
    ) {
      link.classList.add('active');
    }
  });

});
