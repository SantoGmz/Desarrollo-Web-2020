/*
//1ra forma de usar el metodo ready
$(function(){
    alert("Hola.");
});

//2da forma de usar el metodo ready
$().ready(function(){
    alert("Segunda forma.");
});


3ra forma
$(document).ready(function(){
    
    $('.titulo').text("Cambiado");
});
*/

//4ta forma y la mas recomendada, esta hace que el documento este totalmente cargado.
$(function(){
alert('La pagina esta totalmente cargada');
});