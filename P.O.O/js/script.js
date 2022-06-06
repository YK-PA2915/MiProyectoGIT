/* "use strict"

class Automovil {
    constructor(marca,modelo,anyo) {
        this.Marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
        this.imagen=imagen;

    }
}
let auto1 =new Automovil();
auto1.anyo=2021;
auto1.marca="Mazda";
auto1.modelo="3 pride";
auto1.imagen="img/mazda3-1.jpg";

let auto2 = new Automovil();
auto2.anyo=2021;
auto2.marca="Mazda";
auto2.modelo="3 pride";
auto2.imagen="img/mazda3-1.jpg";
    

let auto3 = new Automovil();
auto3.anyo=2021;
auto3.marca="Mazda";
auto3.modelo="3 pride";
auto3.imagen="img/mazda3-1.jpg";


let auto4 = new Automovil();
auto4.anyo=2021;
auto4.marca="Mazda";
auto4.modelo="3 pride";
auto4.imagen="img/mazda3-1.jpg";


let auto4 = new Automovil();
auto4.anyo=2021;
auto4.marca="Mazda";
auto4.modelo="3 pride";
     */
/*     
alert(auto.marca + "" + auto.modelo + "" + "modelo" + "" + auto.anyo); */



/* for(let i=0; i<1;i++){
    maquetacion(auto1.marca,auto1.modelo,auto1.anyo);
} */
/* function busqueda(auto) {
    let mainContent = document.getElementById("mainContent");
    let marca = document.createElement("label");
    let textoMarca = document.createTextNode("Holis,yo soy un Label");
    marca.appendChild(textoMarca);
    marca.setAttribute("class","style-marca");
    mainContent.appendChild(marca);
    let imagenAuto= document.createElement("img");
    imagenAuto.setAttribute("src","auto.imagen");
    img.setAttribute("class","img");
    mainContent.appendChild(imagenAuto);


    let valorauto= document.createElement("label");

    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(auto.precio);

    let textValorauto= document.createTextNode("$" + precioFormat);
    valorauto.appendChild(textValorauto);
    valorauto.setAttribute("class","precio");
    contenedorPrincipal.appendChild(valorauto);

    let descripcion= document.createElement("label");
    let textdescauto=document.createTextNode(auto.marca+" " +auto.modelo+" "+ auto.version);
    descripcion.appendChild(textdescauto);
    descripcion.setAttribute("class","descripcion");

    contenedorPrincipal.appendChild(descripcion);

    let yearauto=document.createElement("label");
    let textyear=document.createTextNode(auto.year);
    yearauto.appendChild(textyear);
    yearauto.setAttribute("class","year");
    contenedorPrincipal.appendChild(yearauto);

    let kilometrajeauto=document.createElement("label");
    let textkilometraje=document.createTextNode(auto.kilometraje+" kilometros");
    kilometrajeauto.appendChild(textkilometraje);
    kilometrajeauto.setAttribute("class","kilometraje");
    contenedorPrincipal.appendChild(kilometrajeauto);

    let city=document.createElement("label");
    let textcity=document.createTextNode(auto.ciudad);
    city.appendChild(textcity);
    city.setAttribute("class","ciudad");
    contenedorPrincipal.appendChild(city);

}
window.addEventListener("keydown", function(event) {
    let busautoAutos = document.getElementById("textBuscador").value;
    if(event.key == "Enter") {
        console.log(busautoAutos);
        limpiarVentana();
        if (busautoAutos == "mazda") {
            busqueda(auto1);
            busqueda(auto2);
            busqueda(auto3);
        }
        else if (busautoAutos == "toyota") {
            busqueda(auto4);

        }
        else {
        this.alert("No se han encontrado coincidencias con la busqueda.");
        }
    }
});
function limpiarVentana() {
    document.getElementById("mainContent").innerHTML = "";
}
 */
