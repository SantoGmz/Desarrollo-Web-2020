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

        //Numero de loterías cuales jugará
        var loterias = document.querySelector('#loterias').value;    

        //jugadores que Habran
        var cantidaDeJugadores = document.querySelector('#cantidaDeJugadores').value;    

        //cantidad de quinielas
        var cantidadDeJugadas = document.querySelector('#cantidadDeJugadas').value;    

        //dinero que jugará cada quien
        var cantidadDeDinerojugado = document.querySelector('#cantidadDeDinerojugado').value;    

        //Agregar Terminales
        agregar_terminales(numeroDeMaquinas);
        addLoteria();
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
    loterias = [
        [1,"LR", "12:55"],                            //["Loteria Real"],       0
        [2,"GM", "02:55"],                            //["Ganamas"],            1 
        [3,"LN", "02:55"],                            //["LOTERIA NACIONAL"]    2
        [4,"LT", "5:55"],                              //["Loteca"],             3
        [5,"LE", "08:55"],                            //["LEIDSA"],             4
        [6,"LN", "09:00"]                            //["loteria Nacional"]     5

        ];

        

    for(let i =0; i<=7; i++){
        var table=document.getElementById("cuerpoTabla");
        var row=table.insertRow(0);
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);
        
        cell1.innerHTML=loterias[i][0];
        cell2.innerHTML=loterias[i][1];
        cell3.innerHTML=loterias[i][2];
     

        
    }




/*
    for(let i=1; i<=3; i++){
        document.querySelector("#tabloterias").insertRow(0).innerHTML = `<tr><td>${i}</td><td>NombreLot ${i}</td></tr>`;
    }*/
};


  