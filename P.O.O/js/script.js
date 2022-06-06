
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