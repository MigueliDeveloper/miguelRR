/**
 * InicioProceso
 * Escribir "Introduce el primer número"
        Leer numero1
        Escribir "Introduce el segundo número"
        Leer numero2
        //comparamos los dos números,
        //si el primero es mayor o igual que el segundo entra
        Si (numero1>=numero2) Entonces
        //Si el numero1 y numero2 son iguales entra y escribe que son iguales
        //Sino lo son escribe que el numero1 es el mayor
            Si (numero1=numero2) Entonces
                escribir "los números " numero1 " " numero2 " son iguales"
            Sino
                Escribir numero1 " es el mayor de los dos"
            FinSi
        //Si el primer Si es falso, escribe que el numero2 es mayor
        Sino
            Escribir numero2 " es el mayor de los dos"
        FinSi
    FinProceso
 */

var numero1= 0;
var numero2= 0;

numero1= parseInt(prompt("Introduce el primer número"));
numero2= parseInt(prompt("Introduce el segundo número"));

    if(numero1>numero2){
        console.log(numero1+" Es mayor a "+numero2);

    }else if(numero1==numero2){

        console.log("los números "+ numero1 + numero2+ " son iguales");
    }else{
        console.log("El numero2 es mayor");
    }