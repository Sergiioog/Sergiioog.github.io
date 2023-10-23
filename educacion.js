var seccionEducacion = document.querySelector('#seccion_educ');
var seccionCertificados = document.querySelector('#seccion_certificados');

var radiobuttons = document.querySelectorAll('input[type=radio]');


function seleccionBoton(evento) {
    var opcionSeleccionada = evento.target.value;

    if (opcionSeleccionada === 'cursos') {
        seccionEducacion.style.display = 'block';
        seccionCertificados.style.display = 'none';
    } else {
        seccionEducacion.style.display = 'none';
        seccionCertificados.style.display = 'block';
    }
}

for (var i = 0  ; i < radiobuttons.length ; i++) {
    radiobuttons[i].addEventListener('click', seleccionBoton);

}