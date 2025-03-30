// Mostrar secciones de preferencias
let cuentaNav = document.getElementById("cuenta");
let visualNav = document.getElementById("visual");
let cuentaCont = document.getElementById("cuenta-contenido");
let visualCont = document.getElementById("visual-contenido");

cuentaNav.addEventListener("click", function () {
    cuentaCont.style.display = "block";
    visualCont.style.display = "none";
});

visualNav.addEventListener("click", function () {
    cuentaCont.style.display = "none";
    visualCont.style.display = "block";
});

// Preferencias de visualización
let color = document.getElementById("color");
let colorDeFondo = "";
const button = document.getElementById("button");

function cambiarColor() {
    color.addEventListener("input", function () {
        colorDeFondo = color.value;
        localStorage.setItem("colorDeFondo", colorDeFondo);
    });
    return colorDeFondo;
}

button.addEventListener("click", function () {
    document.body.style.background = cambiarColor();
});

window.addEventListener("load", function () {
    let colorGuardado = localStorage.getItem("colorDeFondo");
    document.body.style.background = colorGuardado;
});
