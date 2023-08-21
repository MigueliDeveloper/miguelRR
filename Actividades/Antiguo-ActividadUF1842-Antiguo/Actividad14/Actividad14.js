/**
 * Se plantea la creación de un script:
 * Un array de nombre diasSemana para contener 7 elementos. 
 * Luego rellena el array con los nombres de los días comenzando por Lunes hasta Domingo.
 * 
 */

var diasSemana;

console.log(diasSemana);
diasSemana = new Array(7);
console.log(diasSemana);

diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

document.write(diasSemana);

    for(let i=0; i<diasSemana.length; i++){
        document.write("</br>"+diasSemana[i]);
    }


// document.write("</br>"+diasSemana[0]);
// document.write("</br>"+diasSemana[1]);
// document.write("</br>"+diasSemana[2]);
// document.write("</br>"+diasSemana[3]);
// document.write("</br>"+diasSemana[4]);
// document.write("</br>"+diasSemana[5]);
// document.write("</br>"+diasSemana[6]);
console.log(diasSemana);