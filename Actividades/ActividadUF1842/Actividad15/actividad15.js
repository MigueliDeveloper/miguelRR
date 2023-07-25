/***
 * Se plantea la creación de un script:
 * 
 * Crea un array con 5 nombres.
 * Recorre el array
 * Devuelve el array con el lugar (índice del array)
 */

function verNombres(){
    var nombres;

    nombres= new Array(5);

    nombres = ['Menganito', 'Fulanito', 'Rosario', 'María', 'Luis']

    // Devuelve el array con el lugar (índice del array)

    for(let i=0; i<nombres.length; i++){
        var ans= ("</br>Indice del array: "+i+" Nombre: "+nombres[i]);
        document.getElementById("resultado").append(ans);
    }
    // document.getElementById("resultado").appendChild(ans);
    // document.getElementById("resultado").innerHTML="Indice del array: "+nombres;




}

