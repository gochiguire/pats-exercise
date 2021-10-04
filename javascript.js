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

function jugarRonda() {
    var jugadores = document.jugadores;
    for (var numeroJugador = 0; numeroJugador < jugadores.length; numeroJugador++) {
        lanzamientoDeRondaDelJugador(numeroJugador)
    }
}

function lanzamientoDeRondaDelJugador(numeroJugador) {
    var numeroDeDados = document.cantidadDeDados;
    var lanzamientos = document.cantidadDeLanzamientosPorRonda;

    var maximoDeDado = document.valorMaximoDeDado;
    var minimoDeDado = document.valorMinimoDeDado;

    var totalPuntosDeRonda = 0;

    for (var index = 0; index < lanzamientos; index++) {
        for (var index = 0; index < numeroDeDados; index++) {
            var puntosDeLanzamiento = Math.random() * (maximoDeDado - minimoDeDado) + minimoDeDado;
            totalPuntosDeRonda += puntosDeLanzamiento;
        }
    }

    document.jugadores[numeroJugador] += totalPuntosDeRonda;
}

function encontrarGanador() {
    var jugadores = document.jugadores;
    var puntuacionMaxima = 0;
    var jugadorConPuntuacionMaxima;
    for (var numeroJugadorActual = 0; numeroJugadorActual < jugadores.length; numeroJugadorActual++) {
        const puntosDelJugadorActual = array[index];
        if (puntosDelJugadorActual > puntuacionMaxima) {
            jugadorConPuntuacionMaxima = numeroJugadorActual;
        }
    }
    return jugadorConPuntuacionMaxima;
}