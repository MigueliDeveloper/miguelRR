function cambiar(){
    document.getElementById('matrix').src="img/brad.jpg";
}

function volver(){
    document.getElementById('matrix').src="img/stritcht.jpg";
}

// funciones desde el ejercio 2 hasta el 18

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

//La actividad 7 no se incluye ya que le proposito de la tarea era recopilar los ejercicio de la actividad 2 al 6 y ya se refleje en esta actividad 
//La actividad 8 tampoc se refleja en este examen ya que el objetivo de ella era construir dos diagramas de flujo
//Activididad 9
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

//Actividad 10
function descuentoComercioMeses(){
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
}

// Actividad 11
function ingresarId(){
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

}

//Actividad 12
function comprobar(){
    let operador=document.getElementById("operadores").value;
    resultado = eval(operador);
    document.getElementById("resultado").innerHTML="Resultado: "+resultado;
}

//Actividad 14
function diaSemana(){
    var diasSemana;

    console.log(diasSemana);
    diasSemana = new Array(7);
    console.log(diasSemana);

    diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

    document.write(diasSemana);

        for(let i=0; i<diasSemana.length; i++){
            document.write("</br>"+diasSemana[i]);
        }
}

// Actividad 15
function verNombres(){
    var nombres;

    nombres= new Array(5);

    nombres = ['Menganito', 'Fulanito', 'Rosario', 'María', 'Luis']

    // Devuelve el array con el lugar (índice del array)

    for(let i=0; i<nombres.length; i++){
        var ans= ("</br>Indice del array: "+i+" Nombre: "+nombres[i]);
        document.getElementById("resultado").append(ans);
    }
    // document.getElementById("resultado").appendChild(ans);
    // document.getElementById("resultado").innerHTML="Indice del array: "+nombres;

}

//Actividad 16
function recorrerMatrizMulti2d(){
    var arrayMulti;
    arrayMulti = new Array(3);

    /**
     * arrayMulti[0] = [1, 2, 3];
     * arrayMulti[1] = [4, 5, 6];
     * arrayMulti[2] = [7, 8, 9];
     * 
     * */
    arrayMulti = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    // voy hacer el recorrido de la matriz 2d en dos bucles for i y j .
    document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>");
    for (i = 0; i < arrayMulti.length; i++) {
        document.write("<tr>")
        document.write("<td><b>Array " + i + "</b></td>")

        for (j = 0; j < arrayMulti[i].length; j++) {
            document.write("<td>" + arrayMulti[i][j] + "</td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")


    for (i = 0; i < arrayMulti.length; i++) {
        document.write("<p>Array " + i + "</p>");

        for (j = 0; j < arrayMulti[i].length; j++) {
            document.write("<p>" + arrayMulti[i][j] + "</p>")
        }
    }

    // El método forEach
    arrayMulti.forEach(function (array) {
        array.forEach(function (element){
            document.write(element);

        });
    });

    // El método forEach función flecha
    arrayMulti.forEach(array => {

        arrayMulti.forEach(element => {
            document.write(element);
        });
    });

}

//Actividad 17
function pulsar(){
    var arr=[];
    arr=document.formulario.miarea.value.split(" ");
    var nPalabras=arr.length;
    var pPalabra=arr[0];
    var uPalabra=arr[arr.length-1];
    document.getElementById("resultado").innerHTML="Número de palabras: "+nPalabras+"</br> Primera palabra "+pPalabra+"</br> Ultima palabra: "+uPalabra;
}


var alumnos = [];

document.getElementById("alumnoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var codigo = document.getElementById("codigo").value;
  var nombre = document.getElementById("nombre").value;
  var edad = document.getElementById("edad").value;
  var correo = document.getElementById("correo").value;
  var telefono = document.getElementById("telefono").value;
  var tema = document.getElementById("tema").value;

  var alumno = {
    codigo: codigo,
    nombre: nombre,
    edad: edad,
    correo: correo,
    telefono: telefono,
    tema: tema
  };

  alumnos.push(alumno);

  mostrarDatosAlumno(alumno);
  document.getElementById("alumnoForm").reset();
});

function mostrarDatosAlumno(alumno) {
  var datosAlumno = document.getElementById("datosAlumno");
  datosAlumno.innerHTML = "Código: " + alumno.codigo + "<br>" +
                          "Nombre: " + alumno.nombre + "<br>" +
                          "Edad: " + alumno.edad + "<br>" +
                          "Correo: " + alumno.correo + "<br>" +
                          "Teléfono: " + alumno.telefono + "<br>" +
                          "Tema: " + alumno.tema;
}

