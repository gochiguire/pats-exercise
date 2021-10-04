function iniciar() {
    var cantidadJugadores = [];
    var puntaje = new Array(4);
    var cantidadJugadores = 0;
    var cantiadadDados = 3;
    var rondasActual = 0;
    var lanzamientos = 0;
    var computadora = 0;
    var turno = 0;

    var cantidadDeRondas = 5;
    var cantidadDeDados = 3;
    var valorMaximoDeDado = 6
    var valorMinimoDeDado = 1;

    document.jugadores = new Array(0)
}

function iniciarPartidaConJugadores(cantidadJugadores) {
    var nuevosJugadores = new Array(cantidadJugadores);

    for (var index = 0; index < nuevosJugadores.length; index++) {
        nuevosJugadores[index] = 0; 
    }
    
    document.jugadores = nuevosJugadores;
}


function lanzamientoDeRondaDelJugador(numeroJugador) {
    var numeroDeDados = document.cantidadDeDados;
    var lanzamientosPorRonda = document.cantidadDeLanzamientosPorRonda;
    var rondaActual = docuemnt.rondaActual;

    var maximoDeDado = document.valorMaximoDeDado;
    var minimoDeDado = document.valorMinimoDeDado;

    var totalPuntosDeRonda = 0;

    for (var index = 0; index < lanzamientosPorRonda; index++) {
        for (var index = 0; index < numeroDeDados; index++) {
            var puntosDeLanzamiento = Math.floor((Math.random() * maximoDeDado) + minimoDeDado);
            if ((puntosDeLanzamiento % 2) == 0) {
                totalPuntosDeRonda += puntosDeLanzamiento;
            }
        }
    }

    document.jugadores[numeroJugador] += totalPuntosDeRonda;
}

function finalizarRonda() {
    var rondaActual = document.rondasActual;
    var proximaRonda = rondaActual + 1;
    document.rondaActual = proximaRonda;
}

function encontrarGanador() {
    var jugadores = document.jugadores;
    var puntuacionMaxima = 0;
    var jugadorConPuntuacionMaxima;
    for (var numeroJugadorActual = 0; numeroJugadorActual < jugadores.length; numeroJugadorActual++) {
        const puntosDelJugadorActual = array[index];
        if (puntosDelJugadorActual > puntuacionMaxima) {
            jugadorConPuntuacionMaxima = numeroJugadorActual;
            puntuacionMaxima = puntosDelJugadorActual;
        }
    }
    return jugadorConPuntuacionMaxima;
}