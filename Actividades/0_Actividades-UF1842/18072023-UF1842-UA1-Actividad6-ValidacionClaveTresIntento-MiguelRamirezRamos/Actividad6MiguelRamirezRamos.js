// Validación clave
/**
 * 1.- Se desea validar una clave que sea 123456 hasta en tres oportunidades.
 
  InicioProceso
 *  Creo una función de validación de clave. no incluye ningun parámetro dentro de la función
 *  Declaración de la variable clave con valor 123456
 *  Leer clave
 *  scribir "Introduzca la clave. Tiene tres intentos"
 *  
 *  Si (clave == 123456) Entonces
 *    La contraseña es correcta
 *  Sino
 *    para (contador de tres intentos)
 *      "Introduzca la clave. Le queda: "+contador+" intento"
 *    Cuando introduzca la contraseña correcta salga del para
 *    La contraseña es correcta
 * FinProceso
 * 
*/
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

validarClave();