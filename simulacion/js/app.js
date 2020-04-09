/*
function reloj() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var actualizacion = setTimeout('reloj()', 500);
    document.getElementById('hora').innerHTML= hora + " :";
    document.getElementById('minutos').innerHTML=  minutos + " :";
    document.getElementById('segundos').innerHTML=  segundos ;
    
}

*/


//btn iniciar, recojera todas las variables
$(function(){

    $('#btninicio').on("click",function() {
      
            //horas que jugara cada persona
         // var tiempoJugado = document.getElementById('tiempoJugado');
        var tiempoJugado = document.querySelector('#tiempoJugado').value;

        //lo multiplico por 60 por que seran horas x minutos
        //var tiempoJugado = tiempoJugado*60;
            
        //numero de terminales/maquinas que seran abiertas para jugadas
        var numeroDeMaquinas = document.querySelector('#numeroDeMaquinas').value;

          /* Variables generadas, estas (LIMPIAR)
          //Numero de loterías cuales jugará
          var loterias = document.querySelector('#loterias').value;    

          //jugadores que Habran
          var cantidaDeJugadores = document.querySelector('#cantidaDeJugadores').value;    

          //cantidad de quinielas
          var cantidadDeJugadas = document.querySelector('#cantidadDeJugadas').value;    

          //dinero que jugará cada quien
          var cantidadDeDinerojugado = document.querySelector('#cantidadDeDinerojugado').value;    
          */
        //Agregar Terminales
        agregar_terminales(numeroDeMaquinas);
        //agregaloterias
        addLoteria();
        //temporizador cuenta regresiva del tiempo
        crono(tiempoJugado);
        //reloj
        reloj();
        //Inserta en el campo de las jugadas
        insertJugadas();

    });


    //intento de detencion del reloj
    $('#btn-terminar').on("click", function(){
      clearInterval(reloj());
      console.log("pasaste por aqui");
      
    });


});
  


//Agregando en terminal
function agregar_terminales(numeroDeMaquinas){

    term=numeroDeMaquinas;
    
    for(let i=1; i<=term; i++){
        document.querySelector("#tablaterminales").insertRow(-1).innerHTML = `<tr><td>${i}</td><td>TERMINAL ${i}</td></tr>`;
    }
};



//agregando loterias
function addLoteria(){
   var loterias = [
        [0,"LR", "12:55"],                            //["Loteria Real"],       0
        [1,"GM", "02:55"],                            //["Ganamas"],            1 
        [2,"LN", "02:55"],                            //["LOTERIA NACIONAL"]    2
        [3,"LT", "5:55"],                              //["Loteca"],             3
        [4,"LE", "08:55"],                            //["LEIDSA"],             4
        [5,"LN", "09:00"]                            //["loteria Nacional"]     5

        ];

        //inserta en en html los datos de la loteria
    for(let i =0; i<loterias.length; i++){
      //genero el id de la tabla y lo vuelvo una variable
        var table=document.getElementById("cuerpoTabla");
        //row = fila metodo ".insetrow" agrega una fila
        var row=table.insertRow(0);
        //cell = celda, ".insertCell()" = insertar celda
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);     
        cell1.innerHTML=loterias[i][0];
        cell2.innerHTML=loterias[i][1];
        cell3.innerHTML=loterias[i][2];
     

        
    }
};


/// Cronometro ///
function crono(tiempoJugado){
  


  contador_s =60;
  contador_m = tiempoJugado ;
  s = document.getElementById("cronoSegundos");
  m = document.getElementById("cronoMinutos");
  //agrego para que desde el comienzo me añada los minutos al html desde el comienzo
  document.getElementById('cronoMinutos').innerHTML= contador_m;
  
  window.setInterval(
    function(){
        if(contador_s==0){
          contador_s=60;
          contador_m--;

        m.innerHTML =contador_m;

          if(contador_m==00){
            contador_m=60;
            contador_s=60;
          }
        }
        s.innerHTML =contador_s;
        contador_s = contador_s-1;
        
      }
    ,1000);
};

// crono reloj 2
function reloj()
{

  reloj_s =0;
  reloj_m =9;
  rs = document.getElementById("relojSeg");
  rm = document.getElementById("relojMin");
  window.setInterval(
      function(){
        if(reloj_s==60){
          reloj_s=0;
          reloj_m++;
        rm.innerHTML =reloj_m;

          if(reloj_m==21){
            reloj_m=8;
          }
        }
          rs.innerHTML = reloj_s;
          reloj_s++;
      }
    ,10);
};



//devuelve un numero aleatoroi con aleatorio(num)
function aleatorio(x) {
  return Math.floor(Math.random() * x);
}




//cuerpoInfoJugadas

    

function insertJugadas(){

  for(let i=1; i<=5; i++){
    document.querySelector("#cuerpoInfoJugadas").insertRow(0).innerHTML = `<tr><td>${i}</td><td>2</td></tr><tr><td>3</td><td>4</td></tr><tr><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td></tr>`;
  }

};