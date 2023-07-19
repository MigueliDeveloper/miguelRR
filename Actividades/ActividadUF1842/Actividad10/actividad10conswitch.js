
var importeCompra= 0;
var descuentoEneroFebrero=0.80 ; //Descuento del 20% Enero y Feberero
var descuentoJulioAgostoOctubre= 0.85; //Descuento del 15% Julio y Agosto
var descuentoNoviembreDiciembre= 0.75; //Descuento del 25% Noviembre y Diciembre
var total= 0;
var mes= " ";

importeCompra = parseFloat(prompt("Escribe el importe de la compra: "));
mes = (prompt("Introduce el mes: "));
mes= (mes.toLowerCase());

switch(mes){
    case "enero" && "febrero":
        total= importeCompra*descuentoEneroFebrero;
        document.write("<p>El total de la compra es: "+total+"</p>")
    break;

    case "julio" && "agosto" && "octubre":
        total=importeCompra*descuentoJulioAgostoOctubre;
        document.write("<p>El total de la compra es: "+total+"</p>")
    break;

    case "noviembre" && "diciembre":
        total=importeCompra*descuentoNoviembreDiciembre;
        document.write("<p>El total de la compra es: "+total+"</p>")
    break;

    default:
        total=importeCompra;
        document.write("<p>El total de la compra es: "+total+"</p>")
    break;
}

