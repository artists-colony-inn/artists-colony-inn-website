document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  var btn = document.getElementById('nav-toggle-btn');
  var menu = document.getElementById('nav-menu');
  if (btn && menu) {
    btn.addEventListener('click', function() {
      menu.classList.toggle('open');
    });
  }

  // Mark active nav link
  var path = window.location.pathname;
  document.querySelectorAll('nav a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (!href || href.startsWith('tel:')) return;
    if (
      (href === '/index.html' && (path === '/' || path === '/index.html')) ||
      (href !== '/index.html' && path.startsWith(href.replace('.html', '')))
    ) {
      a.classList.add('active');
    }
  });
});
