 "use strict"
/*Operadores de comparacion
    1. >.............mayor que
    2. <.............menor que
    3. >=............mayor o igual que
    4. <=............menor o igual que
    5. !=............distinto sin importar tipo de dato
    6. ==............igual sin importar tipo de dato
    7. ===...........estrictamente igual . incluyendo tipo de dato
    8. !==...........distinto(si no son estrictamente iguales)
*/
/*quien ocupo el primer puesto */
var nota1 = 8.1;
var nota2 =8.5;
/*condicionales */
if (nota1 > nota2) {
    console.log("la nota mas alta fue de:" + nota1);
    }
else if (nota1 < nota2) {
    console.log("la nota mas alta fue de:" + nota2);
    }
else if (nota1 === nota2) {
    console.log("las dos notas son iguales");
    }
else {
    console.log("la surgido un error , verifique, por favor") 
    }
