"use strict"
function pruebaSuma(){
    let cantidadLibro= document.getElementById("cantidadLibro").innerHTML;
    cantidadLibro =Number(cantidadLibro) + 1;
    document.getElementById("cantidadLibro").innerHTML = cantidadLibro;
}