$(document).ready(function(){
    // Formulario de  acceso
    $('.acceso').click(function(){

        var formulario = $('#formularioAcceso-container');

        $('#formularioAcceso-container').empty();

        // Añadir campos al formulario
        formulario.append('<form> <label for="correoElectronico">Correo Electrónico:</label>');
        formulario.append('<input type="email" name="correoElectonico" id="correoElectronico"/>');

        formulario.append('<label for="contrasena">Contraseña:</label>');
        formulario.append('<input type="password" name="contrasena" id="contrasena"/ >');

        formulario.append('<input type="submit" value="Iniciar sesión"> </form>');

        // Agregar el formulario al contenedor
        $('#formularioAcceso-container').append(formulario);

    });


    // Formulario de Registro
    $('.registro').click(function(){

        var formulario = $('#formulario-container');

        $('#formulario-container').empty();

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
    
        formulario.append('<input type="submit" value="Registrar"></form>');
    
        // Inyectar el formulario en el contenedor
        $('#formulario-container').append(formulario);
  
    });

    // Parte Ajax formulario de registro
    $.get("https://reqres.in/api/users", { page: 2}, function(respuesta) {
        respuesta.data.forEah((element, index) => {
            $('#datos').append("<p>"+element.first_name+" "+ element.last_name + "</p>");
            
            
        });
    });

    $('#formulario-container').submit(function(e){
        e.preventDefault();
        var usuario = {
            codigo: $('input[name="codigo"]').val(),
            nombre: $('input[name="nombre"]').val(),
            apellidos: $('input[name="apellidos"]').val(),
            correoElectronico: $('input[name="correoElectronico"]').val(),
            edad: $('input[name="edad"]').val(),
            fotografia: $('input[name="fotografia"]').val(),
        };

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...") 
            },
            succes: function(respuesta){
                console.log(respuesta)

            },
            error: function(){
                console.log("Ha ocurrido un error")
            },
            timeout: 1000


        })

    });   

    // Función información
    $('.informacion').click(function(){

        var cuadroDeDialogo = $('#cuadroDeDialogo');

        $('#cuadroDeDialogo').empty();

        var nombreAcademia= "Academia XYZ";
        var direccion = "Calle Principal, Ciudad";
        var telefono= "123-456-789";
        var descripcion = "Somos una academia dedicada a la enseñanza de diversas disciplinas.";

        cuadroDeDialogo.append("<h1>"+nombreAcademia+"</h1>");
        cuadroDeDialogo.append("<p>Dirección: " + direccion + "</p>");
        cuadroDeDialogo.append("<p>Teléfono: " + telefono + "</p>");
        cuadroDeDialogo.append("<p>" +descripcion+"</p>");
    });

    // Función curso
    $('.curso').click(function(){

        var cuadroDeDialogo = $('#cuadroDeDialogo');

        $('#cuadroDeDialogo').empty();

        cuadroDeDialogo.append('<div><video src="media/VideoClase.mp4" controls></div>');
        cuadroDeDialogo.append('<p>Esto es un video</p>');

        // <div class="informacionAcademia">
        // <div>
        //     <video src="media/VideoClase.mp4" controls></video>
        // </div>
        // <p>Esto es un video</p>
        // </div>

    });

    // Función contacto
    $('.contacto').click(function(){

        var cuadroDeDialogo = $('#cuadroDeDialogo');

        $('#cuadroDeDialogo').empty();

        cuadroDeDialogo.append('<form action="" method="POST" id="formulario" onsubmit="return false"> ');
        cuadroDeDialogo.append('<label for="nombre>Nombre</label> ');
        cuadroDeDialogo.append('<input type="text" name="name" id="nonbre" required maxlength="50"><br>');
        cuadroDeDialogo.append('<span id="errorNombre></span>');
        cuadroDeDialogo.append('<label form="email">Correo Electrónico: </label>');
        cuadroDeDialogo.append('<input type="text" id="asunto" name="asunto" required>');
        cuadroDeDialogo.append('<label for="asunto">Asunto:</label>');
        cuadroDeDialogo.append('<input type="text" id="asunto" name="asunto" required>');
        cuadroDeDialogo.append('<label for="mensaje">Mensaje:</label>');
        cuadroDeDialogo.append('<texarea name="mensaje" id="mensaje" cols="4" rows="4"</texarea>');
        cuadroDeDialogo.append(' <button id="botonAnadir" onclick="anadir()">Enviar</button> </form>');
    });
    
    // función acordeón
    $(function(){
        $(".accordion").accordion();
    });

    //Modo Oscuro 
    $(".botonContraste").toggle(function(){
       
            // Cambiar a estilos de alto contraste
            $("*").css("background-color", "black");
            $("*").css("color", "white");
            $(".enlace").css("color", "white");
            $("*").css("font-size", "30px");
             // $("#accordion").css("background-color", "black");
           // estadoContraste = true;

    });
    
        
});