
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
car1.modelo="CX-30";
car1.version="Turbo";
car1.year=2020;
car1.precio=120000000;
car1.kilometraje=60;
car1.ciudad="Bogotá";
car1.imagen="img/mazda-CX-30.jpg";

let car5 = new automovil();
car5.marca="Mazda";
car5.modelo="CX-5";
car5.version="";
car5.year=2020;
car5.precio=440000000;
car5.kilometraje=0;
car5.ciudad="Ibague";
car5.imagen="img/mazda-CX-5.jpg";

let car6 = new automovil();
car6.marca="Mazda";
car6.modelo="2";
car6.version="";
car6.year=2015;
car6.precio=60000000;
car6.kilometraje=0;
car6.ciudad="Ibague";
car6.imagen="img/mazda-2.jpg";

let car7 = new automovil();
car7.marca="Mazda";
car7.modelo="323";
car7.version="";
car7.year=1980;
car7.precio=20000000;
car7.kilometraje=13000;
car7.ciudad="Ibague";
car7.imagen="img/mazda-323.jpg";

let car2 = new automovil();
car2.marca="Toyota";
car2.modelo="Prado";
car2.version="txl";
car2.year=2022;
car2.precio=300000000;
car2.kilometraje=0;
car2.ciudad="cali";
car2.imagen="img/prado.jpg";

let car8 = new automovil();
car8.marca="Toyota";
car8.modelo="Hilux";
car8.version="";
car8.year=2021;
car8.precio=300000000;
car8.kilometraje=0;
car8.ciudad="Popayan";
car8.imagen="img/toyota-Hilux.jpg";
    

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
    let contenedorProducto= document.createElement("div");
    contenedorPrincipal.appendChild(contenedorProducto);
    contenedorProducto.setAttribute("class","contenido");

    let img= document.createElement("img");
    img.setAttribute("src", car.imagen);
    img.setAttribute("class","img");
    contenedorProducto.appendChild(img);

    

    let valorcar= document.createElement("label");

    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(car.precio);

    let textValorCar= document.createTextNode("$" + precioFormat);
    valorcar.appendChild(textValorCar);
    valorcar.setAttribute("class","precio");
    contenedorProducto.appendChild(valorcar);

    let descripcion= document.createElement("label");
    let textdesccar=document.createTextNode(car.marca+" " +car.modelo+" "+ car.version);
    descripcion.appendChild(textdesccar);
    descripcion.setAttribute("class","descripcion");

    contenedorProducto.appendChild(descripcion);

    let yearcar=document.createElement("label");
    let textyear=document.createTextNode(car.year);
    yearcar.appendChild(textyear);
    yearcar.setAttribute("class","year");
    contenedorProducto.appendChild(yearcar);

    let kilometrajecar=document.createElement("label");
    let textkilometraje=document.createTextNode(car.kilometraje+" kilometros");
    kilometrajecar.appendChild(textkilometraje);
    kilometrajecar.setAttribute("class","kilometraje");
    contenedorProducto.appendChild(kilometrajecar);

    let city=document.createElement("label");
    let textcity=document.createTextNode(car.ciudad);
    city.appendChild(textcity);
    city.setAttribute("class","ciudad");
    contenedorProducto.appendChild(city);

}

window.addEventListener("keydown",function(event){
    let Busq=document.getElementById("textBuscador").value;
    if(event.key=="Enter"){
        console.log(Busq);
        cleanwindow();
        if(Busq=="mazda"){
            Busqueda(car1); 
            Busqueda(car5); 
            Busqueda(car6); 
            Busqueda(car7);              
        }
        else if(Busq=="toyota"){
            Busqueda(car2);
            Busqueda(car8);
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