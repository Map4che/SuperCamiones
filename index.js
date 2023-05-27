var element = document.getElementById('fixed-element');
var originalTop = element.offsetTop;

addEventListener('scroll', function() {
  if (window.pageYOffset > originalTop) {
    element.style.position = 'fixed';
    element.style.top = '0';
  } else {
    element.style.position = 'absolute';
    element.style.top = originalTop + 'px';
  }
});
