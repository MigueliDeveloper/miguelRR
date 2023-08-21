// 2.	Utilizando JQuery, aplicar estilos y eventos a los botones de Acceso Profesor y Alumno.
// 3.	Utilizando JQuery, cambiar estilos a los elementos de la aplicación (colores, imágenes, etc).


//Si se pone el script en el header. Se pone esta funcion para que cargue despues la pagina index.html
$(document).ready(function(){

    var estadoContraste = false;

    $("#botonContraste").click(function(){
        if (estadoContraste) {
            // Cambiar a estilos normales
            $("body").css("background-color", "white");
            $("body").css("color", "black");
            estadoContraste = false;
        }else{
            // Cambiar a estilos de alto contraste
            $("body").css("background-color", "black");
            $("body").css("color","white");
            estadoContraste = true;
        }
    });
});

/**
 * Este código utiliza el evento click para cambiar los estilos de fondo y color del texto del elemento body de la página. Al hacer clic en el botón, se verifica el estado actual del contraste y se cambian los estilos en consecuencia.
Recuerda que también puedes personalizar los estilos de acuerdo a tus necesidades. Por ejemplo, puedes cambiar los estilos de otros elementos de la página, como encabezados, enlaces, etc.
Es importante tener en cuenta que al implementar cambios de contraste en una página web, es recomendable seguir las pautas y estándares de accesibilidad web establecidos por el W3C. Puedes consultar la normativa en el enlace que proporcionaste: https://www.w3.org/WAI/standards-guidelines/es.
 */

   
    var estadoBoton = false;
    $(".botonInformacion").click(function(){
        if (estadoBoton) {
            $(".informacionAcademia").css("background-image", "url('media/imagen-fondo.png')");
            $(".infomracionAcademia h1, p").css("color", "inherit");
            estadoBoton = false;
        } else {
            $(".informacionAcademia").css("background-image", "url('media/imagenCurso.jpg')");
            $(".informacionAcademia h1, p").css("color", "#ffff00");
            estadoBoton = true;
        }
    });

    $("#botonProfesora").hover(function(){
        $("<div>¡Has entrado en el botón de Profesora!</div>").dialog();
    },
    function(){
        $("<div>¡Adiós! ¡Ahora deja el botón de Profesora!</div>").dialog();

    });

    $("input").focus(function(){
        $

    })

    $("#boton").click(function(){

        $(this).addClass('highlight');

    })



})

