/**
 * 1.- Reutilizando el código realizado en la actividad 5 y modificando lo que necesite. Ampliar los meses de descuentos según lo siguiente:
•	Enero y febrero un 20%.
•	Julio y Agosto un 15%.
•	Noviembre y Diciembre un 25%.
•	Resto de meses precio sin descuento.

 */

/**
 * enero 
 * febrero 
 * julio 
 * agosto
 * noviembre
 * diciembre
 */

var importeCompra= 0;
var descuentoEneroFebrero=0.80 ; //Descuento del 20% Enero y Feberero
var descuentoJulioAgostoOctubre= 0.85; //Descuento del 15% Julio y Agosto
var descuentoNoviembreDiciembre= 0.75; //Descuento del 25% Noviembre y Diciembre
var total= 0;
var mes= " ";

importeCompra = parseFloat(prompt("Escribe el importe de la compra: "));
mes = (prompt("Introduce el mes: "));

    if((mes.toLowerCase()=="enero")||(mes.toLowerCase()=="febrero")){
        total= importeCompra*descuentoEneroFebrero;

    }else if((mes.toLowerCase()=="julio")||(mes.toLowerCase()=="agosto")||(mes.toLowerCase()=="octubre")){
        total=importeCompra*descuentoJulioAgostoOctubre;

    }else if((mes.toLowerCase()=="noviembre")||(mes.toLowerCase()=="diciembre")){
        total=importeCompra*descuentoNoviembreDiciembre;
    }else{
        total=importeCompra;
    }

    document.write("<p>El total de la compra es: "+total+"</p>")