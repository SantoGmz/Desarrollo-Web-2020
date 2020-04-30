const btnGenerar = document.querySelector("#btnAddUser");
const tabla = document.querySelector("#tablaCuerpo");

btnGenerar.addEventListener("click",()=>{
    //console.log("Hola");
    traerDatos()
});

function traerDatos(){
    let url = "https://randomuser.me/api/";
    fetch(url)
    .then(resp => resp.json())
    .then(datos =>{
        let nombre = datos.results[0].name.first;
        let apellido= datos.results[0].name.last;
        let edad = datos.results[0].dob.age;
        let sexo = datos.results[0].gender;
        let correo = datos.results[0].email;

        if(sexo == "female"){
            llenarTabla(nombre, apellido, edad, sexo, correo)
        }else{
            do {
                //console.log("es hombre")
                traerDatos();
            } while (sexo !="male");
        }

    })
}


function llenarTabla(nombre,apellido,edad,sexo,correo){
    let rowColumna = tabla.insertRow();
    let cell1 = rowColumna.insertCell(0)
    let cell2 = rowColumna.insertCell(1)
    let cell3 = rowColumna.insertCell(2)
    let cell4 = rowColumna.insertCell(3)
    let cell5 = rowColumna.insertCell(4)
    cell1.innerHTML= nombre;
    cell2.innerHTML= apellido;
    cell3.innerHTML= edad;
    cell4.innerHTML= sexo;
    cell5.innerHTML= correo

}



