function generarAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

for (let i = 1; i < 100; i++) {
    document.write('Linea numero ' +i+' Numero Generado: '+generarAleatorio(1,100) + "<br>");
    
}