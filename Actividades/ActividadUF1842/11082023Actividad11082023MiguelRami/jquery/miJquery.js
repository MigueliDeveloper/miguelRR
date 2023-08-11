$(document).ready(function(){
    // Formulario de  acceso

    // Formulario de Registro
    var formulario = $('#formulario-container');

    // Añadir campos al formulario
    formulario.append('<form><label for="codigo">Código:</label>');
    formulario.append(' <input type="number" name="codigo" id="codigo"/>');

    formulario.append('<label for="nombre">Nombre:</label>');
    formulario.append('<input type="text" name="nombre" id="nombre" placeholder="Nombre"/>');

    formulario.append('<label for="apellidos">Apellidos:</label>');
    formulario.append('<input type="text" name="apellidos" id="apellidos"/>');

    formulario.append('<label for="correoElectronico">Correo Electrónico:</label>');
    formulario.append('<input type="email" name="correoElectonico" id="correoElectronico"/>');

    formulario.append('<label for="edad">Edad:</label>');
    formulario.append('<input type="number" name="edad" id="edad"');

    formulario.append('<input type="submit" value="Registrar"></form>')

    // Inyectar el formulario en el contenedor
    $('#formulario-container').append(formulario);


    
    // función acordeón
    $(function(){
        $("#accordion").accordion();
    });

    //Modo Oscuro 
    $(".botonConstraste").click(function(){
        estadoContraste =!estadoContraste;

        if(estadoConstraste){
            // Cambiar a estilos normales
            $("body").css("background-color", "white");
            $("body").css("color", "black");
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
        
});