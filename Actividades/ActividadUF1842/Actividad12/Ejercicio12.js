// var operador
// var resultado;

// operador = prompt("Introduce los dato a comprobar: ");

// resultado = eval(operador);


// document.write("<p>Resultado= " + resultado + "</p>");

function comprobar(){
    let operador=document.getElementById("operadores").value;
    resultado = eval(operador);
    document.getElementById("resultado").innerHTML="Resultado: "+resultado;
}