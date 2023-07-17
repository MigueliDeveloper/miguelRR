/*InicioProceso
//     Escribir "Introduce el primer número"
//     Leer numero1
//     Escribir "Introduce el segundo número"
//     Leer numero2
//     //inicializamos la variable resultado a 0 (recomendable)
//     resultado<-0
//     //sumamos los números y escribimos su resultado
//     resultado<-numero1+numero2
//     Escribir resultado
//     //restamos los números y escribimos su resultado
//     resultado<-numero1-numero2
//     Escribir resultado
//     //multiplicamos los números y escribimos su resultado
//     resultado<-numero1*numero2
//     Escribir resultado
//     //dividimos los números y escribimos su resultado
//     resultado<-numero1/numero2
//     Escribir resultado
FinProceso
**/

var numero1= 0;
var numero2= 0;

var suma= null;
var resta=null
var multiplicar=null;
var division= null

var numero1= parseInt(prompt("Introduce el primer número"));
var numero2= parseInt(prompt("Introduce el segundo número"));

// numero1= 0;
// numero1= 0;

prompt("La suma de "+numero1+" y "+numero2+ " es: ");
suma=numero1+numero2;
console.log(suma);

prompt("La resta de "+numero1+" y "+numero2+ " es: ");
resta=numero1-numero2;
console.log(resta);

prompt("La multiplicacion de "+numero1+" y "+numero2+ " es: ")
multiplicar=numero1*numero2;
console.log(multiplicar);

prompt("La division de "+numero1+" y "+numero2+ " es: ")
division=numero1/numero2;
console.log(division);