
// Actividad 2
function operadores(){
    var numero1= 0;
    var numero2= 0;

    var suma= null;
    var resta=null
    var multiplicar=null;
    var division= null

    numero1= parseInt(document.getElementById("numero1").value);
    numero2= parseInt(document.getElementById("numero2").value);
  
    // Realiza la suma
    suma = numero1 + numero2;
    document.getElementById("resultado").innerText = "La suma de " + numero1 + " y " + numero2 + " es: " + suma;
    
    //Realiza la resta 
    resta=numero1-numero2;
    document.getElementById("resultado").innerText = "La suma de " + numero1 + " y " + numero2 + " es: " + resta;
    // prompt("La resta de "+numero1+" y "+numero2+ " es: ");
    
    // console.log(resta);

    prompt("La multiplicacion de "+numero1+" y "+numero2+ " es: ")
    multiplicar=numero1*numero2;
    console.log(multiplicar);

    prompt("La division de "+numero1+" y "+numero2+ " es: ")
    division=numero1/numero2;
    console.log(division);
}






// Actividad 12
function comprobar(){
    let operador=document.getElementById("operadores").value;
    resultado = eval(operador);
    document.getElementById("resultado").innerHTML="Resultado: "+resultado;
}

/**
 * // Actividad 3
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

// Actividad 9

function tablaDeMultiplicar(){
    var seleccionTabla=0;
    
    seleccionTabla=parseInt(prompt("Que tabla de multiplicar del 0 al 10 quieres consultar"));

    // For que muestra solamente la tabla de multiplicar que solicitó (del 0 al 10)
    for(let i=0; i<=10; i++){
        
        document.write("<p> La tabla de multiplicar de "+seleccionTabla+" x "+ i +" es: "+seleccionTabla*i);
    }
    
    for(let i=0; i<=10; i++){

        document.write("<p> La tabla de multiplicar de "+ i+"</p>");
        
        for(let j=0; j<=10; j++){
            document.write("<p>"+i+" x "+j+" = "+ i*j+"</p>");

        }
    }

    for(let i = 0; i<seleccionTabla; ++i){
        
        document.write("Tabla de multiplicar del "+i+"</p>");

        for (let j = 0; j <=10; j++) {
            document.write(i +" x "+ j +"="+ i * j+"</p>");
        }
    }
}

// Actividad 10

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
    case "enero": case "febrero":
        total= importeCompra*descuentoEneroFebrero;
        document.write("<p>El total de la compra es: "+total+"</p>")
    break;

    case "julio": case "agosto": case "octubre":
        total=importeCompra*descuentoJulioAgostoOctubre;
        document.write("<p>El total de la compra es: "+total+"</p>")
    break;

    case "noviembre": case "diciembre":
        total=importeCompra*descuentoNoviembreDiciembre;
        document.write("<p>El total de la compra es: "+total+"</p>")
    break;

    default:
        total=importeCompra;
        document.write("<p>El total de la compra es: "+total+"</p>")
    break;
}

//Actividad 11
var idPersonal
var contrasena

idPersonal= (prompt("Ingrese el nombre de usuario"));

if(idPersonal == "Admin"){
  
    contrasena=(prompt("contraseña:"));
    // Sitio del Admin. Su contraseña es Webmaster
    if(contrasena =="webmaster"){

        document.write("<h1>¡Bienvenido!</h1>");

    }else if (contrasena ==="" || contrasena===null){

        document.write("<h1>cancelado</h1>");

    }else{
        document.write("<p>contraseña incorrecta</p>");   
    }   


} else if (idPersonal =="" || idPersonal === null){

    document.write("<h1>cancelado</h1>");

} else{

    document.write("<h1>usuario incorrecto</h1>");
}



 * 
 */



