"use strict"

class Vuelos{
    constructor(origen,destino,precio,duracion,horaInicio){
        this.origen=origen;
        this.destino=destino;
        this.precio=precio;
        this.duracion=duracion;
        this.horaInicio=horaInicio;
    }
}
let vuelo =[{
    "origen":"BGT",
    "destino":"CTG",
    "precio": 530000,
    "duracion": "1h 20min",
    "horaInicio": getHours(),
     
    },
    {
    "origen":"CALI",
    "destino":"CTG",
    "precio": 600000,
    "duracion": "1h 40min",
    "horaInicio": getHours(),
    },
    {
        "origen":"FLO",
        "destino":"CTG",
        "precio": 700000,
        "duracion": "1h 40min",
        "horaInicio": getHours(),
    }, 


       
];
function buscarVuelos(){
    for(let i=0; i<vuelo.length; i++){
    cargarVuelos(vuelo[i].origen ,
                vuelo[i].destino,
                vuelo[i].precio,
                vuelo[i].horaInicio);
};
}


function cargarVuelos(origen,destino,precio,horaInicio){
    let contentVuelo =document.getElementById(contentVuelo);
    let contentPrincipal =document.createElement("div");  
    contentVuelo.appendChild(contentPrincipal); 
    contentPrincipal.setAttribute("class","contenido-div");

    let origen= document.createElement("label");
    let textorigen=document.createTextNode(vuelo.origen);
    origen.appendChild(textorigen);
    origen.setAttribute("class","origen");
    contentPrincipal.appendChild(origen);

    let destino= document.createElement("label");
    let textdestino=document.createTextNode(vuelo.destino);
    destino.appendChild(textdestino);
    destino.setAttribute("class","destino");
    contentPrincipal.appendChild(destino);
    

    let precio= document.createElement("label");
    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(vuelo.precio);
    let textprecio= document.createTextNode("$" + precioFormat);
    precio.appendChild(textprecio);
    precio.setAttribute("class","precio");
    contentPrincipal.appendChild(precio);

    let  horaInicio= document.createElement("label");
    let textinicio=document.createTextNode(vuelo.horaInicio);
    horaInicio.appendChild(textinicio);
    horaInicio.setAttribute("class","inicio ");
    contentPrincipal.appendChild(horaInicio);

};
window.onload = function() {
    buscarVuelos();
};
