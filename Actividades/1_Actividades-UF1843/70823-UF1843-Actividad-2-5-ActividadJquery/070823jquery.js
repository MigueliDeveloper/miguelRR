$(document).ready(function(){

    //Selectores
    var rojo = $('#rojo');
    rojo
    .css("background-color", "red")
    .css("color", "white");

    var amarillo = $('#amarillo');
    amarillo
    .css("background-color", "yellow")
    .css("color", "black")

    var verde = $('#verde');
    verde
    .css("background-color", "green")
    .css("color", "white");

    rojo.addClass('recuadro');

    $('#amarillo').removeClass
    ('recuadro');

    var elemento = $('.recuadro');
    elemento
    .css("border", "2px solid black")
    .css("font-size", "1.5em")

    // Selector por etiqueta
    $('[title="Google"]').css("color","red")

    // Eventos
    // var contenedor = $('#contenedor');
    // contenedor
    // .css("color", "white");
    // contenedor.mouseover(function(){
    //     $(this).css("background", "red");

    // });
    // contenedor.mouseout(function(){
    //     $(this).css("background", "green");

    // });
    // function cambiaRojo(){
    //     $(this).css("background", "red");

    // } 

    // function cambiaVerde(){
    //     $(this).css("background", "green");

    // }
    
    // contenedor.hover(cambiaRojo, cambiaVerde);

    $(document).mousemove(function(){
        $('html').css("cursor", "none");
        $('#sigueme')
        .css("left", event.clientX)
        .css("top", event.clientY)
    });

    $('#add-button')

    .click(function(){

        $('#menu').prepend('<li><a href="'+$('#add-link').val()+'">'+$('#add-link').val());
        $('#add-link').val('');
        reloadLinks();  
    })

    function reloadLinks(){
        $('a').each(function(index){
            var esto = $(this);
            var enlace = esto.attr("href");
            esto.attr("target", "_blank")
            esto.text(enlace);
            console.log(esto);
        })
    }

    $("#animar").click(function(){
    var caja = $("#contendor");

    caja.animate({
        marginLeft:  '400px',
        fontSize: '40px',
        heigth: '120px'}, 'slow')
        .animate({
            borderRadius: '25%',
            marginTop: '200px'

        },'fast')
    })

    $('#contenedor').draggable();

    $( function(){
        $("#draggable").draggable();
        $( "#droppable" ).droppable({
            drop: function( event, ui) {
                $( this )
                .addClass( "ui-state-highlight" )
                .find("p")
                .html("Dropped!" );

            }
        });
    });


});