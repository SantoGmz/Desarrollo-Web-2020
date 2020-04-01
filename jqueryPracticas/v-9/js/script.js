$(function(){

    if( $('#parrafo').hasClass("ocultar")){
        alert("El parrafo se estaba ocultando");
        $('#parrafo').show(3500);
        $('#parrafo').removeClass("ocultar");

    }else{
        alert("El parrafo estaba visible");
        $('#parrafo').hide(5000);
        
    }
})