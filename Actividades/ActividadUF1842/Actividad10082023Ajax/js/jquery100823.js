$(document).ready(function () {

    // $('#datos').load("https://reqres.in/");

    // Recoger datos petición AJAX
    // Get y Post

    $.get("https://reqres.in/api/users", { page: 2 }, function (respuesta) {

        respuesta.data.forEach((element, index) => {
            $('#datos').append("<p>" + element.first_name + " " + element.last_name + "</p>");

        });
    });

    $('#formulario').submit(function (e) {
        e.preventDefault();
        var usuario = {
            codigo: $('input[name="codigo"]').val(),
            nombre: $('input[name="nombre"]').val(),
            apellidos: $('input[name="apellidos"]').val(),
            correoElectronico: $('input[name="correoElectronico"]').val(),
            edad: $('input[name="edad"]').val(),
            fotografia: $('input[name="fotografia"]').val()       
        };

        // $.post($(this).attr("action"), usuario, function (respuesta) {
        //     console.log(respuesta);
        // }).done(function () {
        //     alert("Usuario añadido");
        // });

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...")

            },
            success: function(respuesta){
                console.log(respuesta)
            },
            error: function(){
                console.log("Ha ocurrido un error")

            },
            timeout: 1000

        })

    });

});