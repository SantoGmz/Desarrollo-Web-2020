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

//botones
const btninicio = document.querySelector('#btninicio')

btninicio.addEventListener('click', ()=>{

    //horas que jugara cada persona
   // var tiempoJugado = document.getElementById('tiempoJugado');
    var tiempoJugado = document.querySelector('#tiempoJugado').value;

    //lo multiplico por 60 por que seran horas x minutos
    //var tiempoJugado = tiempoJugado*60;
        
    //numero de terminales/maquinas que seran abiertas para jugadas
    var numeroDeMaquinas = document.querySelector('#numeroDeMaquinas').value;

    //Numero de loterías cuales jugará
    var loterias = document.querySelector('#loterias').value;    

    //jugadores que Habran
    var cantidaDeJugadores = document.querySelector('#cantidaDeJugadores').value;    

    //cantidad de quinielas
    var cantidadDeJugadas = document.querySelector('#cantidadDeJugadas').value;    

    //dinero que jugará cada quien
    var cantidadDeDinerojugado = document.querySelector('#cantidadDeDinerojugado').value;    

    return console.log(tiempoJugado + numeroDeMaquinas + loterias + cantidaDeJugadores + cantidadDeJugadas + cantidadDeDinerojugado);

  });