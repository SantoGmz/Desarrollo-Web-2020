$(function () {
    
    $('#tablaDetalles').hide();
    $('#clear').hide();





    //Generar numero aleatorio de 4 digitos
    function aleatorio(min, max) {
        return Math.round(Math.random() * (max - min) + min);

    };

    //btn-generar numeros aleatorios
    $('#generarNumeros').on("click", function () {
        restablecerColor();
        $('#tablaDetalles').hide('slow');
        document.getElementById('cp1').value = aleatorio(1000, 9999);
        document.getElementById('cp2').value = aleatorio(1000, 9999);
        document.getElementById('cp3').value = aleatorio(1000, 9999);
        document.getElementById('cp4').value = aleatorio(1000, 9999);
        $('#clear').show(500);
    });

    //btn limpiar por si lo llego a poner
    $('#clear').on("click", limpiar);

    //funcnion de limpiar
    function limpiar() {        
        document.getElementById('cp1').value = "";
        document.getElementById('cp2').value = "";
        document.getElementById('cp3').value = "";
        document.getElementById('cp4').value = "";
        $('#tablaDetalles').hide('slow');
        $('#clear').hide('slow');
        restablecerColor();     

    };

    //REstablece color de los imput
    function restablecerColor(){
        $('#cp1').css({'border':'1px solid #C2BEBE'});
        $('#cp2').css({'border':'1px solid #C2BEBE'});
        $('#cp3').css({'border':'1px solid #C2BEBE'});
        $('#cp4').css({'border':'1px solid #C2BEBE'});
    };

    //btn-crear
    $('#crear').on("click", function () {
        restablecerColor();

    $('#tablaDetalles').show(500);

        //agragando los campos a las variables
        var input1 = document.getElementById('cp1').value;
        var input2 = document.getElementById('cp2').value;
        var input3 = document.getElementById('cp3').value;
        var input4 = document.getElementById('cp4').value;

        //variables respuestas  
        //Respuesta 1
        //Sacando y dividiendo las variables pedazos por pedasos
        var input1r1 = parseInt(input1[0]);
        var input1r2 = parseInt(input1[1]);     
            // var input1test1 = input1.substr(0,2);
            // console.log(input1test1);
            // INTENTO DE REDUCIR CODIGO
        var input1r3 = parseInt(input1[2]);
        var input1r4 = parseInt(input1[3]);
        //aqui divido en pares y sumo las variables
        var input1Suma1 = input1r1 + input1r2;
        var input1Suma2 = input1r3 + input1r4;
        //convirtiendo las variables ne resultado final
        var input1resultado = `${input1Suma1}${input1Suma2}`;

        //Respuesta 2
        //Sacando y dividiendo las variables pedazos por pedasos
        var input2r1 = parseInt(input2[0]);
        var input2r2 = parseInt(input2[1]);
        var input2r3 = parseInt(input2[2]);
        var input2r4 = parseInt(input2[3]);
        //aqui divido en pares y sumo las variables
        var input2Suma1 = input2r1 + input2r2;
        var input2Suma2 = input2r3 + input2r4;
        //convirtiendo las variables ne resultado final
        var input2resultado = `${input2Suma1}${input2Suma2}`;

        //Respuesta 3
        //Sacando y dividiendo las variables pedazos por pedasos
        var input3r1 = parseInt(input3[0]);
        var input3r2 = parseInt(input3[1]);
        var input3r3 = parseInt(input3[2]);
        var input3r4 = parseInt(input3[3]);
        //aqui divido en pares y sumo las variables
        var input3Suma1 = input3r1 + input3r2;
        var input3Suma2 = input3r3 + input3r4;
        //convirtiendo las variables ne resultado final
        var input3resultado = `${input3Suma1}${input3Suma2}`;

        //Respuesta 4
        //Sacando y dividiendo las variables pedazos por pedasos
        var input4r1 = parseInt(input4[0]);
        var input4r2 = parseInt(input4[1]);
        var input4r3 = parseInt(input4[2]);
        var input4r4 = parseInt(input4[3]);
        //aqui divido en pares y sumo las variables
        var input4Suma1 = input4r1 + input4r2;
        var input4Suma2 = input4r3 + input4r4;
        //convirtiendo las variables ne resultado final
        var input4resultado = `${input4Suma1}${input4Suma2}`;

        //console.log(input1);
        //esta condicion comprueva que todos los imput tengan los 4 digitos, todos
        if (input1.length == 4 && input2.length == 4 && input3.length == 4 && input4.length == 4) {
            //Creo un array con las variables
            var operaciones = new Array(input1, input2, input3, input4)

            //array de respuestas
            var respuestas = new Array(input1resultado, input2resultado, input3resultado, input4resultado);

            //Agregando la variable en un campo oculto, Este campo guarda para yo poder generarlo mas tarde
            document.getElementById('Otnas').value = input4resultado;

            //aqui creo la variable en 0 sin nada osea limpia
            var txt = '';
            //esto añade todo a la variable con += que suma lo nuevo que se le introduco con lo que tiene

            for (let o = 0; o < 3; o++) {
                txt += '<tr>';
                txt += '<th scope="row">' + o + '</th>';
                txt += '<td>' + operaciones[o] + '</td>';
                txt += '<td>' + respuestas[o] + '</td>';
                txt += ' </tr>';
            };

            //ultima fila que tiene que adivinar el usuario
            txt += '<tr>';
            txt += '<th scope="row">' + 3 + '</th>';
            txt += '<td>' + operaciones[3] + '</td>';
            txt += '<td><input type="text" id="iptAdivinar" placeholder="Num" class="form-control"></td>';
            // txt += '<td id="oculto">' + respuestas[3] + '</td>';
            txt += ' </tr>';

            // txt += ' <tr>';
            // txt += '<td colspan="3"><button type="button" id="btnAdivinar" class="btn btn-secondary btn-lg btn-block">Adivinar</button></td>';

            // txt += ' </tr>';

            // txt += ' <tr>';
            // txt += '<td rowspan="3"><button type="button" class="btn btn-secondary btn-sm">Small button</button></td>';

            // txt += ' </tr>';

            //Generacion del id al cual se le agregará la variable
            document.getElementById('cuerpoTabla').innerHTML = txt;


            //errores de input   
        } if(input1.length != 4){
            // else que es de lo contrario, osea el codigo que no se ejecutará si la condicion no es la que se pide
            $('#tablaDetalles').hide();
            $('#cp1').css({'border':'1px solid red'});
        }if(input2.length != 4){
            // else que es de lo contrario, osea el codigo que no se ejecutará si la condicion no es la que se pide
            $('#tablaDetalles').hide();
            $('#cp2').css({'border':'1px solid red'});
        }if(input3.length != 4){
            // else que es de lo contrario, osea el codigo que no se ejecutará si la condicion no es la que se pide
            $('#tablaDetalles').hide();
            $('#cp3').css({'border':'1px solid red'});
        }if(input4.length != 4){
            // else que es de lo contrario, osea el codigo que no se ejecutará si la condicion no es la que se pide
            $('#tablaDetalles').hide();
            $('#cp4').css({'border':'1px solid red'});
        }      
    });


            
            //btn-adivinar
    $('#btnAdivinar').on("click", function() {
        var resultado = document.getElementById('Otnas').value;
        resultado = parseInt(resultado);
        //el input 
        
        var inputadivinar = document.getElementById('iptAdivinar').value;
        var respuesta= parseInt(inputadivinar);
        // console.log(respuesta);
        if(respuesta== resultado){
            console.log("correcto");
            audio(1)
            $('#iptAdivinar').css({'border':'1px solid green'});


        }else{
            console.log("incorrecto");
            audio(2)
            $('#iptAdivinar').css({'border':'1px solid red'});

        }




        
        // var conteo = respuesta.length;

    });
///Audio agregado, esta funcion se dará cuenta si es correcto o incorrecto.
    function audio(x){
        if(x==1){
            audi= new Audio('audio/correcto.mp3')
            audi.play();
            generarContra(100,999);
        }else{
            audi= new Audio('audio/incorrecto.mp3')
            audi.play();
        }

    }

       //Generar numero aleatorio de 4 digitos 
       function generarContra(min, max) {
           $('#btnAdivinar').value="hola";
        return console.log(Math.round(Math.random() * (max - min) + min));

    };

    $('#btnSiguiente1').on("click", function(){
        $('.ejerc1').hide('fast');
        $('.ejerc2').slideToggle('slow');
        ejec2Aleatorio(1, 100);

        $(this).addClass('oculto');
    });




    function ejec2Aleatorio(min, max){
    return console.log(Math.round(Math.random() * (max - min) + min));
    };

    // ===el boton tiene que estar oculto siempre, creo que tendre que usar hasClass, es un verificador de clase, addClass y removeClass, es la mejor idea hasta ahora
});