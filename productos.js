let images = [
  {
    src: "./Imagenes/Productos/Kodiak/EMBLEMA C 8500 CAPOT KODIAK.jpeg",
    title: "EMBLEMA C 8500 CAPOT",
    brand: "kodiak",
  },
  {
    src: "./Imagenes/Productos/Kodiak/EMBLEMA KODIAK CAPOT.jpeg",
    title: "EMBLEMA KODIAK CAPOT",
    brand: "kodiak",
  },
  {
    src: "./Imagenes/Productos/Kodiak/GANCHO CAPOT KODIAK.jpeg",
    title: "GANCHO CAPOT KODIAK",
    brand: "kodiak",
  },
  {
    src: "./Imagenes/Productos/Kodiak/MOTOR LINMPIABRISAS KODIAK96.jpeg",
    title: "MOTOR LINMPIABRISAS",
    brand: "kodiak",
  },
  {
    src: "./Imagenes/Productos/Kodiak/PALANCA SWITCH LBRISAS KODIAK.jpeg",
    title: "PALANCA SWITCH LBRISAS",
    brand: "kodiak",
  },
  {
    src: "./Imagenes/Productos/Kodiak/SWITCH LUCES KODIAK 05.jpeg",
    title: "SWITCH LUCES KODIAK",
    brand: "kodiak",
  },
  {
    src: "./Imagenes/Productos/Kenworth/BOMBA HIDRAULICA KW T80008 MOTOR ISX LH.jpeg",
    title: "BOMBA HIDRAULICA KW T80008 MOTOR ISX LH",
    brand: "kenworth",
  },
  {
    src: "./Imagenes/Productos/Kenworth/EMBLEMA KENWORTH LATERAL CAPOT.jpeg",
    title: "EMBLEMA KENWORTH LATERAL CAPOT",
    brand: "kenworth",
  },
  {
    src: "./Imagenes/Productos/Kenworth/MANIJA EXTERIOR PUERTA RH KW-T800 05 T300.jpeg",
    title: "MANIJA EXTERIOR PUERTA RH KW-T800 05 T300",
    brand: "kenworth",
  },
  {
    src: "./Imagenes/Productos/Kenworth/PERILLA AIRE ACONDICIONADO KW T -3C.jpeg",
    title: "PERILLA AIRE ACONDICIONADO KW T -3C",
    brand: "kenworth",
  },
  {
    src: "./Imagenes/Productos/Kenworth/SOBRETAPA SEGURO TAPA DE COMBUSTIBLE.jpeg",
    title: "SOBRETAPA SEGURO TAPA DE COMBUSTIBLE",
    brand: "kenworth",
  },
  {
    src: "./Imagenes/Productos/Kenworth/TAPA TANQUE COMBUSTIBLE KENWORT.jpeg",
    title: "TAPA TANQUE COMBUSTIBLE KENWORT",
    brand: "kenworth",
  },
  {
    src: "./Imagenes/Productos/International/CHAPA PUERTA LH FREIGHUNER.jpeg",
    title: "CHAPA PUERTA LH FREIGHUNER",
    brand: "international",
  },
  {
    src: "./Imagenes/Productos/International/COCUYO CAPOTA WORKSTAR EAGLE-76.jpeg",
    title: "COCUYO CAPOTA WORKSTAR EAGLE-76",
    brand: "international",
  },
  {
    src: "./Imagenes/Productos/International/FANCLUTCH DT - 360 BUS.jpeg",
    title: "FANCLUTCH DT - 360 BUS",
    brand: "international",
  },
  {
    src: "./Imagenes/Productos/International/LAMPARA TECHO HI 470095.jpeg",
    title: "LAMPARA TECHO HI 470095",
    brand: "international",
  },
  {
    src: "./Imagenes/Productos/International/PERA TEMPERATURA DT 466 HI TRANSMISION.jpeg",
    title: "PERA TEMPERATURA DT 466 HI TRANSMISION",
    brand: "international",
  },
  {
    src: "./Imagenes/Productos/International/SENSOR NIVEL AGUA HI-76009400.jpeg",
    title: "SENSOR NIVEL AGUA HI-76009400",
    brand: "international",
  },
  {
    src: "./Imagenes/Productos/International/SOPORTE PASAMANOS INTER 9400.jpeg",
    title: "SOPORTE PASAMANOS INTER 9400",
    brand: "international",
  },
  {
    src: "./Imagenes/Productos/International/TAPA TRASERA UNIDAD INTER.jpeg",
    title: "TAPA TRASERA UNIDAD INTER",
    brand: "international",
  },
  {
    src: "./Imagenes/Productos/International/UNIDAD COMPLETE RH-4400-0.jpeg",
    title: "UNIDAD COMPLETE RH-4400-0",
    brand: "international",
  },
  {
    src: "./Imagenes/Productos/Chevrolet/DISYUNTOR ARRANQUE.jpeg",
    title: "DISYUNTOR ARRANQUE",
    brand: "chevrolet",
  },
  {
    src: "./Imagenes/Productos/Chevrolet/EMBLEMA CHEVROLET FRONTAL NPR.jpeg",
    title: "EMBLEMA CHEVROLET FRONTAL NPR",
    brand: "chevrolet",
  },
  {
    src: "./Imagenes/Productos/Chevrolet/EMBLEMA CORBATIN FRONTAL NPR 0.jpeg",
    title: "EMBLEMA CORBATIN FRONTAL NPR 0",
    brand: "chevrolet",
  },
  {
    src: "./Imagenes/Productos/Chevrolet/KIT DE UNIDADES LH DE NPR98-0.jpeg",
    title: "KIT DE UNIDADES LH DE NPR98-0.",
    brand: "chevrolet",
  },
  {
    src: "./Imagenes/Productos/Chevrolet/TRAMPA DE COMB. NPR11.jpeg",
    title: "TRAMPA DE COMB. NPR11",
    brand: "chevrolet",
  },
  {
    src: "./Imagenes/Productos/Chevrolet/",
    title: "Lorem ipsum",
    brand: "chevrolet",
  },
];

