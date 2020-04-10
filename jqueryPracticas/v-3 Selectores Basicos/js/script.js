$(document).ready(function () {

   /* $('#parrafo').text("Parrafo cambiado");
      $('#parrafo').css({'color':'red'});

      $('.titulo').text("Titulo Cambiado.");
      $('.titulo').css({'color':'red'});

      //$('div').text("Hola, ¿Como estas?");
   
      
         txt="";
         
         var nombres = new Array("Santos","Karla","Junior","Cristal","Robert","Cristo","Andres","Yunior","Alex","Mojon");
         var apellidos = new Array("Gomez","Garcia","Contreras","Espinal","Cruz","Smith","Gonzales","Muñoz","Alfan","Duro");
         var edades = new Array(18,16,25,35,25,34,16,25,36,15,)
         
         for(a =0; a<nombres.length; a++){
               
               txt +='<tr>';
               txt +='<th scope="row">'+a+'</th>';
               txt +='<td>'+nombres[a]+'</td>';
               txt +='<td>'+apellidos[a]+'</td>';
               txt +='<td>'+edades[a]+'</td>';
               txt +='</tr>';

         };
         $('#tabla').html(txt);

   */
   $('.titulo').css({
      'color': 'red'
   });

   $('.titulo').html("Test");


   $('#parrafo').html("Parrafo cambiado para hacer pruebas.");
   // $('$parrafo').css({'text-aling':'center'});


   var animales = new Array(0);
   var colores = new Array(0);
   var duenos = new Array(0);

   agregar(animales, colores, duenos);

   //btn click en el boton
   $('#add').on("click", agregar);


   // $('#input-animal').on("change", function(){
   //    console.log("Dentro de la funcion");

   //    //     var
   //    animal= document.querySelector('#input-animal').value;
   // color= document.querySelector('#input-color').value;
   // dueno= document.querySelector('#input-dueno').value;

   //    if(animal === "s" /*|| color =="" || dueno == ""*/){

   //       console.log("Paso por la condicional si");
   //       $('#input-animal').addClass('error');
   //       $('#input-color').addClass('error');
   //       $('#input-dueno').addClass('error');
   //    }else{

   //       console.log("Paso por la condicional no");


   //       $('#input-animal').removeClass('error');
   //       $('#input-color').removeClass('error');
   //       $('#input-dueno').removeClass('error')
   //    }
   // })



   //Funcion que agrega todo
   function agregar() {
      animal = document.querySelector('#input-animal').value;
      color = document.querySelector('#input-color').value;
      dueno = document.querySelector('#input-dueno').value;

      // console.log("Consola funcionando");

      animales.push(animal);
      colores.push(color);
      duenos.push(dueno);


      txt = "";

      for (let a = 1; a < animales.length; a++) {
         txt += animales;
         txt += '<tr>';
         txt += '<th scope="row">' + a + '</th>';
         txt += '<td>' + animales[a] + '</td>';
         txt += '<td>' + colores[a] + '</td>';
         txt += '<td>' + duenos[a] + '</td>';
         txt += '</tr>';
      }
      $('#input-animal').val('');
      $('#input-color').val('');
      $('#input-dueno').val('');
      $('#tabla').html(txt);
   }
});