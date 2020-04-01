$(function(){

  if (  $('#parrafo').hasClass('saludo')) {
        alert("si tiene la clase saludo");
        $('#parrafo').removeClass('saludo');
        
    }else{
        alert("No tiene la clase saludo");
        $('p').addClass('saludo');
    }
});     