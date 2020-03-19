function reloj() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var actualizacion = setTimeout('reloj()', 500);
    document.getElementById('datosHora').innerHTML= hora+ " : " + minutos+ " : " + segundos;
}



