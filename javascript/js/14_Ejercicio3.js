"use strict"
console.log( "---------CAMBIANDO TODO A MAYUSCULA---------");
var pelicula="SiEmPrE a Tu LaDo "
/*Pasando todo a mayuscula */
pelicula = pelicula.toUpperCase();
console.log(pelicula);

console.log( "---------CAMBIANDO TODO A MINUSCULA---------");
/*Pasando todo a minuscula */
pelicula = pelicula.toLowerCase();
console.log(pelicula);

console.log( "---------PRIMER LETRA EN MAYUSCULA Y EL RESTO EN MINUSCULA---------");
/*Poniendo la primera letra en Mayuscula y el resto en minuscula */
pelicula = pelicula[0].toUpperCase() + pelicula.slice(1);
console.log(pelicula);

console.log( "---------EXTRAYENDO PASTES DE LA CADENA DE TEXTO---------");
/*Extrayendo partes de la cadena de texto */
var cedula = "1006956707";
var auxConsecutivo = cedula.slice(1,8);
console.log("cedula");
console.log("Numero de cedula original "+ cedula);
console.log("Texto extraido  " + auxConsecutivo);

console.log( "---------CONTANDO CARACTERES---------");
var tecnologo ="Analisis y Desarrollo de Sistemas de Informacion";
console.log("texto "+ tecnologo );
console.log("Longitud: " + tecnologo.length);

console.log( "---------HALLANDO DOBLES ESPACIOS---------");
/*Buscando Espacios Dobles */
var nombreCompleto = "Yeimi  Katherine  Peña  Ariza";
console.log("El texto que usted ingreso es : " + nombreCompleto)
for(var i = 0; i < nombreCompleto.length; i++){
    if (nombreCompleto.slice(i, (i + 2)) === "  "){
        console.log("La cadena tiene espacios dobles");
    break;
    }
}

console.log( "---------REEMPLAZANDO TEXTO---------");
var hobby = "Programar en Java";
var newLang = "Python";
console.log("El texto que usted ingreso es: " + hobby);
for(var i= 0; i < hobby.length; i++) {
    if (hobby.slice(i, i + 4) === "Java") {
        hobby = hobby.slice(0, i);
    }
}
console.log(hobby + newLang);

console.log( "---------REEMPLAZANDO TEXTO CON INDEXOF---------");
/*Metodo indexof para reemplazar
parte de una cadena de texto */
var hobby2 = "Programar en Javascript a tope";
var firtChar = hobby2.indexOf("Javascript");
if (firtChar !== -1) {
    console.log(firtChar);
    hobby2 = hobby2.slice(0, firtChar) + "php"+ hobby2.slice(firtChar +10)
    console.log(hobby2);
}

console.log( "---------EXTRAER PRIMER CARACTER---------");
var primerNombre = "Yeimi";
var primerCaracter = primerNombre.charAt(0);
console.log("El nombre ingresado fue: " + primerNombre);
console.log("El primer caracter es:  "+ primerCaracter);

console.log( "---------EXTRAER ULTIMO CARACTER---------");
/*Extrayendo el ultimo caracter */
var primerNombre ="Yeimi";
var ultimoCaracter = primerNombre.charAt(primerNombre.length - 1);
console.log("El nombre ingresado fue: " + primerNombre);
console.log("El primer caracter es:  "+ ultimoCaracter);

console.log( "---------BUSCANDO CARACTERES ESPECIALES---------");
/*Buscando caracteres especiales */
var frase = "Hola Aprendices!";
for (var i = 0; i < frase.length; i++) {
    if (frase.charAt(i) ==="!" ) {
        console.log( "la frase fue: " + frase)
        console.log("la cadena tiene signos de admiracion.");
    }
}

console.log( "---------REEMPLAZANDO CARACTERES CON EL METODO REPLACE---------");
var mensaje= "Le mostrare mi salvacion";
var mensaje2 = mensaje.replace("salvacion" , "verdad");
console.log("mensaje inicial: " + mensaje);
console.log("mensaje reemplazado: " + mensaje2 );

