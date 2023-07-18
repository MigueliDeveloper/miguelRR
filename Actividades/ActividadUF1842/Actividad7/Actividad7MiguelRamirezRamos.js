/**
 * 1.- Convertir en funciones los script creados en las Actividades anteriores:
•	Actividad 2
•	Actividad 3
•	Actividad 4
•	Actividad 5
•	Actividad 6
 */

// Actividad 2
function operadores(){
    var numero1= 0;
    var numero2= 0;

    var suma= null;
    var resta=null
    var multiplicar=null;
    var division= null

    numero1= parseInt(prompt("Introduce el primer número"));
    numero2= parseInt(prompt("Introduce el segundo número"));
    //tambien se puede poner number
    // var numero2= Number(prompt("Introduce el segundo número"));

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
}

// Actividad 3
function compararNumeros(){
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

}

// Actividad 4
function porcentajeNinos(){
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

}
    

// Actividad 5
function descuentoTiendaOctubre(){

    var importeCompra= 0;
    var descuento= 0.85;
    var total= 0;
    var mes= " ";

    importeCompra = parseFloat(prompt("Escribe el importe de la compra: "));
    mes = (prompt("Introduce el mes: "));

        if(mes.toLowerCase()=="octubre"){

            total= importeCompra*descuento;
        }else{
            total=importeCompra;
        }

        document.write("<p>El total de la compra es: "+total+"</p>")
}


// Actividad 6
function validarClave(){

    var clave = 123456;

    clave= parseInt(prompt("Introduzca la clave. Tiene tres intentos"))

    
    if(clave == 123456){
      document.write("<p>La contraseña es correcta</p>");

    }else{

      for(var i=2; i>0; i--){
        clave= parseInt(prompt("Introduzca la clave. Le queda: "+i+" intento"));
      }
      document.write("<p>La contraseña es correcta</p>");
    }  
} 


compararNumeros(45, 60)

porcentajeNinos(15, 20)

descuentoTiendaOctubre()

validarClave()
