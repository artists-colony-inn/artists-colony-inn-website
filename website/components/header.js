document.currentScript.insertAdjacentHTML('afterend', `
<div style="position:fixed;top:0;right:0;z-index:200;font-family:'David','Times New Roman',serif;font-size:0.7rem;color:var(--text-light);padding:2px 6px;letter-spacing:0.05em;opacity:0.7">בס"ד</div>
<header>
  <div class="header-inner">
    <a class="logo" href="/index.html">
      <img src="/images/logo.svg" alt="מלון בוטיק קריית האמנים">
    </a>
    <button class="nav-toggle" aria-label="תפריט" id="nav-toggle-btn">
      <span></span><span></span><span></span>
    </button>
    <nav>
      <ul id="nav-menu">
        <li><a href="/index.html">ראשי</a></li>
        <li><a href="/shabbat.html">שבת</a></li>
        <li><a href="/gallery.html">גלריה</a></li>
        <li><a href="/about.html">אודות</a></li>
        <li><a href="/contact.html">צור קשר</a></li>
        <li><a href="/reviews.html">ביקורות</a></li>
        <li><a href="/booking.html">הזמנה</a></li>
        <li><a href="tel:+972586200779" class="nav-phone" dir="ltr">+972-58-620-0779</a></li>
        <li><a href="#" id="lang-toggle" class="nav-phone">English</a></li>
      </ul>
    </nav>
  </div>
</header>
`);
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('nav-toggle-btn');
  var menu = document.getElementById('nav-menu');
  if (btn && menu) {
    btn.addEventListener('click', function() {
      menu.classList.toggle('open');
    });
    document.addEventListener('click', function(e) {
      if (!e.target.closest('header')) {
        menu.classList.remove('open');
      }
    });
  }
  var path = window.location.pathname;
  document.documentElement.lang = 'he';

  // Language toggle — add /en/ prefix to get English equivalent
  var langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    var enPath = '/en' + (path === '/' ? '/index.html' : path);
    langToggle.href = enPath;
  }

  // hreflang tags
  var heUrl = 'https://www.theartistscolonyinn.com' + path;
  var enUrl = 'https://www.theartistscolonyinn.com/en' + (path === '/' ? '/index.html' : path);

  var linkHe = document.createElement('link');
  linkHe.rel = 'alternate';
  linkHe.hreflang = 'he';
  linkHe.href = heUrl;
  document.head.appendChild(linkHe);

  var linkEn = document.createElement('link');
  linkEn.rel = 'alternate';
  linkEn.hreflang = 'en';
  linkEn.href = enUrl;
  document.head.appendChild(linkEn);

  var linkDefault = document.createElement('link');
  linkDefault.rel = 'alternate';
  linkDefault.hreflang = 'x-default';
  linkDefault.href = heUrl;
  document.head.appendChild(linkDefault);

  document.querySelectorAll('nav a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (!href || href.startsWith('tel:') || a.id === 'lang-toggle') return;
    if (
      (href === '/index.html' && (path === '/' || path === '/index.html')) ||
      (href !== '/index.html' && path.startsWith(href.replace('.html', '')))
    ) {
      a.classList.add('active');
    }
  });
});
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/svg+xml';
favicon.href = '/images/logo.svg';
document.head.appendChild(favicon);

var style = document.createElement('style');
style.textContent = 'body { direction: rtl; text-align: right; }';
document.head.appendChild(style);

// Google Analytics
(function() {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-H5ZXBGVT4Q';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-H5ZXBGVT4Q');
})();