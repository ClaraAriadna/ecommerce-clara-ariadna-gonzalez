// Definimos la constante imagen
const imagen = document.getElementById("img");

// Definimos el arreglo de imágenes
let imagenes = new Array("fanal.jpg", "piramide.jpeg", "terrario.jpg", "velador.jpg");

// Definimos una función para cargar una imagen en la constante imagen
function cargarImagen(img) {
    imagen.setAttribute("src", "media/img/"+img);
}

// Pendiente...
