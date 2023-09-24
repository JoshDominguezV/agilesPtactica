// JavaScript para mostrar información al hacer clic en un enlace
function mostrarInformacion(seccion) {
    // Ocultar todas las secciones de contenido
    var secciones = document.querySelectorAll(".container section");
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";
    }

    // Mostrar la sección seleccionada
    var seccionSeleccionada = document.getElementById(seccion);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = "block";
    }
}
