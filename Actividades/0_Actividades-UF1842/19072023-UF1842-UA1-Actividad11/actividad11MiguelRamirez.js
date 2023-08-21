/**
 * Se plantea la creación de un script en un archivo de javascript, para comprobar  la identidad de una persona.

•	Escribe un Código que pregunte por el inicio de sesión con prompt

•	Si el visitante ingresa "Admin", 

o	entonces prompt(pregunta) por una contraseña, 
o	si la entrada es una línea vacía o Esc – muestra “Cancelado.”
o	si es otra cadena de texto – entonces muestra “Incorrecto”

•	La contraseña se comprueba de la siguiente manera:

o	Si es igual a “Webmaster”, entonces muestra “Bienvenido!”,
o	Si es otra cadena de texto – muestra “Contraseña incorrecta”,
o	Para una cadena de texto vacía o una entrada cancelada, muestra “Cancelado.”

 * 
 */

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


      

  


