
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
    document.getElementById("resultadoSuma").innerText = "La suma de " + numero1 + " + " + numero2 + " es: " + suma;
    
    //Realiza la resta 
    resta=numero1-numero2;
    document.getElementById("resultadoResta").innerText = "La resta de " + numero1 + " - " + numero2 + " es: " + resta;

    multiplicar=numero1*numero2;
    document.getElementById("resultadoMultiplicacion").innerText = "La multiplicacion de "+numero1+" * "+numero2+ " es: "+multiplicar;

    division=numero1/numero2;
    document.getElementById("resultadoDivision").innerText = "La division de "+numero1+" / "+numero2+ " es: "+division;
}

// Actividad 3
function compararNumeros(){
    var numero1= 0;
    var numero2= 0;

    numero1= parseInt(document.getElementById("introducirNumero1").value);
    numero2= parseInt(document.getElementById("intorducirNumero2").value);

    if(numero1>numero2){
        document.getElementById("ResultadoNumero1Mayor").innerText= numero1+" es mayor a "+numero2;
       
    }else if(numero1==numero2){
  
        document.getElementById("ResultadoNumerosIguales").inneText= "Los números "+ numero1 + numero2+ " son iguales";
    }else{

        document.getElementById("ResultadoNumero2Mayor").innerText= "El numero2 es mayor";

    }

}

//Actividad 4
function porcentajeNinos(){
    var numeroNinos=0;
    var numeroNinas=0;

    numeroNinos= parseInt(document.getElementById("introducirNumeroIllos").value);
    numeroNinas= parseInt(document.getElementById("introducirNumeroIllas").value);

    // Calculamos el porcentaje
    var porcentajeNinos = (numeroNinos * 100) / (numeroNinos + numeroNinas);
    let porcentajeNinas = 100 - porcentajeNinos;

    // var totalnino = ninos+ninas;
    // var porcentNinos = (nino*100)/totalNinos;
    // var porcentNinas = (nina*100)/totalNinas

    // console.log("El porcetanje de niñas "+porcentninas);
    //console.log("El porcetanje de niñas "+porcentninas);

    document.getElementById("ResultadoPorcentajeIllos").innerText="Hay un " + porcentajeNinos + "% de niños"
    document.getElementById("ResultadoPorcentajeIllas").innerText="Hay un " + porcentajeNinas  + "% de niñas"
}

// Actividad 5
function descuentoTiendaOctubre(){

    var importeCompra= 0;
    var descuento= 0.85;
    var total= 0;
    var mes= " ";

    importeCompra = parseFloat(document.getElementById("introducirImporteCompra").value);

    mes = (document.getElementById("introducirMes").value);

        if(mes.toLowerCase()=="octubre"){

            total= importeCompra*descuento;
        }else{
            total=importeCompra;
        }

    document.getElementById("totalCompra").innerText="El total de la compra es: "+total
}

// Actividad 6
function validarClave(){

    var clave = 123456;

    clave= parseInt(document.getElementById("introducirClave").value);

    
    if(clave == 123456){
      document.write("<p>La contraseña es correcta</p>");

    }else{

      for(var i=2; i>0; i--){
        clave= parseInt(prompt("Introduzca la clave. Le queda: "+i+" intento"));
      }
      document.write("<p>La contraseña es correcta</p>");
    }  
} 

// Actividad 6. Mienteme pinocho mienteme.
function validarClaveSegundaVersion() {
    var clave = 123456;
    var inputClave = document.getElementById("claveInput").value;

    if (parseInt(inputClave) === clave) {
        document.getElementById("resultado").textContent = "La contraseña es correcta";
    } else {
        for (var i = 2; i > 0; i--) {
            inputClave = parseInt(prompt("Introduzca la clave. Le quedan: " + i + " intentos"));
            if (inputClave === clave) {
                document.getElementById("resultado").textContent = "La contraseña es correcta";
                return;
            }
        }
        document.getElementById("resultado").textContent = "Ha agotado todos los intentos.";
    }

}

// Intentar cuando se dé los arrays
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
function granDescuentoTienda(){
    var importeCompra= 0;
    var descuentoEneroFebrero=0.80 ; //Descuento del 20% Enero y Feberero
    var descuentoJulioAgostoOctubre= 0.85; //Descuento del 15% Julio y Agosto
    var descuentoNoviembreDiciembre= 0.75; //Descuento del 25% Noviembre y Diciembre
    var total= 0;
    var mes= " ";

    importeCompra = parseFloat(document.getElementById("importe").value)
    mes = (document.getElementById("mes").value)
    mes= (mes.toLowerCase());

    switch(mes){
        case "enero": case "febrero":
            total= importeCompra*descuentoEneroFebrero;
            document.getElementById("totalDescuento1").innerText="El total de la compra es: "+total
        break;

        case "julio": case "agosto": case "octubre":
            total=importeCompra*descuentoJulioAgostoOctubre;
            document.getElementById("totalDescuento2").innerText="El total de la compra es: "+total

            // document.write("<p>El total de la compra es: "+total+"</p>")
        break;

        case "noviembre": case "diciembre":
            total=importeCompra*descuentoNoviembreDiciembre;
            document.getElementById("totalDescuento3").innerText="El total de la compra es: "+total
            // document.write("<p>El total de la compra es: "+total+"</p>")
        break;

        default:
            total=importeCompra;
            document.getElementById("totalSinDescuento").innerText="El total de la compra es: "+total
            // document.write("<p>El total de la compra es: "+total+"</p>")
        break;
    }
}

// Actividad 12
function comprobar(){
    let operador=document.getElementById("operadores").value;
    resultado = eval(operador);
    document.getElementById("resultado").innerHTML="Resultado: "+resultado;
}

/**
 * 

// 
    

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



