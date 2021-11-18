/*Operador condicional */
"use strict"

/*condicional simple*/
var edad =18;
if(edad>=18){
    console.log("Bienvenido dirigese a la mesa de votación")
}

/*Condicional compuesto */ 

/*Ambiente 1 es para 20 personas*/
/*Ambiente 2 es para 40 personas*/
/*Bioauditorio es para 100 personas*/
/*Informar si no hay ambientes con capacidad suficiente*/
/*Informar si h surgido un error*/


/* var ambiente1=20;
var ambiente2=40;
var bioauditorio=100; */

var personas=102;

if(personas >=1 && personas<= 20){
    console.log(+ personas);
    console.log("Su ambiente asignado con esa capacidad es el N°1  con" + personas);
}
else if(personas >20 && personas <= 40) {
    console.log("Su ambiente asignado con esa capacidad es el N°2 con" + personas); 
}
else if(personas>40 && personas <= 100) {
    console.log("El espacio con esa capacidad es el bioauditorio con" + personas); 
}
else if( personas > 100) {
    console.log("Se ha supera la capacidad y no hay espacio "); 
}

else {
    console.log("Ha surgido un error"); 
}

/*condicional anidado
un IF dentro de otro IF*/

/*sistemas para determinar el descuento de usuario */
/*si el usuario es menor de 10 o mayor de 70 años tiene un descuento sobre el valor del tiquete  de 10%
Si el destino es cartagena ,estos usuarios tiene descuento adicional de 10%
Si l arelonia es Latam, estos usuarios tiene descuento adicional del 10% */

var edadUsuario=71;
var aerolinea="latam";
var destinoUsuario="San Andres";
var valorTiquete=250000;
var descuento=.10;
var valorDescuento= (valorTiquete * .10)


if( edadUsuario <=10 || edadUsuario>=70){
    valorTiquete = (valorTiquete -  valorDescuento);
    if( destinoUsuario === "San Andres"){
        valorTiquete = (valorTiquete -valorDescuento);
    }
        if( aerolinea === "latam"){
        valorTiquete = (valorTiquete - valorDescuento);
        }
}
console.log ("valor del Tiquete: $" + valorTiquete)