/**
 * JSON - JavaScript Object Notation
 * Nos permite crear objetos de forma rápida
 * 
 * El preámbulo de enviar información a un servidor -- Interprete con PHO  
 */

var alumno = {
    nombre: "Juan López",
    correo: "juanlopez@gmail.com",
    telefono: "555 555 555"
}

// var alumnodos = {
//     nombre: "José García",
//     correo: "josegarcia@gmail.com",
//     telefono: "555 777 777"
// }

// alumno.nombre = "Juan López López";

// var alumnos = [alumno, alumnodos];
// console.log(alumnos);

// var totalAlumnos = document.querySelector("#totalAlumnos");
// var indice; 

// for(indice in alumnos){
//     var p=document.createElement("p");
//     p.append(alumnos[indice].nombre + "---------");
//     p.append(alumnos[indice].correo + "---------");
//     p.append(alumnos[indice].telefono + "---------");
//     totalAlumnos.append(p);

// }


// LocaStorage 
// Comprobación de la disponibilidad del LocalStorage
if(typeof(Storage) !== 'undefined' ){

    console.log("Disponible");

}else{
    console.log("No disponible");

}

// Guardar datos
localStorage.setItem("Listado", "Listado de Alumnos");

// Recuperar datos
localStorage.getItem("Listado");

//Guardar objetos
localStorage.setItem("alumno", JSON.stringify(alumno));

var alumnojs = JSON.parse(localStorage.getItem("alumno"));

document.querySelector("#totalAlumnos").append(alumnojs.nombre + "---------"+alumnojs.correo+"--------"+alumnojs.telefono);

localStorage.removeItem("Listado");

localStorage.clear();