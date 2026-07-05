(function () {
  function normalizeViewportHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--app-vh', vh + 'px');
  }
  function markLocalStatus(){
    document.documentElement.classList.add('offline-local-assets');
    var hasExternal = Array.prototype.some.call(document.querySelectorAll('link[href],script[src]'), function(el){
      var v = el.getAttribute('href') || el.getAttribute('src') || '';
      return /^https?:\/\//i.test(v);
    });
    document.documentElement.classList.toggle('external-resource-left', hasExternal);
    if(hasExternal) console.warn('[DualSheng] External resource remains in index.html.');
  }
  window.addEventListener('resize', normalizeViewportHeight);
  window.addEventListener('orientationchange', normalizeViewportHeight);
  document.addEventListener('DOMContentLoaded', function () {
    normalizeViewportHeight();
    markLocalStatus();
  });
})();
