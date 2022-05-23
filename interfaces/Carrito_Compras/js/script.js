"use strict"

let valorUnidad= 25000;
//let cantidadArticulosGlobal=document.getElementById("cantidadLibro").innerHTML;

mostrarTotal();
calcularSubtotal();


function pruebaSuma(){
    let cantidadArticulos= document.getElementById("cantidadLibro").innerHTML;
    if (cantidadArticulos<=9) {
        cantidadArticulos = Number(cantidadArticulos) + 1;
        document.getElementById("cantidadLibro").innerHTML = cantidadArticulos;
    }
    else{
        alert(" no puedes comprar mas de 10 productos en este pedido");
    }
    calcularSubtotal();

}
function pruebaResta(){
    let cantidadArticulos= document.getElementById("cantidadLibro").innerHTML;
    if (cantidadArticulos > 0) {
        cantidadArticulos =Number(cantidadArticulos) - 1;
        document.getElementById("cantidadLibro").innerHTML = cantidadArticulos;
    }
    calcularSubtotal();
}
function calcularSubtotal() {
    let numeroProductos = document.getElementById("cantidadLibro").innerHTML;
    if(numeroProductos == 1){
        document.getElementById("cantidad").innerHTML= numeroProductos.toString()+ " producto";
    }
    else{
        document.getElementById("cantidad").innerHTML= numeroProductos.toString()+ " productos";
    }
    mostrarTotal() 
}
function mostrarTotal() {
    let cantidadArticulosGlobal= document.getElementById("cantidadLibro").innerHTML;
    /* alert(cantidadArticulosGlobal); */
    let costoTotal =Number(valorUnidad) * Number(cantidadArticulosGlobal);
    
    document.getElementById("valorTotal").innerHTML=costoTotal;
    
}




