/**
 * InicioProceso
   Escribir "¿Tienes el titulo de bachiller?"
   Leer bachiller
   si (bachiller="si") Entonces
      Escribir "Puedes acceder al grado superior"
   Sino
      Escribir "¿Tienes la prueba de acceso superada?"
      Leer prueba_acceso
      si (prueba_acceso="si") Entonces
         Escribir "Puedes acceder al grado superior"
      Sino
         Escribir "No puedes acceder a un grado superior"
      FinSi
   FinSi
FinProceso

 * 
 */
function tituloBachiller(){
    var preguntaTitulo= prompt("¿Tienes el titulo de bachiller?");

    if(preguntaTitulo.toLowerCase()=="si"){
        document.write("<p>Puedes acceder al grado superior</p>");

    }else if(preguntaTitulo.toLowerCase()=="no"){
        var pruebaAcceso= prompt("¿Tienes la prueba de acceso superada?");
        
        if(pruebaAcceso.toLowerCase()=="si"){
            document.write("<p>Puedes acceder al grado superior</p>");

        }else if(pruebaAcceso.toLowerCase()=="no"){
            document.write("<p>No puedes acceder a un grado superior</p>");

        }
    }
}

tituloBachiller()

