window.addEventListener('load', () =>{


    var formulario = document.querySelector("#formulario");
    var boxInfo = document.querySelector(".info");
    boxInfo.style.display= "none";

    formulario.addEventListener('submit', function(){
        
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null || nombre.trim() == ""){

            document.querySelector("#errorNombre").innerHTML = "Nombre no válido";
            document.querySelector("#errorNombre").style.color= "red";
            return false

        }else{
            document.querySelector("#errorNombre").innerHTML = "Edad válida";
            document.querySelector("#errorNombre").style.color= "green";
        }

        if(apellido.trim() == null || apellido.trim() == ""){
            document.querySelector("#errorApellido").innerHTML = "Apellido no válidos";
            document.querySelector("#errorApellido").style.color= "red";
            return false

        }else{
            document.querySelector("#errorApellido").innerHTML = "Apellido válido";
            document.querySelector("#errorApelido").style.color= "green";

        }

        if(edad == null || edad <= 0 || isNaN(edad)){

            document.querySelector("#errorEdad").innerHTML = "Edad no válida";
            document.querySelector("#errorEdad").style.color= "red";
            return false;
        }else{
            document.querySelector("#errorEdad").innerHTML = "Edad válido";
            document.querySelector("#errorEdad").style.color= "green";

        }

       
        boxInfo.style.display = "block";

        var iNombre = document.querySelector("#iNombre span");
        var iApellidos = document.querySelector("#iApellidos span");
        var iEdad = document.querySelector("#iEdad span");

        iNombre.innerHTML = nombre;
        iApellidos.innerHTML = apellido;
        iEdad.innerHTML = edad;

    })




   


})


