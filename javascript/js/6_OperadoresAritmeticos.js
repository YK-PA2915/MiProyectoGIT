"user strict"

/*Hallar el total (suma)*/
console.log("====SUMA====");
var producto1 = 2560;
var producto2 = 3520;
var producto3 = 4680;
var totalSuma = producto1 + producto2 + producto3;
console.log("La suma de los productos es: $" + totalSuma);

/*Hallar el descuento (resta) */
console.log("====RESTA====");
var producto4 = 15600;
var descuento = 3000;
var totalDescuento = producto4 - descuento;
console.log("El total con descuento es: $" + totalDescuento);

/*Hallar el total(multiplicacion) */
console.log("====MULTIPLICACION====");
var producto5 = 15600;
var cantidadProducto = 5;
var totalMultiplicacion = producto5 * cantidadProducto;
console.log("El valor d elos 5 productos  es: $" + totalMultiplicacion);

/*Hallar el promedio de calificacion(Division) */
console.log("====DIVISION====");
var nota1 = 9.5;
var nota2= 8.2;
var nota3= 7.9;
var totalCalificacion = 3
var promedioFinal = (nota1 + nota2 + nota3) / totalCalificacion;
promedioFinal = promedioFinal.toFixed(2);
console.log("El promedio de las notas es : $" + promedioFinal);

/*Hallar el residuo */
console.log("====RESIDUO====");
var ahorros = 25011;
var cantidadAportantes = 102;
var montoIndividual = 0; 
var sobrante = 0;
/*cuanto dinero corresponde a cada uno y cuanto sobra */
var montoIindividual = parseInt(ahorros / cantidadAportantes);
console.log("El monto individual es. $" + montoIndividual);
/*el signo d eresiduo es % */