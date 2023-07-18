/**
 * 1.- Una tienda ofrece un descuento del 15% sobre el total de la compra durante el mes de octubre. 
 * Dado un mes y un importe, calcular cuál es la cantidad que se debe cobrar al cliente. Se propone la 
 * realización de un Script que calcule lo solicitado. Basado en el siguiente pseudocódigo.

InicioProceso
    Escribir “escribe el importe de la compra”
    Leer importe //Int
    Escribir “Introduce el mes”
    Leer mes // String
    //Si el mes es octubre, se aplicará el descuento
    Si (mes=”octubre”) Entonces
    total<-importe*0.85
    Sino
    total<-importe
    FinSi
    Escribir total
FinProceso
 * 
 */

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






