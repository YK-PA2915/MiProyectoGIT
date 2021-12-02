"use strict"
/* Metodo toFixed para recotar decimales */
var promedio = 2.127456;
promedio = promedio.toFixed(2);
console.log("El promeio es: " + promedio );

/*Forzando el redondeo */
/*metodo slice para redondear */
 var promedio2 =3.566676544;
 var promedio2Str = promedio2.toString();
 var promedio2Conv = promedio2Str.slice(0,4);
 var promedio2Conv = parseFloat(promedio2Conv);
 console.log(promedio2Conv);