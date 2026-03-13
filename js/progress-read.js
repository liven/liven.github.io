(function () {
  var bar = document.getElementById('progress-read');
  if (!bar) return;

  function update() {
    var doc = document.documentElement;
    var scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var scrollHeight = doc.scrollHeight - doc.clientHeight;
    var progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = progress + '%';
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  document.addEventListener('DOMContentLoaded', update);
})();

