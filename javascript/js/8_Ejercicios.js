 "use strict"
 /* Ejercicio 1 */
 console.log("------Primer ejercicio-------");
 var precioJogurt= 3000;
 var precioGaseosa= 1500;
 var precioJugoNatural= 2800;
 var precioMalteada= 5000;

if (precioMalteada>precioJogurt && precioMalteada>precioGaseosa && precioMalteada>precioJugoNatural){
    console.log("El precio mas alto es el de la Malteada, que tiene un costo de  $"+ precioMalteada );
}
else if (precioGaseosa>precioJogurt && precioGaseosa>precioJugoNatural && precioGaseosa>precioMalteada){
    console.log("El precio mas alto es el de la Gaseosa, que tiene un costo de  $"+ precioGaseosa );
}
else if (precioJugoNatural>precioJogurt && precioJugoNatural>precioGaseosa && precioJugoNatural>precioMalteada){
    console.log("El precio mas alto es el del JugoNatural, que tiene un costo de  $"+ precioJugoNatural );
}
else if (precioJogurt>precioGaseosa && precioJogurt>precioJugoNatural && precioJogurt>precioMalteada) {
    console.log("El precio mas alto es el del Yogurt, que tiene un precio de:" + precioJogurt);  
}
////////////////////////////////
if (precioMalteada<precioJogurt && precioMaltea<precioGaseosa && precioMalteada<precioJugoNatural){
    console.log("El precio mas bajo es el de la Malteada, que tiene un costo de  $"+ precioMalteada );
}
else if (precioGaseosa<precioJogurt && precioGaseosa<precioJugoNatural && precioGaseosa<precioMalteada){
    console.log("El precio mas bajo  es el de la Gaseosa, que tiene un costo de  $"+ precioGaseosa );
}
else if (precioJugoNatural<precioJogurt && precioJugoNatural<precioGaseosa && precioJugoNatural<precioMalteada){
    console.log("El precio mas bajo es el del JugoNatural, que tiene un costo de  $"+ precioJugoNatural );
}
else if (precioJogurt<precioGaseosa && precioJogurt<precioJugoNatural && precioJogurt<precioMalteada) {
    console.log("El precio mas bajo es el del Yogurt, que tiene un precio de:" + precioJogurt);  
}
else{
    console.log(
        "la surgido un error en el sistema");
}

/* Ejercicio 2 */
console.log("------segundo ejercicio-------");

var user="Yeimi Ariza";
var password=9876;
 
if(user=="Yeimi Ariza" && password==9876){
    console.log("bienvenido" ); 
}
else{
    console.log("usuario invalido");
}

/* Ejercicio 3 */
console.log("------Tercer  ejercicio-------");
var bultoLimon= 100000;
var bultoPepino= 200000;
var bultoPapa= 300000;

var descuento1=  0.3;
var descuento2= 0.5;
var descuento3= 0.8;

var valorDescuento1 = (bultoLimon * 0.03);
var valorDescuento2 = (bultoPepino * 0.05);
var valorDescuento3 = (bultoPapa * 0.08);

if(bultoLimon>=100000){
    console.log("Bulto Limon");
    console.log("subtotal = $" + bultoLimon );
    console.log("Descuento de 3% = " + descuento1 );
    console.log("Total = $" + (bultoLimon - valorDescuento1)  );
}
else if(bultoLimon>=200000){
    console.log("Bulto Limon");
    console.log("subtotal = $" + bultoLimon );
    console.log("Descuento de 5% = " + descuento2 );
    console.log("Total = $" + (bultoLimon - valorDescuento2)  );
}
else if(bultoLimon>=300000){
    console.log("Bulto Limon");
    console.log("subtotal = $" + bultoLimon );
    console.log("Descuento de 8% = " + descuento3 );
    console.log("Total =" + (bultoLimon - valorDescuento3)  );
}
else {
    console.log("Se produjo un error");
}
/////////////////////////////

if(bultoPepino>=200000){
    console.log("Bulto Pepino");
    console.log("subtotal = $" + bultoPepino );
    console.log("Descuento de 5%= " + descuento2 );
    console.log("Total =" + (bultoPepino - valorDescuento2)  );
}
else if(bultoPepino>=100000){
    console.log("Bulto Pepino");
    console.log("subtotal = $" + bultoPepino );
    console.log("Descuento de 3%= " + descuento1 );
    console.log("Total =" + (bultoPepino - valorDescuento1)  );
}
else if (bultoPepino>=300000){
    console.log("Bulto Pepino");
    console.log("subtotal = $" + bultoPepino );
    console.log("Descuento de 8% = " + descuento3 );
    console.log("Total =" + (bultoPepino - valorDescuento3)  );
}
else {
    console.log("Se produjo un error");
}
/////////////////

if(bultoPapa>=300000){
    console.log("Bulto Papa");
    console.log("subtotal = $" + bultoPapa );
    console.log("Descuento de 8% = " + descuento3 );
    console.log("Total =" + (bultoPapa - valorDescuento3)  );
}
else if(bultoPapa>=100000){
    console.log("Bulto Papa");
    console.log("subtotal = $" + bultoPapa );
    console.log("Descuento de 3% = " + descuento1 );
    console.log("Total =" + (bultoPapa - valorDescuento1)  );
}
else if(bultoPapa>=200000){
    console.log("Bulto Papa");
    console.log("subtotal = $" + bultoPapa );
    console.log("Descuento de 5% = " + descuento2 );
    console.log("Total =" + (bultoPapa - valorDescuento2)  );
}
else {
    console.log("Se produjo un error");
}



