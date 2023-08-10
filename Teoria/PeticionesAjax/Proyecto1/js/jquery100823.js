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
            nombre: $('input[name="nombre"]').val(),
            web: $('input[name="web"]').val()
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