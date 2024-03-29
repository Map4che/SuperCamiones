document.addEventListener("DOMContentLoaded", function () {
  let imagenes = [
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683438/Logos_PNG-01_oz98js.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683437/Logos_PNG-02_svugpv.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683437/Logos_PNG-04_vjsdiu.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683437/Logos_PNG-03_jsilq4.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683437/Logos_PNG-05_fg3qkb.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683434/Logos_PNG-12_p8x3nm.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683436/Logos_PNG-07_af9zxt.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683435/Logos_PNG-08_asqbnw.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683435/Logos_PNG-09_vpiw3j.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683435/Logos_PNG-10_ujf5ts.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683434/Logos_PNG-11_xttnmf.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683434/Logos_PNG-13_riumh7.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683436/Logos_PNG-06_wz1dnk.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683434/Logos_PNG-14_qcy54a.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683433/Logos_PNG-15_s9hol1.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683433/Logos_PNG-16_b95t7a.png",
    "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711683433/Logos_PNG-17_foybxb.png",
  ];

  let index1 = 0;
  let index2 = 1;
  let index3 = 2;
  let imagen1 = document.getElementById("imagen-alies1");
  let imagen2 = document.getElementById("imagen-alies2");
  let imagen3 = document.getElementById("imagen-alies3");

  function cambiarImagen() {
    imagen1.style.backgroundImage = `url(${imagenes[index1]})`;
    imagen2.style.backgroundImage = `url(${imagenes[index2]})`;
    imagen3.style.backgroundImage = `url(${imagenes[index3]})`;
  }

  function cambiarAnterior() {
    index1--;
    index2--;
    index3--;
    if (index1 < 0) {
      index1 = imagenes.length - 1;
    }
    if (index2 < 0) {
      index2 = imagenes.length - 1;
    }
    if (index3 < 0) {
      index3 = imagenes.length - 1;
    }
    cambiarImagen();
  }

  function cambiarSiguiente() {
    index1++;
    index2++;
    index3++;
    if (index1 >= imagenes.length) {
      index1 = 0;
    }
    if (index2 >= imagenes.length) {
      index2 = 0;
    }
    if (index3 >= imagenes.length) {
      index3 = 0;
    }
    cambiarImagen();
  }

  document
    .getElementById("anterior-alies")
    .addEventListener("click", cambiarAnterior);
  document
    .getElementById("siguiente-alies")
    .addEventListener("click", cambiarSiguiente);

  let firstImage = new Image();
  firstImage.onload = function () {
    cambiarImagen();
    setInterval(cambiarSiguiente, 10000);
  };
  firstImage.src = imagenes[0];
});
