let contenedor=document.getElementById("box");

let imagen=document.getElementById("imgprincipal");
let salir=document.getElementById("exit");
imagen.addEventListener("click",()=>{
    contenedor.classList.remove("boxvacio");
    contenedor.classList.add("box");
});
salir.addEventListener("click",()=>{
    contenedor.classList.remove("box");
    contenedor.classList.add("boxvacio");
})


function intercambiarImagen(ruta){
    document.getElementById("ImgPrincipal").src= ruta;
}


//BOTONES SUMAR//

let botonPlus=document.getElementById("plus");
let botonMenos=document.getElementById("botonMenos");
botonPlus.addEventListener("click",()=>{
    sumar();
})
botonMenos.addEventListener("click",()=>{
    
    restar();
})

function sumar(){
    let cantidad=document.getElementById("cantidad").innerHTML;
    cantidad=parseInt(cantidad);
    cantidad=cantidad +1;
    
    document.getElementById("cantidad").innerHTML=cantidad;
    
 let calcPrecio=220000 * cantidad;
 document.getElementById("vcd").innerHTML="Costo Total : "+calcPrecio;
}

function restar(){
    let cantidad=document.getElementById("cantidad").innerHTML;
    if (cantidad>=1){
    cantidad=parseInt(cantidad);
    cantidad=cantidad -1;
    
    document.getElementById("cantidad").innerHTML=cantidad;

    let calcPrecio=220000 * cantidad;
    document.getElementById("vcd").innerHTML="Costo Total : "+calcPrecio;
    }
}