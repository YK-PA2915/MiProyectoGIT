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