// 2.	Utilizando JQuery, aplicar estilos y eventos a los botones de Acceso Profesor y Alumno.
// 3.	Utilizando JQuery, cambiar estilos a los elementos de la aplicación (colores, imágenes, etc).


//Si se pone el script en el header. Se pone esta funcion para que cargue despues la pagina index.html
$(document).ready(function(){
   
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