let brand;
let brandNum = 0;
let marca = 0;
let producto = 0;
let productosMostrar = document.getElementById("elementos__elegidos");

function brandDefinition(brandNum) {
  switch (brandNum) {
    case 0:
      brand = "";
      return brand;
      break;
    case 1:
      "Kodiak";
      return brand;
      break;
    case 1:
      brand = "Kodiak";
      return brand;
      break;
    case 2:
      brand = "Kenworth";
      return brand;
      break;
    case 3:
      brand = "International";
      return brand;
      break;
    case 4:
      brand = "Chevrolet";
      return brand;
      break;
    case 5:
      brand = "Ford";
      return brand;
      break;
  }
}

for (let i = 0; i < images.length; i++) {
  let image = images[i];
  let imageElement = document.createElement("img");
  imageElement.src = image.src;

  let titleElement = document.createElement("h2");
  titleElement.textContent = image.title;

  let imageContainer = document.createElement("div");
  imageContainer.appendChild(imageElement);
  imageContainer.appendChild(titleElement);

  productosMostrar.appendChild(imageContainer);
}

function mostrarElementosPorMarca(marca = "") {
  productosMostrar.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    let image = images[i];

    if (marca === "" || image.brand === marca) {
      let imageElement = document.createElement("img");
      imageElement.src = image.src;

      let titleElement = document.createElement("h2");
      titleElement.textContent = image.title;

      let imageContainer = document.createElement("div");
      imageContainer.appendChild(imageElement);
      imageContainer.appendChild(titleElement);

      productosMostrar.appendChild(imageContainer);
    }
  }
}

let botonMarcaKodiak = document.getElementById("botonMarcaKodiak");
let botonMarcaKenworth = document.getElementById("botonMarcaKenworth");
let botonMarcaInternational = document.getElementById(
  "botonMarcaInternational"
);
let botonMarcaChevrolet = document.getElementById("botonMarcaChevrolet");
let botonMarcaFord = document.getElementById("botonMarcaFord");

botonMarcaKodiak.addEventListener("click", function () {
  mostrarElementosPorMarca("kodiak");
});

botonMarcaKenworth.addEventListener("click", function () {
  mostrarElementosPorMarca("kenworth");
});

botonMarcaInternational.addEventListener("click", function () {
  mostrarElementosPorMarca("international");
});

botonMarcaChevrolet.addEventListener("click", function () {
  mostrarElementosPorMarca("chevrolet");
});

botonMarcaFord.addEventListener("click", function () {
  mostrarElementosPorMarca("ford");
});

document.addEventListener("DOMContentLoaded", function () {
  selectOption1.addEventListener("click", () => {
    let option = selectOption1.style.backgroundImage;
    option = option.replace('url("', "").replace('")', "");
    imagesIcons.map((data) => {
      if (option == data.src) {
        mostrarElementosPorMarca(data.brand, "");
      }
    });
  });
});
