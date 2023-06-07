let imagenes = ['Imagenes/344846287_3498258070454003_984927644363278518_n.jpg', 'Imagenes/Aliados.jpg', 'Imagenes/Mensajero.jpg']; // Array de imágenes
let index = 0; // Índice de la imagen actual

// Función para cambiar la imagen del carrusel
function cambiarImagen() {
  let imagenElement = document.getElementById('imagen-principal');
  imagenElement.src = imagenes[index]; // Cambiar la imagen mostrada

  index++; // Incrementar el índice

  // Reiniciar el índice si llega al final del array
  if (index === imagenes.length) {
    index = 0;
  }
}

// Iniciar el carrusel
function iniciarCarrusel() {
  cambiarImagen(); // Cambiar la imagen inicial

  // Establecer un intervalo para cambiar la imagen cada 5 segundos (5000 ms)
  setInterval(cambiarImagen, 5000);
}

// Iniciar el carrusel cuando se carga la página
window.addEventListener('load', iniciarCarrusel);

// Función para cambiar a la imagen anterior
function cambiarAnterior() {
  index--; // Decrementar el índice

  // Ciclo circular
  if (index < 0) {
    index = imagenes.length - 1;
  }

  cambiarImagen(); // Cambiar la imagen
}

// Función para cambiar a la siguiente imagen
function cambiarSiguiente() {
  index++; // Incrementar el índice

  // Ciclo circular
  if (index === imagenes.length) {
    index = 0;
  }

  cambiarImagen(); // Cambiar la imagen
}

// Agregar eventos de clic a los botones
document.getElementById('anterior').addEventListener('click', cambiarAnterior);
document.getElementById('siguiente').addEventListener('click', cambiarSiguiente);
