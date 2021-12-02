"use strict"
console.log( "---------Caracteres Permitidos---------");

var texto= "*Buenas, este es un ejemplo en el cual identificaremos si esta cadena de texto excede o no la cantidad de caracteres permitidos en esta seccion";

console.log( "*El texto que usted ingreso es: " + " " + texto);
console.log("");
console.log("*El numero de caracteres es: " + "" + texto.length);

if(texto.length<=50){
    console.log( "*Los caracteres si son permitidos ");
}
if(texto.length >50){
    console.log( "*Has excedido la cantidad de caracteres permitidos ");
}

console.log( "---------Buscar entre los Elementos---------");

var celulares = new Array();
celulares[0] ="Samsung";
celulares[1] ="Xiaomi";
celulares[2] ="Apple";
celulares[3] ="Sony";
celulares[4] ="Nokia";
celulares[5] ="LG";

var nombreCelular = "Nokia"
console.log( "*El nombre del celular especifico es: " + " " +nombreCelular);

if( nombreCelular == celulares[0] || nombreCelular == celulares[1] || nombreCelular == celulares[2] ||nombreCelular == celulares[3] ||
    nombreCelular == celulares[4] || nombreCelular == celulares[5]){
        console.log( "*El celular "  +nombreCelular + " " + "fue encontrado exitosamente ");
    }
else {
    console.log( "*Error, Este celular no ha sido encontrado ");
}

console.log( "---------Arreglo Aprendices---------");

var aprendiz1 = new Array();
aprendiz1[0] =1;
aprendiz1[1] ="Yeimi Katherine";
aprendiz1[2] ="Peña Ariza";
aprendiz1[3] =18;
aprendiz1[4] ="B.Villa del Prado";
aprendiz1[5] =156;

var aprendiz2 = new Array(2, "Luisa Fernanda", "Ramirez Montoya", 19, "B. Simon Bolivar", 157);

var aprendiz3 =[3,"Jesus Nicolas","Ayerbe Guarnizo", 17, "B. Las Palmitas", 177];


for (var i = 0; i <= 2- 1; i++) {
    i++;
    console.log("APRENDIZ N° " + (i));
    for(var j = 0; j <= 5; j++) {
        console.log(aprendiz1[j]);
    }
    i++;
    console.log("APRENDIZ N° " + (i));
    for(var j = 0; j <= 5; j++) {
        console.log(aprendiz2[j]);
    }
    i++;
    console.log("APRENDIZ N° " + (i));
    for(var j = 0; j <= 5; j++) {
        console.log(aprendiz3[j]);
    }
}