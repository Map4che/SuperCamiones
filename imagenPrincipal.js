document.addEventListener("DOMContentLoaded", function () {
  let imagenes = [
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259538/DSC09654_wmx4k1.jpg",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259493/E-Delivery_Painel_Frontal_nb9wwm.jpg",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259538/METEOR_28.480_Ambientada_ptylpy.jpg",
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
