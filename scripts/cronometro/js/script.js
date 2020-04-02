
window.onload = function() {
    //localiza en pantalla el reloj y se ronombra visor para trabajar con ello
            visor=document.getElementById("reloj");
            //asociar eventos a botones: al pulsar el botón se activa su función.
            document.cron.empieza.onclick = empezar;
            document.cron.para.onclick = parar;
            document.cron.continua.onclick = continuar;
            document.cron.reinicia.onclick = reiniciar;
    }

//variables de inicio:
var marcha=0; //control del temporizador
var cro=0; //estado inicial del cronómetro.
//cronometro en marcha. Empezar en 0:

function empezar() {
if (marcha==true) { //solo si el cronómetro esta parado
emp=new Date() //fecha actual
elcrono=setInterval(tiempo,10); //función del temporizador.
marcha=1 //indicamos que se ha puesto en marcha.
}

}

function tiempo() { //función del temporizador
actual=new Date() //fecha en el instante
cro=actual-emp //tiempo transcurrido en milisegundos
cr=new Date() //fecha donde guardamos el tiempo transcurrido
cr.setTime(cro) //nos da la fecha en milisegundos
cs=cr.getMilliseconds() //milisegundos del cronómetro
cs=cs/10; //paso a centésimas de segundo.
cs=Math.round(cs) //despreciamos los decimales
sg=cr.getSeconds(); //segundos del cronómetro
mn=cr.getMinutes(); //minutos del cronómetro
ho=cr.getHours()-1; //horas del cronómetro
if (cs<10) {cs="0"+cs;}  //se ponen siempre 2 cifras en los números
if (sg<10) {sg="0"+sg;}
if (mn<10) {mn="0"+mn;}
visor.innerHTML=ho+" : "+mn+" : "+sg+" : "+cs; //pasar a pantalla.
}

//parar el cronómetro
function parar() {
if (marcha==1) { //sólo si está en funcionamiento
clearInterval(elcrono); //parar el crono
marcha=0; //indicar que está parado.
}          
}               

//Continuar una cuenta empezada y parada.
function continuar() {
if (marcha==0) { //sólo si el crono está parado
emp2=new Date(); //fecha actual
emp2=emp2.getTime(); //pasar a tiempo Unix
emp3=emp2-cro; //restar tiempo anterior
emp=new Date(); //nueva fecha inicial para pasar al temporizador
emp.setTime(emp3); //datos para nueva fecha inicial.
elcrono=setInterval(tiempo,10); //activar temporizador
marcha=1; //indicamos que se ha puesto en marcha.
}          
}

//Volver al estado inicial
function reiniciar() {
if (marcha==1) { //si el cronómetro está en marcha:
clearInterval(elcrono); //parar el crono
marcha=0;   //indicar que está parado
}
cro=0; //tiempo transcurrido a cero
visor.innerHTML = "0 : 00 : 00 : 00"; //se escribe en el visor todo a 0
}     