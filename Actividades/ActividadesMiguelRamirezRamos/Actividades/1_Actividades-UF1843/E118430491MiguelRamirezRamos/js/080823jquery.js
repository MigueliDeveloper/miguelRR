
// 1.- Se propone la implementación de medidas de accesibilidad según normativa.
// Discapacidad visual. Alto Contraste. Tamaño de textos.
// Comprobar
$(document).ready(function(){

    var estadoContraste = false;

    $(".botonContraste").click(function(){
        estadoContraste =!estadoContraste;

        if(estadoContraste){
            // Cambiar a estilos normales
            $("body").css("background-color", "white");
            $("body").css("color", "black");
            $(".enlace").css("color", "black");
            $("body").css("font-size", "16px");
            // estadoContraste = false;
        }else{
            // Cambiar a estilos de alto contraste
            $("body").css("background-color", "black");
            $("body").css("color", "white");
            $(".enlace").css("color", "white");
            $("body").css("font-size", "30px");
            // $("#accordion").css("background-color", "black");
           // estadoContraste = true;
        }

    });   


/**
 * Se propone la implementación de medidas de usabilidad para mejorar la experiencia del 
 * usuario utilizando las librerías de JQuery. Puedes integrar:
 */

// a) Un acordeón de información para recopilar toda la información de la web.

    $(function(){
        $("#accordion").accordion();
    });
   


// b) Mediante Tooltip para ampliar la información.
    $(function(){
        $(document).tooltip();


    });


});