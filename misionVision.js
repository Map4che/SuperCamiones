document.addEventListener("DOMContentLoaded", function () {
  let quienesSomos = [
    `Somos distribuidores de repuestos autorizados
    para la marca Volkswagen buses y camiones.`,

    `En el año 2004, gracias a los conocimientos y la práctica 
    adquirida durante 20 años, surgió la idea de ser 
    independiente y dar apertura a mi propio almacén de repuestos así que decidí el 1 de marzo de ese año pasar mi carta de renuncia al puesto de asesor de repuestos en el que estuve durante 14 años en el grupo FTC. Con mucho temor de esta nueva etapa al enfrentarme a la realidad 
    empresarial de la cual ya haría parte me cuestionaba si 
    realmente funcionaría o peor aún si sería capaz de salir 
    adelante con mi negocio. El 2 de marzo del 2004, ya desempleado pero con el 
    maravilloso sueño de convertirme en un empresario 
    reconocido a nivel nacional, tomé en renta un local de 15 mts2 , propiedad del Señor Manuel Morales en el barrio 
    Valladolid.`,
    `Luego de dos años de arduo trabajo siempre de manera positiva, grandes compañías se fidelizaron con nosotros. 
    Fue así que en el año 2006 adquirimos nuestras propias 
    instalaciones promoviendo así un crecimiento muy 
    importante. En el año 2009 iniciamos con la distribución autorizada de repuestos originales Volkswagen para camiones y buses, de la que aún gozamos el privilegio, esto de la mano con la multinacional e importadores Porsche Holding en Colombia, llevando así soluciones inmediatas a nivel nacional.
    Gracias al apoyo de mi esposa y de nuestros hijos hoy 
    SUPERCAMIONES SAS es reconocida a nivel nacional como una de las mejores empresas en servicio al cliente y en venta directa Volkswagen.`,

    `German Franco Barbosa`,
    `Luz Mary Bello Castillo`,
  ];

  let historyElement = document.getElementById("historia-quienesSomos");

  for (i = 0; i < quienesSomos.length; i++) {
    let history = document.createElement("p");
    history.textContent = quienesSomos[i];
    let space = document.createElement("br");
    historyElement.appendChild(history);
    historyElement.appendChild(space);
  }
});
