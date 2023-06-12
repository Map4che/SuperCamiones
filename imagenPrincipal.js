var imagenes = [
  'Imagenes/344846287_3498258070454003_984927644363278518_n.jpg', 
  'Imagenes/Aliados.jpg', 
  'Imagenes/Mensajero.jpg'
];

var index = 0;
var imagenPrincipal = document.getElementById('imagen-principal');
var dotsContainer = document.querySelector('.carousel-dots');
var dots = [];

function cambiarImagen() {
  imagenPrincipal.style.backgroundImage = `url(${imagenes[index]})`;

  dots.forEach(function (dot) {
    dot.classList.remove('active');
  });
  dots[index].classList.add('active');
}

function crearDots() {
  for (var i = 0; i < imagenes.length; i++) {
    var dot = document.createElement('span');
    dot.addEventListener('click', function () {
      index = Array.from(dots).indexOf(this);
      cambiarImagen();
    });
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }
  dots[0].classList.add('active');
}

function cambiarAnterior() {
  index--;
  if (index < 0) {
    index = imagenes.length - 1;
  }
  cambiarImagen();
}

function cambiarSiguiente() {
  index++;
  if (index >= imagenes.length) {
    index = 0;
  }
  cambiarImagen();
}

document.getElementById('anterior').addEventListener('click', cambiarAnterior);
document.getElementById('siguiente').addEventListener('click', cambiarSiguiente);

crearDots();
setInterval(cambiarSiguiente, 10000);
