let element = document.getElementById("fixed-element");
let originalTop = element.offsetTop;

function fixedMenuWhileScrolling() {
  const screenSize = window.innerWidth;
  if (screenSize >= 720) {
    if (window.pageYOffset > originalTop) {
      element.style.position = "fixed";
      element.style.top = "0";
    } else {
      element.style.position = "absolute";
      element.style.top = originalTop + "px";
    }
  } else {
    element.style.position = "";
    element.style.top = "auto";
  }
}

addEventListener("scroll", fixedMenuWhileScrolling);

let element2 = document.getElementById("logo-whatsapp");
addEventListener("scroll", function () {
  if (window.pageYOffset > originalTop) {
    element2.style.position = "fixed";
    element2.style.top = "84%";
  } else {
    element2.style.position = "absolute";
    element2.style.top = "84%";
  }
});

let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle = "white";
pincel.fillRect(0, 0, 500, 40);
