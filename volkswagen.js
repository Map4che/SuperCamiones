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

  let imagesVolkswagen = [
    {
      src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711909521/1_Motor_f7hly7.png",
      category: "motor",
    },
    {
      src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711909521/1_Transmision_hbly7x.png",
      category: "transmision",
    },
    {
      src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711909521/1_Caja_zaugjf.png",
      category: "caja",
    },
    {
      src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711909521/1_Retenedores_y_balineras_ewqrr2.png",
      category: "retenedores y balineras",
    },
    {
      src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711909521/1_Accesorios_xdb8bg.png",
      category: "accesorios",
    },
    {
      src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1711909521/1_Filtros_wnyrmk.png",
      category: "filtros",
    },
  ];

  let indexV1 = 0;
  let indexV2 = 1;
  let indexV3 = 2;

  const volkswagenPartOption1 = document.getElementById("imagen-volkswagen1");
  const volkswagenPartOption2 = document.getElementById("imagen-volkswagen2");
  const volkswagenPartOption3 = document.getElementById("imagen-volkswagen3");

  function changeImage() {
    volkswagenPartOption1.style.backgroundImage = `url(${imagesVolkswagen[indexV1].src})`;
    volkswagenPartOption2.style.backgroundImage = `url(${imagesVolkswagen[indexV2].src})`;
    volkswagenPartOption3.style.backgroundImage = `url(${imagesVolkswagen[indexV3].src})`;
  }

  function changePrevious() {
    indexV1--;
    indexV2--;
    indexV3--;
    if (indexV1 < 0) {
      indexV1 = imagesVolkswagen.length - 1;
    }
    if (indexV2 < 0) {
      indexV2 = imagesVolkswagen.length - 1;
    }
    if (indexV3 < 0) {
      indexV3 = imagesVolkswagen.length - 1;
    }
    changeImage();
  }

  function changeNext() {
    indexV1++;
    indexV2++;
    indexV3++;
    if (indexV1 >= imagesVolkswagen.length) {
      indexV1 = 0;
    }
    if (indexV2 >= imagesVolkswagen.length) {
      indexV2 = 0;
    }
    if (indexV3 >= imagesVolkswagen.length) {
      indexV3 = 0;
    }
    changeImage();
  }

  document
    .getElementById("previous-volkswagen")
    .addEventListener("click", changePrevious);

  document
    .getElementById("next-volkswagen")
    .addEventListener("click", changeNext);

  let firstIcon = new Image();
  firstIcon.onload = function () {
    changeImage();
    setInterval(changeNext, 10000000);
  };
  firstIcon.src = imagesVolkswagen[0].src;

  const selectOption1 = document.getElementById("imagen-volkswagen1");
  const selectOption2 = document.getElementById("imagen-volkswagen2");
  const selectOption3 = document.getElementById("imagen-volkswagen3");

  selectOption1.addEventListener("click", () => {
    let option = selectOption1.style.backgroundImage;
    option = option.replace('url("', "").replace('")', "");
    imagesVolkswagen.map((data) => {
      if (option == data.src) {
        mostrarElementosPorCategoria(data.category);
      }
    });
  });
  selectOption2.addEventListener("click", () => {
    let option = selectOption2.style.backgroundImage;
    option = option.replace('url("', "").replace('")', "");
    imagesVolkswagen.map((data) => {
      if (option == data.src) {
        mostrarElementosPorCategoria(data.category);
      }
    });
  });
  selectOption3.addEventListener("click", () => {
    let option = selectOption3.style.backgroundImage;
    option = option.replace('url("', "").replace('")', "");
    imagesVolkswagen.map((data) => {
      if (option == data.src) {
        mostrarElementosPorCategoria(data.category);
      }
    });
  });
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
    title: "Rodillos para ruedas",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259375/Retenes_Transmision_fswsbm.jpg",
    title: "Retenes transmision",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259371/Retenes_Cajas_De_Cambios_yxdcav.jpg",
    title: "Retenes cajas de cambios",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259367/Rodillos_Para_Cajas_y56swd.jpg",
    title: "Rodillos para cajas",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259363/Retenes_Ruedas_iqopbj.jpg",
    title: "Retenes ruedas",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259358/Balineras_Para_TODO_gqbfot.jpg",
    title: "Balineras para todo",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259354/Balineras_Para_Clutch_a084qp.jpg",
    title: "Balineras para clutch",
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
    title: "Rodillos para transmision",
    category: "retenedores y balineras",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702259466/Filtros_de_Aceite_zwrge1.jpg",
    title: "Filtros de aceite",
    category: "filtros",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702355315/Filtros_de_Combustible_1_ecvuhm.jpg",
    title: "Filtros de combustible 1",
    category: "filtros",
  },
  {
    src: "https://res.cloudinary.com/dx7s6xwo7/image/upload/v1702355315/Filtros_de_Aire_qkfczm.jpg",
    title: "Filtros de aire",
    category: "filtros",
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
  imageElement.className = "img-productos__list";

  mostrarProductos.appendChild(imageContainer);
  imageContainer.className = "container-product__list";
}

function mostrarElementosPorCategoria(categoria = "") {
  mostrarProductos.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    let image = images[i];

    if (categoria === "" || image.category === categoria) {
      {
        let imageElement = document.createElement("img");
        imageElement.src = image.src;
        imageElement.className = "img-productos__volkswagen";

        let titleElement = document.createElement("p");
        titleElement.textContent = image.title;

        let imageContainer = document.createElement("div");
        imageContainer.appendChild(imageElement);
        imageContainer.appendChild(titleElement);

        mostrarProductos.appendChild(imageContainer);
        imageContainer.className = "container-product__list";
      }
    }
  }
}

const botonVolkswagen = document.getElementById("botonVolkswagen");
let botonMotor = document.getElementById("eleccionMotor");
let botonTransmision = document.getElementById("eleccionTransmision");
let botonBalineras = document.getElementById("eleccionBalineras");
let botonFiltros = document.getElementById("eleccionFiltros");
let botonCaja = document.getElementById("eleccionCaja");
let botonAccesorios = document.getElementById("eleccionAccesorios");

botonVolkswagen.addEventListener("click", function () {
  mostrarElementosPorCategoria("");
});

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
