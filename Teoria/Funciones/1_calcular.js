// function calcular(numero1, numero2){

//     document.write("Sumar: "+(numero1+numero2)+"<br/>");
//     document.write("Restar: "+(numero1-numero2)+"<br/>");
//     document.write("Multiplición: "+(numero1*numero2)+"<br/>");
//     document.write("División: "+(numero1/numero2)+"<br/>");
//     document.write("<hr>")
// }

// calcular(10, 12);
// calcular(5, 6);
// calcular(3, 9);
// calcular(34, 35);

// buclefor
// for(var n=1; n<=5; n++){
//     document.write(n+"<br/>");
//     calcular(n, 5);
// }

// Parámetros opcionales
function calcular(numero1, numero2, ver = False){
    
    if(ver == false){
        document.write("Sumar: "+(numero1+numero2)+"<br/>");
        document.write("Restar: "+(numero1-numero2)+"<br/>");
        document.write("Multiplición: "+(numero1*numero2)+"<br/>");
        document.write("División: "+(numero1/numero2)+"<br/>");
        document.write("<hr>")
    }else{
        document.write("No tengo nada que mostrar!!!")

    } 
}

calcular(20, 5, false);
// El parametro ver es opcional, si no se pone hará las operaciones igualmente
calcular(20, 5);

calcular(20, 5, true)
