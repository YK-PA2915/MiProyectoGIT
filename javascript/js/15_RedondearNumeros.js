"use strict"
/*Redondear de forma automatica con el metodo round. */
console.log("----REDONDEAR DE FORMA AUTOMATICO----");
 var number1 = 4.4; /*Redondea hacia abajo */
 var number2 = 4.6; /*Redondea hacia arriba */
 var number3 = 4.5; /*Redondea hacia a */

 var number1Round  = Math.round(number1);
 var number2Round  = Math.round(number2);
 var number3Round  = Math.round(number3);

console.log("variable 1: " + number1Round + "\n" + 
            "variable 2: " + number2Round + "\n" +
            "variable 3: " + number3Round );
/*Redondear hacia el piso con el metodo floor */
console.log("----REDONDEAR CON EL METODO FLOOR----");
var number4 =4.9;
var number4Floor = Math.floor(number4);
console.log("variable 4: " + number4Floor);

/*Redondear hacia el techo con el metodo Ceil */
console.log("----REDONDEAR CON EL METODO CEIL----");
var number5 =4.1;
var number5Ceil = Math.ceil(number5);
console.log("variable 5: " + number5Ceil);

