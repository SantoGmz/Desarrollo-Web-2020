function generarAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
}


for (let i = 1; i < 100; i++) {
    //document.write('Linea numero ' +i+' Numero Generado: '+generarAleatorio(1,100) + "<br>");
    
}






let arr= [];
for(var i =1;i<=100;i++){
arr.push(i);
}



function aleatoria(x) {
    return Math.floor(Math.random() * x);
}

document.write(arr[aleatoria(101)] + "<br>");
document.write(arr[aleatoria(101)] + "<br>");
document.write(aleatoria(9));