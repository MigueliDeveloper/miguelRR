/**
 *  1.- Crear una tabla de multiplicar en documento html de un número introducido por ventana.


    2.- Crear todas las tablas de multiplicar hasta el 10, mostrar en el mismo documento html.


    3.- Crear tablas de multiplicar hasta el número introducido en el apartado 1. Mostrar en el mismo documento html.

 */

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

tablaDeMultiplicar();

/**
 * function mostrarTablaMultiplicar(numero) {
  console.log(`Tabla de multiplicar del ${numero}:`);
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

function mostrarTodasLasTablas() {
  for (let i = 0; i <= 10; i++) {
    console.log(`Tabla de multiplicar del ${i}:`);
    for (let j = 0; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('-------------------');
  }
}

function mostrarTablasAnteriores(numero) {
  console.log(`Tablas de multiplicar anteriores a ${numero}:`);
  for (let i = 0; i < numero; i++) {
    console.log(`Tabla de multiplicar del ${i}:`);
    for (let j = 0; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('-------------------');
  }
}

var numeroIngresado = parseInt(prompt("Ingresa un número del 0 al 10:"));

if (numeroIngresado >= 0 && numeroIngresado <= 10) {
  mostrarTablaMultiplicar(numeroIngresado);
  mostrarTodasLasTablas();
  mostrarTablasAnteriores(numeroIngresado);
} else {
  console.log("Número inválido. Por favor, ingresa un número del 0 al 10.");
}

 */
  