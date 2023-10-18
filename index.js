
/*Variables del programa*/
var icono_persona = document.querySelector('#icono_persona');
var icono_ordenador = document.querySelector('#icono_ordenador');
var icono_libro = document.querySelector('#icono_libro');
var icono_sobre = document.querySelector('#icono_sobre');
var icono_github = document.querySelector('#gith');
var icono_linkedin = document.querySelector('#linked');
var icono_twitter = document.querySelector('#twt');





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

/*Llamada a las funciones*/
subirBajarIconos();