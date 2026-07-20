document.currentScript.insertAdjacentHTML('afterend', `
<div style="position:fixed;top:0;right:0;z-index:260;font-family:'David','Times New Roman',serif;font-size:0.7rem;color:var(--text-light);padding:2px 6px;letter-spacing:0.05em;opacity:0.7">בס"ד</div>

<div class="header-top">
  <div class="header-top-inner">
    <a class="logo" href="/en/index.html">
      <img src="/images/logo.svg" alt="Artists' Colony Inn">
    </a>
    <a href="tel:+972586200779" class="header-phone" dir="ltr" aria-label="+972-58-620-0779">
      <span class="header-phone-text">+972-58-620-0779</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    </a>
  </div>
</div>

<div class="header-fixed">
  <div class="header-fixed-cluster">
    <a href="/en/index.html" class="btn-book">Book</a>
    <button class="nav-toggle" aria-label="Menu" id="nav-toggle-btn">
      <span></span><span></span><span></span>
    </button>
    <nav>
      <ul id="nav-menu">
        <li><a href="/en/index.html">Home</a></li>
        <li><a href="/en/shabbat.html">Shabbat</a></li>
        <li><a href="/en/gallery.html">Gallery</a></li>
        <li><a href="/en/about.html">About</a></li>
        <li><a href="/en/index.html#contact">Contact</a></li>
        <li><a href="/en/reviews.html">Reviews</a></li>
        <li dir="rtl"><a href="#" id="lang-toggle" class="nav-phone">עברית</a></li>
      </ul>
    </nav>
  </div>
</div>
`);
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('nav-toggle-btn');
  var menu = document.getElementById('nav-menu');
  if (btn && menu) {
    btn.addEventListener('click', function() {
      menu.classList.toggle('open');
    });
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.header-fixed')) {
        menu.classList.remove('open');
      }
    });
  }

  var path = window.location.pathname;
  document.documentElement.lang = 'en';
  
	var btnBook = document.querySelector('.btn-book');
	if (btnBook && window.IS_BOOK_PAGE) {
	  btnBook.style.display = 'none';
	}

  // Language toggle — strip /en/ prefix to get Hebrew equivalent
  var langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    var hePath = path.replace(/^\/en\//, '/');
	if (hePath === '/') hePath = '/index.html';
	langToggle.href = hePath + window.location.search;
  }

  // hreflang tags
  var enUrl = 'https://www.theartistscolonyinn.com' + path;
  var heUrl = 'https://www.theartistscolonyinn.com' + path.replace(/^\/en\//, '/');

  var linkEn = document.createElement('link');
  linkEn.rel = 'alternate';
  linkEn.hreflang = 'en';
  linkEn.href = enUrl;
  document.head.appendChild(linkEn);

  var linkHe = document.createElement('link');
  linkHe.rel = 'alternate';
  linkHe.hreflang = 'he';
  linkHe.href = heUrl;
  document.head.appendChild(linkHe);

  var linkDefault = document.createElement('link');
  linkDefault.rel = 'alternate';
  linkDefault.hreflang = 'x-default';
  linkDefault.href = heUrl;
  document.head.appendChild(linkDefault);

  document.querySelectorAll('nav a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (!href || href.startsWith('tel:') || a.id === 'lang-toggle') return;
    if (
      (href === '/en/index.html' && (path === '/en/' || path === '/en/index.html')) ||
      (href !== '/en/index.html' && path.startsWith(href.replace('.html', '')))
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