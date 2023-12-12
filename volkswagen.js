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

let images = [
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259514/MOTOR_CUMMINS_ISL_8.9__fldxpq.jpg",
    title: "Motor Cummins ISL 8.9",
    category: "motor",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259514/MOTOR_CUMMINS_L9_rsfpgw.jpg",
    title: "Motor Cummins L9",
    category: "motor",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259513/MOTOR_ISF_kucuxk.jpg",
    title: "Motor ISF",
    category: "motor",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259512/MOTOR_MWM_boiot1.jpg",
    title: "Motor BMW",
    category: "motor",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259379/Rodillos_Para_Ruedas_rod0qs.jpg",
    title: "Rodillos_Para_Ruedas_rod0qs",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259375/Retenes_Transmision_fswsbm.jpg",
    title: "Retenes_Transmision_fswsbm",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259371/Retenes_Cajas_De_Cambios_yxdcav.jpg",
    title: "Retenes_Cajas_De_Cambios_yxdcav",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259367/Rodillos_Para_Cajas_y56swd.jpg",
    title: "Rodillos_Para_Cajas_y56swd",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259363/Retenes_Ruedas_iqopbj.jpg",
    title: "Retenes_Ruedas_iqopbj",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259358/Balineras_Para_TODO_gqbfot.jpg",
    title: "Balineras_Para_TODO_gqbfot",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259354/Balineras_Para_Clutch_a084qp.jpg",
    title: "Balineras_Para_Clutch_a084qp",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259350/WhatsApp_Image_2023-11-08_at_19.27.47_ozcufd.jpg",
    title: "Balineras 1",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259346/WhatsApp_Image_2023-11-08_at_19.27.45_2_myrain.jpg",
    title: "Balineras 2",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259342/WhatsApp_Image_2023-11-08_at_19.27.37_1_jtlszv.jpg",
    title: "Retenes",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259338/Rodillos_Para_Transmision_cj5ivm.jpg",
    title: "Rodillos_Para_Transmision_cj5ivm",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259466/Filtros_de_Aceite_zwrge1.jpg",
    title: "Filtros_de_Aceite_zwrge1",
    category: "filtros",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702355315/Filtros_de_Combustible_1_ecvuhm.jpg",
    title: "Filtros_de_Combustible_1_ecvuhm",
    category: "filtros",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702355315/Filtros_de_Aire_qkfczm.jpg",
    title: "Filtros_de_Aire_qkfczm",
    category: "filtros",
  },
  {
    src: "",
    title: "",
    category: "retenedores y balineras",
  },
];

let mostrarProductos = document.getElementById("elementos__elegidos");
let categoria = 0;
let categoriaNum = 0;

function definirCategoria(categoriaNum) {
  switch (categoriaNum) {
    case 0:
      categoria = "";
      return categoria;
      break;
    case 1:
      categoria = "motor";
      return categoria;
      break;
    case 2:
      categoria = "transmision";
      return categoria;
      break;
  }
}

for (let i = 0; i < images.length; i++) {
  let image = images[i];
  let imageElement = document.createElement("img");
  imageElement.src = image.src;

  let titleElement = document.createElement("p");
  titleElement.textContent = image.title;

  let imageContainer = document.createElement("div");
  imageContainer.appendChild(imageElement);
  imageContainer.appendChild(titleElement);

  mostrarProductos.appendChild(imageContainer);
}

function mostrarElementosPorCategoria(categoria = "") {
  mostrarProductos.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    let image = images[i];

    if (categoria === "" || image.category === categoria) {
      {
        let imageElement = document.createElement("img");
        imageElement.src = image.src;

        let titleElement = document.createElement("p");
        titleElement.textContent = image.title;

        let imageContainer = document.createElement("div");
        imageContainer.appendChild(imageElement);
        imageContainer.appendChild(titleElement);

        mostrarProductos.appendChild(imageContainer);
      }
    }
  }
}

let botonMotor = document.getElementById("eleccionMotor");
let botonTransmision = document.getElementById("eleccionTransmision");
let botonBalineras = document.getElementById("eleccionBalineras");
let botonFiltros = document.getElementById("eleccionFiltros");
let botonCaja = document.getElementById("eleccionCaja");
let botonAccesorios = document.getElementById("eleccionAccesorios");

botonMotor.addEventListener("click", function () {
  mostrarElementosPorCategoria("motor");
});

botonTransmision.addEventListener("click", function () {
  mostrarElementosPorCategoria("transmision");
});

botonBalineras.addEventListener("click", function () {
  mostrarElementosPorCategoria("retenedores y balineras");
});

botonFiltros.addEventListener("click", function () {
  mostrarElementosPorCategoria("filtros");
});

botonCaja.addEventListener("click", function () {
  mostrarElementosPorCategoria("caja");
});

botonAccesorios.addEventListener("click", function () {
  mostrarElementosPorCategoria("accesorios");
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
