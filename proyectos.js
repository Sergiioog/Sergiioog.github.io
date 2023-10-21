
var seccionIndividual = document.querySelector('#seccion_individual');
var seccionGrupal = document.querySelector('#seccion_grupal');

var radiobuttons = document.querySelectorAll('input[type=radio]');


function seleccionBoton(evento) {
    var opcionSeleccionada = evento.target.value;

    if (opcionSeleccionada === 'individual') {
        console.log("HOLA");
        seccionIndividual.style.display = 'block';
        seccionGrupal.style.display = 'none';
    } else {
        seccionIndividual.style.display = 'none';
        seccionGrupal.style.display = 'block';
    }
}

for (var i = 0  ; i < radiobuttons.length ; i++) {
    radiobuttons[i].addEventListener('click', seleccionBoton);

}
