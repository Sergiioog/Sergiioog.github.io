
/*Variables del programa*/
var icono_persona = document.querySelector('#icono_persona');
var icono_ordenador = document.querySelector('#icono_ordenador');
var icono_libro = document.querySelector('#icono_libro');
var icono_sobre = document.querySelector('#icono_sobre');

var icono_github = document.querySelector('#githubicon');
var icono_linkedin = document.querySelector('#linkedinicon');
var icono_twitter = document.querySelector('#twittericon');

var botonCurriculum = document.querySelector('#botonCurriculum');

var seccionIndividual = document.querySelector('#seccion_individual');
var seccionGrupal = document.querySelector('#seccion_grupal');

var radiobuttons = document.querySelectorAll('input[type=radio]');

var seccionEducacion = document.querySelector('#seccion_educ');
var seccionCertificados = document.querySelector('#seccion_certificados');

var radiobuttons = document.querySelectorAll('input[type=radio]');

function descargarCurriculum() {
    // URL del archivo PDF existente (sergio.pdf)
    var pdfUrl = 'assets/images/sergiogarcia.pdf';  // Reemplaza 'ruta/al/sergio.pdf' con la URL correcta del archivo PDF

    // Crear un enlace <a> para descargar el PDF
    var a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'sergio.pdf'; // Nombre del archivo PDF al descargar

    // Agregar el enlace al documento y hacer clic en él para iniciar la descarga
    document.body.appendChild(a);
    a.click();

    // Eliminar el enlace del documento después de la descarga
    document.body.removeChild(a);
}



/*Funciones manejadora de eventos de iconos*/ 
function subirBajarIconos () {
    icono_persona.addEventListener('mouseenter', function() {
        icono_persona.style.transition = 'transform 0.3s ease-in-out';
        icono_persona.style.transform = 'translateY(-3px)';
    });
    
    icono_persona.addEventListener('mouseleave', function() {
        icono_persona.style.transition = 'transform 0.3s ease-in-out';
        icono_persona.style.transform = 'translateY(0)';
    });
    
    
    icono_ordenador.addEventListener('mouseenter', function() {
        icono_ordenador.style.transition = 'transform 0.3s ease-in-out';
        icono_ordenador.style.transform = 'translateY(-3px)';
    });
    
    icono_ordenador.addEventListener('mouseleave', function() {
        icono_ordenador.style.transition = 'transform 0.3s ease-in-out';
        icono_ordenador.style.transform = 'translateY(0)';
    });

    icono_libro.addEventListener('mouseenter', function() {
        icono_libro.style.transition = 'transform 0.3s ease-in-out';
        icono_libro.style.transform = 'translateY(-3px)';
    });
    
    icono_libro.addEventListener('mouseleave', function() {
        icono_libro.style.transition = 'transform 0.3s ease-in-out';
        icono_libro.style.transform = 'translateY(0)';
    });

    icono_sobre.addEventListener('mouseenter', function() {
        icono_sobre.style.transition = 'transform 0.3s ease-in-out';
        icono_sobre.style.transform = 'translateY(-3px)';
    });
    
    icono_sobre.addEventListener('mouseleave', function() {
        icono_sobre.style.transition = 'transform 0.3s ease-in-out';
        icono_sobre.style.transform = 'translateY(0)';
    });

    icono_github.addEventListener('mouseenter', function() {
        icono_github.style.transition = 'transform 0.3s ease-in-out';
        icono_github.style.transform = 'translateY(-3px)';
    });
    
    icono_github.addEventListener('mouseleave', function() {
        icono_github.style.transition = 'transform 0.3s ease-in-out';
        icono_github.style.transform = 'translateY(0)';
    });

    icono_linkedin.addEventListener('mouseenter', function() {
        icono_linkedin.style.transition = 'transform 0.3s ease-in-out';
        icono_linkedin.style.transform = 'translateY(-3px)';
    });
    
    icono_linkedin.addEventListener('mouseleave', function() {
        icono_linkedin.style.transition = 'transform 0.3s ease-in-out';
        icono_linkedin.style.transform = 'translateY(0)';
    });

    icono_twitter.addEventListener('mouseenter', function() {
        icono_twitter.style.transition = 'transform 0.3s ease-in-out';
        icono_twitter.style.transform = 'translateY(-3px)';
    });
    
    icono_twitter.addEventListener('mouseleave', function() {
        icono_twitter.style.transition = 'transform 0.3s ease-in-out';
        icono_twitter.style.transform = 'translateY(0)';
    });

  

    
    
}





function seleccionBotonIndividual(evento) {
    var opcionSeleccionada = evento.target.value;

    if (opcionSeleccionada === 'individual') {
        seccionIndividual.style.display = 'block';
        seccionGrupal.style.display = 'none';
    } else {
        seccionIndividual.style.display = 'none';
        seccionGrupal.style.display = 'block';
    }
}

for (var i = 0; i < radiobuttons.length; i++) {
    radiobuttons[i].addEventListener('click', seleccionBotonIndividual);
}

function seleccionBotonEducacion(evento) {
    var opcionSeleccionada = evento.target.value;

    if (opcionSeleccionada === 'cursos') {
        seccionEducacion.style.display = 'block';
        seccionCertificados.style.display = 'none';
    } else {
        seccionEducacion.style.display = 'none';
        seccionCertificados.style.display = 'block';
    }
}

for (var i = 0; i < radiobuttons.length; i++) {
    radiobuttons[i].addEventListener('click', seleccionBotonEducacion);
}

document.addEventListener('DOMContentLoaded', function() {
    subirBajarIconos();
});


