/**
* InicioProceso
    Escribir "Introduce el numero de niños"
    Leer numero_niños
    Escribir "Introduce el numero de niñas"
    Leer numero_niñas
    //calculamos el porcentaje
    porcentaje_niños<-numero_niños*100/(numero_niños+numero_niñas)
    porcentaje_niñas<-100-porcentaje_niños
    Escribir "Hay un " porcentaje_niños " % de niños
    Escribir "Hay un " porcentaje_niñas " % de niñas"
FinProceso
 * 
 */

var numeroNinos=0;
var numeroNinas=0;

numeroNinos= parseInt(prompt("Introduce el numero de niños"));
numeroNinas= parseInt(prompt("Introduce el numero de niñas"));

// Calculamos el porcentaje
var porcentajeNinos = (numeroNinos * 100) / (numeroNinos + numeroNinas);
let porcentajeNinas = 100 - porcentajeNinos;

// var totalnino = ninos+ninas;
// var porcentNinos = (nino*100)/totalNinos;
// var porcentNinas = (nina*100)/totalNinas

// console.log("El porcetanje de niñas "+porcentninas);
//console.log("El porcetanje de niñas "+porcentninas);
 
console.log("Hay un " + porcentajeNinos + "% de niños");
console.log("Hay un " + porcentajeNinas  + "% de niñas");



