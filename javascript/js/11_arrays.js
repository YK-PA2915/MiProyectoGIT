"use strict"
/*Formas d edeclarar y inicializar un arreglo */
/*Forma1 */
var aprendiz1 = new Array();
aprendiz1[0] =1;
aprendiz1[1] ="Yeimi Katherine";
aprendiz1[2] ="Peña Ariza";
aprendiz1[3] =18;
aprendiz1[4] ="B.Villa del Prado";
aprendiz1[5] =156;

/*forma2**/
var aprendiz2 = new Array(2, "Luisa Fernanda", "Ramirez Montoya", 19, "B. Simon Bolivar", 157);

/*Forma3*/
var aprendiz3 =[3,"Jesus Nicolas","Ayerbe Guarnizo", 17, "B. Las Palmitas", 177];

/*mostrar el nombre completo del aprendiz*/
console.log("El aprendiz uno es: "+ aprendiz1[1] + " " + aprendiz1[2] );

/*Añadiendo elementos a array */

aprendiz3[6]="3207173861";

/*contando elementos */
var cantidadElementos= aprendiz1.length;
console.log("Aprendiz 1 tiene " + cantidadElementos + " " + "elementos");

/*contando caracteres */
var cantidadCaracteres= aprendiz2[1].length;
console.log("Aprendiz 2 tiene " + cantidadCaracteres + " " + "caracteres");