document.addEventListener("DOMContentLoaded", function () {
  let imagenes = [
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259538/Constellation_33.480_Ambientada_ek7dtz.jpg",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259538/DSC00266_zx5tvj.jpg",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259537/Packshot_4_gkalua.jpg",
  ];

  let index = 0;
  let imagenPrincipal = document.getElementById("imagen-principal");
  let dotsContainer = document.querySelector(".carousel-dots");
  let dots = [];

  function cambiarImagen() {
    imagenPrincipal.style.backgroundImage = `url(${imagenes[index]})`;

    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });
    dots[index].classList.add("active");
  }

  function crearDots() {
    for (let i = 0; i < imagenes.length; i++) {
      let dot = document.createElement("span");
      dot.addEventListener("click", function () {
        index = Array.from(dots).indexOf(this);
        cambiarImagen();
      });
      dotsContainer.appendChild(dot);
      dots.push(dot);
    }
    dots[0].classList.add("active");
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

  document
    .getElementById("anterior")
    .addEventListener("click", cambiarAnterior);
  document
    .getElementById("siguiente")
    .addEventListener("click", cambiarSiguiente);

  crearDots();

  let firstImage = new Image();
  firstImage.onload = function () {
    cambiarImagen();
    setInterval(cambiarSiguiente, 10000);
  };
  firstImage.src = imagenes[0];
});

let element = document.getElementById("fixed-element");
let originalTop = element.offsetTop;

addEventListener("scroll", function () {
  if (window.pageYOffset > originalTop) {
    element.style.position = "fixed";
    element.style.top = "0";
  } else {
    element.style.position = "absolute";
    element.style.top = "5.8rem";
  }
});
