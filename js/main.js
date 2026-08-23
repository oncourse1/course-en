// ===== Mobile nav toggle =====
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // ===== FAQ accordion =====
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!wasOpen) {
        item.classList.add('open');
        var a = item.querySelector('.faq-a');
        a.style.maxHeight = a.scrollHeight + 40 + 'px';
      }
    });
  });

  // ===== Level tabs (curriculum browser) =====
  var tabs = document.querySelectorAll('.level-tab');
  var panels = document.querySelectorAll('.level-panel');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-level');
      tabs.forEach(function (t) { t.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });
      tab.classList.add('active');
      var panel = document.querySelector('.level-panel[data-level="' + target + '"]');
      if (panel) panel.classList.add('active');
    });
  });

  // ===== Sticky mobile CTA (shows after scrolling past hero) =====
  var stickyCta = document.querySelector('.sticky-cta');
  var hero = document.querySelector('.hero, .page-hero');
  if (stickyCta && hero) {
    window.addEventListener('scroll', function () {
      var trigger = hero.offsetTop + hero.offsetHeight;
      if (window.scrollY > trigger) {
        stickyCta.classList.add('show');
      } else {
        stickyCta.classList.remove('show');
      }
    });
  }
});
