/**
 * Se plantea la creación de un script dada esta matriz [[1,2,3],[4,5,6],[7,8,9]]:
 * 
 * Para recorrer los elementos de la matriz y añadirlo al documento html
 * La práctica se realizará de manera individual. 
 * 
 */
function recorrerMatrizMulti2d() {
    var arrayMulti;
    arrayMulti = new Array(3);

    /**
     * arrayMulti[0] = [1, 2, 3];
     * arrayMulti[1] = [4, 5, 6];
     * arrayMulti[2] = [7, 8, 9];
     * 
     * */
    arrayMulti = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    // voy hacer el recorrido de la matriz 2d en dos bucles for i y j .
    document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>");
    for (i = 0; i < arrayMulti.length; i++) {
        document.write("<tr>")
        document.write("<td><b>Array " + i + "</b></td>")

        for (j = 0; j < arrayMulti[i].length; j++) {
            document.write("<td>" + arrayMulti[i][j] + "</td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")


    for (i = 0; i < arrayMulti.length; i++) {
        document.write("<p>Array " + i + "</p>");

        for (j = 0; j < arrayMulti[i].length; j++) {
            document.write("<p>" + arrayMulti[i][j] + "</p>")
        }
    }

    // El método forEach
    arrayMulti.forEach(function (array) {
        array.forEach(function (element){
            document.write(element);

        });
    });

    // El método forEach función flecha
    arrayMulti.forEach(array => {

        arrayMulti.forEach(element => {
            document.write(element);
        });
    });

}