/* let busautoAutos =document.getElementById("busautoAutos");
busautoAutos.addEventListener("click" , function() {
    maquetacion()

    let infoAutomovil = auto.marca + "" + auto.modelo + "" +  "modelo" + "" +  auto.anyo;
    document.getElementById("infoAuto").innerHTML =infoAutomovil;
}); */


class automovil{
    constructor(marca,modelo,version,year,precio,kilometraje,ciudad,imagen){
        this.marca=marca;
        this.modelo=modelo;
        this.version=version;
        this.year=year;
        this.precio=precio;
        this.kilometraje=kilometraje;
        this.ciudad=ciudad;
        this.imagen=imagen;
    }
}

let car1 =new automovil();
car1.marca="Mazda";
car1.modelo="3 pride";
car1.version="";
car1.year=2020;
car1.precio=120000000;
car1.kilometraje=60;
car1.ciudad="Bogotá";
car1.imagen="img/mazda3-1.jpg";

let car2 = new automovil();
car2.marca="Toyota";
car2.modelo="Prado";
car2.version="txl";
car2.year=2022;
car2.precio=300000000;
car2.kilometraje=0;
car2.ciudad="cali";
car2.imagen="img/prado.jpg";
    

let car3 = new automovil();
car3.marca="Audi";
car3.modelo="A3 sportback";
car3.version="";
car3.year=2022;
car3.precio=210000000;
car3.kilometraje=0;
car3.ciudad="Barranquilla";
car3.imagen="img/audi.jpg";

let car4 = new automovil();
car4.marca="BMW";
car4.modelo="iX";
car4.version="";
car4.year=2022;
car4.precio=440000000;
car4.kilometraje=0;
car4.ciudad="Ibague";
car4.imagen="img/bmw.jpg";



function Busqueda(car){
    let contenedorPrincipal=document.getElementById("contenidoPrincipal");
    let contimg= document.createElement("div");
    contenedorPrincipal.appendChild(contimg);
    contimg.setAttribute("class","contenido");

    let img= document.createElement("img");
    img.setAttribute("src", car.imagen);
    img.setAttribute("class","img");
    contenedorPrincipal.appendChild(img);

    

    let valorcar= document.createElement("label");

    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(car.precio);

    let textValorCar= document.createTextNode("$" + precioFormat);
    valorcar.appendChild(textValorCar);
    valorcar.setAttribute("class","precio");
    contenedorPrincipal.appendChild(valorcar);

    let descripcion= document.createElement("label");
    let textdesccar=document.createTextNode(car.marca+" " +car.modelo+" "+ car.version);
    descripcion.appendChild(textdesccar);
    descripcion.setAttribute("class","descripcion");

    contenedorPrincipal.appendChild(descripcion);

    let yearcar=document.createElement("label");
    let textyear=document.createTextNode(car.year);
    yearcar.appendChild(textyear);
    yearcar.setAttribute("class","year");
    contenedorPrincipal.appendChild(yearcar);

    let kilometrajecar=document.createElement("label");
    let textkilometraje=document.createTextNode(car.kilometraje+" kilometros");
    kilometrajecar.appendChild(textkilometraje);
    kilometrajecar.setAttribute("class","kilometraje");
    contenedorPrincipal.appendChild(kilometrajecar);

    let city=document.createElement("label");
    let textcity=document.createTextNode(car.ciudad);
    city.appendChild(textcity);
    city.setAttribute("class","ciudad");
    contenedorPrincipal.appendChild(city);

}

window.addEventListener("keydown",function(event){
    let Busq=document.getElementById("textBuscador").value;
    if(event.key=="Enter"){
        console.log(Busq);
        cleanwindow();
        if(Busq=="mazda"){
            Busqueda(car1);           
        }
        else if(Busq=="toyota"){
            Busqueda(car2);
        }
        
        else if(Busq=="audi"){
            Busqueda(car3);
        }
        else if(Busq=="bmw"){
            Busqueda(car4);
        }
        else{
            alert("sin coincidencias");
        }
    }
})
function cleanwindow(){
    document.getElementById("contenidoPrincipal").innerHTML="";
}