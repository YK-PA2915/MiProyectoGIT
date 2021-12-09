"use strict"
console.log("---Hora Actual---");
var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var temp = '' + ((hour > 12) ? hour - 12 : hour);
    if (hour <= 0)
      temp = '12';
    temp += ((minute < 10) ? ':0' : ':') + minute;
    temp += ((second < 10) ? ':0' : ':') + second;
    temp += (hour >= 12) ? ' P.M.' : ' A.M.';

console.log("la hora actual es " +temp);

console.log("---Dias para mi Cumpleaños---");
var today = new Date();
var endYear = new Date(2021,11, 28,23, 59, 59, 999); // Establece día y mes
endYear.setFullYear(today.getFullYear()); // Establece año a este año
var msPerDay = 24 * 60 * 60 * 1000; // Número de milisegundos por día
var daysLeft = (endYear.getTime() - today.getTime()+1) / msPerDay ;
var daysLeft = Math.round(daysLeft); // devuelve los días que quedan en el año

if (today < endYear){
    console.log("faltan :" + daysLeft  + " dias para mi cumpleaños" );
}

else {
    console.log ("ya es tiempo");
}

console.log("---Reconocer si ya es nuestro Cumpleaños---");
if ( today > endYear ) {
    console.log("!Feliz Cumpleaños!");
}
else {
    console.log("Ten paciencia todavia falta poco");
}

console.log("---Conocer cuantos años voy a cumplir---");
var fechaNac = new Date("December 29 2002");
var anyoNac = fechaNac.getFullYear();
var anyoActual = new Date().getFullYear();
var anyos = anyoActual - anyoNac;
console.log("Naci el " + fechaNac);
console.log("este año cumplo " + anyos);




    