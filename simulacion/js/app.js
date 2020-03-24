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

//horas que jugara cada persona
var tiempoJugado = document.getElementById('tiempoJugado');
//lo multiplico por 60 por que seran horas x minutos
var tiempoJugado = tiempoJugado*60;

//numero de terminales/maquinas que seran abiertas para jugadas
var numeroDeMaquinas = document.getElementById('numeroDeMaquinas');

//Numero de loterías cuales jugará
var loterias = document.getElementById('loterias');

//jugadores que Habran
var cantidaDeJugadores = document.getElementById('cantidaDeJugadores');

//cantidad de quinielas
var cantidadDeJugadas = document.getElementById('cantidadDeJugadas');

//dinero que jugará cada quien
var cantidadDeDinerojugado = document.getElementById('cantidadDeDinerojugado');





