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

        document.write("<p> La tabla de multiplicar de </p>"+ i);
        
        for(let j=0; j<=10; j++){
            document.write("<p>"+i+" x "+j+" = "+ i*j);

        }
    }

    for(let i = 0; i < seleccionTabla; i++){
        
        document.write("Tabla de multiplicar del "+i);

        for (let j = 0; j <= 10; j++) {
            document.write(i +" x "+ j +"="+ i * j);
        }
    }
}

tablaDeMultiplicar();

  