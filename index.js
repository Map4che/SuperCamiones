let element = document.getElementById('fixed-element');
let originalTop = element.offsetTop;


addEventListener('scroll', function() {
  if (window.pageYOffset > originalTop) {
    element.style.position = 'fixed';
    element.style.top = '0';
  } else {
    element.style.position = 'absolute';
    element.style.top = originalTop + 'px';
  }
});

let element2 = document.getElementById('logo-whatsapp');
addEventListener('scroll', function() {
  if (window.pageYOffset > originalTop) {
    element2.style.position = 'fixed';
    element2.style.top = '670px';
  } else {
    element2.style.position = 'absolute';
    element2.style.top = '670px';
  }
});



let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle='white';
pincel.fillRect(0,0,500,30);

pantalla.style.cursor= "pointer";

pincel.beginPath();
pincel.fillStyle='#002E61'
pincel.arc(130, 20, 10, 0, 2 * Math.PI);
pincel.fill();

pincel.beginPath();
pincel.fillStyle= '#002E61';
pincel.arc(210, 20, 10, 0, 2 * Math.PI);
pincel.fill();

pincel.beginPath();
pincel.fillStyle='#002E61'
pincel.arc(290, 20, 10, 0, 2 * Math.PI);
pincel.fill();

pincel.beginPath();
pincel.fillStyle='#002E61'
pincel.arc(370, 20, 10, 0, 2 * Math.PI);
pincel.fill();