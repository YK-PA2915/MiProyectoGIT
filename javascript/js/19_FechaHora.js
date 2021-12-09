"use strict"
/*Imprimir fecha y hora del navegador */
var currenTime = new Date();
console.log(currenTime);

/*Desglosando fechas y Horas */
var anyo = currenTime.getFullYear();
console.log("Año: " + anyo);

var mes = currenTime.getMonth();
console.log("Mes: " + mes);

var diaMes = currenTime.getDate();
console.log("Dia del mes: " + diaMes);


var dia = currenTime.getDay();
console.log("Dia de la semana: " + dia);

/* ---Cambiar el numero del dia por texto------------------------ */
var diaSemanaStr = new Array();
    diaSemanaStr[0]= "Domingo";
    diaSemanaStr[1]= "Lunes";
    diaSemanaStr[2]= "Martes";
    diaSemanaStr[3]= "Miercoles";
    diaSemanaStr[4]= "Jueves";
    diaSemanaStr[5]= "Viernes";
    diaSemanaStr[6]= "Sabado";

console.log("Hoy es : " + diaSemanaStr[dia]);
/* ------------------------ */

var hora = currenTime.getHours();
console.log("Hora: " + hora);

var minutos = currenTime.getMinutes();
console.log("Minutos: " + minutos);

var segundos = currenTime.getSeconds();
console.log("Segundos: " + segundos);

var milisegundos = currenTime.getMilliseconds();
console.log("Milisegundos: " + milisegundos);

var time = currenTime.getTime();
console.log("Milisegundos trascurridos desde 1970: " + time);

/* -------------------- */
var mesStr = new Array();
mesStr[0] = "Enero";
mesStr[1] = "Febrero";
mesStr[2] = "Marzo";
mesStr[3] = "Abril";
mesStr[4] = "Mayo";
mesStr[5] ="Junio";
mesStr[6] = "Julio";
mesStr[7] = "Agosto";
mesStr[8] = "Septiembre";
mesStr[9] = "octubre";
mesStr[10] = "Noviembre";
mesStr[11] ="Diciembre";

console.log("Fecha: " + " " +  diaSemanaStr[dia] + " "  + diaMes + " ,"+ "de " + mesStr[mes] + " del año " + anyo);


console.log("--Determinar si ya vencio--");
var fechaHoraLimite = new Date(Date.UTC(2021, 11 , 9, 8, 35));
fechaHoraLimite.setHours(8);


console.log("Fecha y Hora de vencimiento: " + fechaHoraLimite);
if (anyo <= fechaHoraLimite.getFullYear() &&
mes<=fechaHoraLimite.getMonth()&&
diaMes<=fechaHoraLimite.getDate() &&
hora<=fechaHoraLimite.getHours() &&
minutos<=fechaHoraLimite.getMinutes() ){
    console.log("falta: " + (diaMes - fechaHoraLimite.getDate()) + " dias " + 
    (hora - fechaHoraLimite.getHours()) + " horas, " + 
    (fechaHoraLimite.getMinutes() - minutos) + " minutos");
    console.log("El envio fue realizado con exito");
}
else{
    console.log("la fecha deenvio ya paso");
}