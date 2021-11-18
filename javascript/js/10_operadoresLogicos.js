"use strict"
/*Operadores Logicos
&&........y
||........o
!=........negacion
xor.......O exclusivo
*/

/*si el aprendiz teien jovenes accion o sisben pueden acceder al susbsidio de transporte *
/*si el aprendiz tienen jovenes accion y sisben NO pueden acceder al susbsidio de transporte */
/*si el aprendiz NO tiene jovenes accion  y NO tiene sisben tampoco pueden acceder al susbsidio de transporte */

var jovenAccionUsuario= true;
var sisbenUsuario= true;

if(jovenAccionUsuario === true ^ sisbenUsuario === true ){
    console.log("Usted puede acceder al beneficio de transporte")
}

else {
    console.log("No puede acceder al servicio de transporte")
}



