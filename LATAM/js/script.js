"use strict"

class Vuelos{
    constructor(origen,duracion,destino,precio,horaInicio){
        this.origen=origen;
        this.duracion=duracion;
        this.destino=destino;
        this.precio=precio; 
        this.horaInicio=horaInicio;
        this.horaLlegada=this.horaLlegada;
        this.economic = economic;
    }
}
let horaInicio = new Date(2022, 2, 10, 8, 12, 0);
let horaLlegada = new Date(2022, 2, 13, 12, 12, 0);
let jornada = undefined;




let horaInicio1 = new Date(2022, 2, 12, 8, 35, 0);
let horaLLegada1 = new Date(2022, 2, 10, 8, 12, 0);
let horaInicio1Str = definirJornada(horaInicio1);
let horaLlegada1Str = definirJornada(horaLLegada1);

let horaInicio2 = new Date(2022, 2, 12, 9, 35, 0);
let horaLLegada2 = new Date(2022, 2, 12, 8, 35, 0);
let horaInicio2Str = definirJornada(horaInicio2);
let horaLlegada2Str = definirJornada(horaLLegada2);

let horaInicio3 = new Date(2022, 2, 10, 10, 12, 0);
let horaLLegada3 = new Date(2022, 2, 10, 12, 12, 0);
let horaInicio3Str = definirJornada(horaInicio3);
let horaLlegada3Str = definirJornada(horaLLegada3);

let vuelo =[{
    "origen":"BGT",
    "duracion": "1h 20min",
    "destino":"CTG",
    "precio": 530000,    
    "horaInicio":horaInicio1Str,  
    "horaLlegada": horaLlegada1Str,  
    "economic": 1 
    },
    {
    "origen":"CALI",
    "duracion": "1h 40min",
    "destino":"CTG",
    "precio": 600000,
    "horaInicio": horaInicio2Str,
    "horaLlegada":horaLlegada2Str,  
    "economic": 1
     },
     {
   
    "origen":"FLO",
    "duracion": "1h 40min",
    "destino":"CTG",
    "precio": 700000,   
    "horaInicio": horaInicio3Str,
    "horaLlegada": horaLlegada3Str,  
    "economic": 1
    },       
];
function buscarVuelos(){
    for(let i=0; i<vuelo.length; i++){
    cargarVuelos(vuelo[i].origen ,
                vuelo[i].duracion,
                vuelo[i].destino,
                vuelo[i].precio,               
                vuelo[i].horaInicio,
                 vuelo[i].horaLlegada,
                vuelo[i].economic,
               );
}
};
function definirJornada(horaEvento) {
    if (horaEvento.getHours() < 12) {
        jornada = "a.m.";
    }
    else {
        jornada = "p.m.";
        horaEvento.setHours = horaEvento.getHours() - 12;
    } 
    let horaEventoTxt = horaEvento.getHours().toString() + ":" + horaEvento.getMinutes().toString() + " " + jornada;
    return horaEventoTxt;
};

function cargarVuelos(origen,duracion,destino,precio,horaInicio,horaLlegada,economicVuelos){
    let contentVuelo =document.getElementById("contentVuelo");
    let contentPrincipal =document.createElement("div");  
    contentVuelo.appendChild(contentPrincipal); 
    contentPrincipal.setAttribute("class","contenido-div");

    let neworigen= document.createElement("label");
    let textorigen=document.createTextNode(origen);
    neworigen.appendChild(textorigen);
    neworigen.setAttribute("class","origen");
    contentPrincipal.appendChild(neworigen); 
    
    let  newDuracion= document.createElement("label");
    let textDuracion=document.createTextNode(duracion);
    newDuracion.appendChild(textDuracion);
    newDuracion.setAttribute("class","duracion");
    contentPrincipal.appendChild(newDuracion);

    let newdestino= document.createElement("label");
    let textdestino=document.createTextNode(destino);
    newdestino.appendChild(textdestino);
    newdestino.setAttribute("class","destino");
    contentPrincipal.appendChild(newdestino);
    
    let newprecio= document.createElement("label");
    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(precio);
    let textprecio= document.createTextNode("cop  $" + precioFormat);
    newprecio.appendChild(textprecio);
    newprecio.setAttribute("class","precio");
    contentPrincipal.appendChild(newprecio);
  
    let  newHoraInicio= document.createElement("label");
    let textinicio=document.createTextNode(horaInicio);
    newHoraInicio.appendChild(textinicio);
    newHoraInicio.setAttribute("class","inicio ");
    contentPrincipal.appendChild(newHoraInicio);

    let  newHoraLlegada= document.createElement("label");
    let textLlegada=document.createTextNode(horaLlegada);
    newHoraLlegada.appendChild(textLlegada);
    newHoraLlegada.setAttribute("class","llegada ");
    contentPrincipal.appendChild(newHoraLlegada);

    let economico = document.createElement("div");
    contentPrincipal.appendChild(economico);
    if (economicVuelos === 1) {
        let txtEconomic = document.createTextNode("Mas Economico");
        economico.appendChild(txtEconomic);
        economico.setAttribute("class", "style-economic");
    }

    let lineaDivisora = document.createElement("hr");
    contentPrincipal.appendChild(lineaDivisora);
    lineaDivisora.setAttribute("class", "linea-divisora");

};
window.onload = function() {
    buscarVuelos();
};
