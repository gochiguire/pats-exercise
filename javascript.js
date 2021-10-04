function iniciar() {
    var cantidadDeRondas = 5;
    var cantidadDeDados = 3;
    var valorMaximoDeDado = 6
    var valorMinimoDeDado = 1;

    document.cantidadDeRondas = cantidadDeRondas;
    document.cantidadDeDados = cantidadDeDados;
    document.valorMaximoDeDado = valorMaximoDeDado;
    document.valorMinimoDeDado = valorMinimoDeDado;
}

function iniciarPartidaConJugadores(cantidadJugadores) {
    var nuevosJugadores = new Array(cantidadJugadores);

    for (var index = 0; index < nuevosJugadores.length; index++) {
        nuevosJugadores[index] = 0; 
    }
    
    document.jugadores = nuevosJugadores;
    document.rondaActual = 0;
}


function lanzamientoDeRondaDelJugador(numeroJugador) {
    var numeroDeDados = document.cantidadDeDados;
    var lanzamientosPorRonda = document.cantidadDeLanzamientosPorRonda;
    var rondaActual = document.rondaActual;

    console.log(rondaActual)
    console.log(lanzamientosPorRonda)
    
    var totalPuntosDeRonda = 0;

    for (var lanzamiento = 0; lanzamiento < lanzamientosPorRonda; lanzamiento++) {
        for (var dado = 0; dado < numeroDeDados; dado++) {
            var puntosDeLanzamiento = Math.floor((Math.random() * 6) + 1);
            if ((puntosDeLanzamiento % 2) == 0) {
                totalPuntosDeRonda += puntosDeLanzamiento;
            }
        }
    }
  
    console.log(totalPuntosDeRonda);

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
