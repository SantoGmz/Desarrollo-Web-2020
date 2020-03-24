function reloj() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var actualizacion = setTimeout('reloj()', 500);

    document.getElementById('hora').innerHTML= hora + " :";
    document.getElementById('minutos').innerHTML=  minutos + " :";
    document.getElementById('segundos').innerHTML=  segundos;

}


var tiempoJugado = document.getElementById('tiempoJugado');

var numeroDeMaquinas = document.getElementById('numeroDeMaquinas');

var loterias = document.getElementById('loterias');

var cantidaDeJugadores = document.getElementById('cantidaDeJugadores');

var cantidadDeJugadas = document.getElementById('cantidadDeJugadas');

var cantidadDeDinerojugado = document.getElementById('cantidadDeDinerojugado');





