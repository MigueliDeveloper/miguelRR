// DOM - Document Object Model
/**
 * La utilidad de dar estilo y color en el documento JavaScript es ver como se
 * comporta los objetos en el Dom y apartir de esos objetos creados, se puede crear estilo a partir del javaScript. 
 * Lo normal es dar los estilos através del CSS.
 */
var contenedor=document.getElementById("contenedor");

contenedor.innerHTML="Contenido en el contenedor";
contenedor.style.background="blue";
contenedor.style.padding="20px";
contenedor.style.color="white";

contenedor.className="contenedor";

// function cambiarColor(){

//     contenedor.style.background="green";
// }

var colorActual = "";

function cambiarColor(){
    if(colorActual === ""){
        // Guardar el color actual antes de cambiarlo
        colorActual = contenedor.style.background;
        contenedor.style.background = "green";
    } else {
        // Restaurar el color anterior
        contenedor.style.background = colorActual;
        colorActual = "";
    }
}

// var contenedor = document.querySelector("#contenedor");

// Cogerá todas las etiquetas div
var elementos= document.getElementsByTagName('div');

console.log(elementos);

var contenidoTres = elementos[2];

contenidoTres.innerHTML = "Contenido Añadido";
contenidoTres.style.background= "yellow";
contenidoTres.style.color="black";

var valor;
for(valor in elementos){
    console.log(elementos[valor]);
    if(typeof elementos[valor].textContent == 'string'){
        // console.log(elementos[valor]);
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(elementos[valor].textContent);
        parrafo.append(texto);
        document.querySelector("#seccionUna").append(parrafo);
    }
}

// Elegir los elementos por su clase
var divcaja = document.getElementsByClassName('caja');
var div;

for(div in divcaja){
    if(divcaja[div].style.color == "caja"){
        divcaja[div].style.color == "blue";
    }
}

var solouno = document.querySelector("#soloUno");
console.log(solouno);

var varios = document.querySelectorAll('div');
console.log(varios);