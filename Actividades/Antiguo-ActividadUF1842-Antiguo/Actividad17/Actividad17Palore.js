function pulsar(){
    var arr=[];
    arr=document.formulario.miarea.value.split(" ");
    var nPalabras=arr.length;
    var pPalabra=arr[0];
    var uPalabra=arr[arr.length-1];
    document.getElementById("resultado").innerHTML="Número de palabras: "+nPalabras+"</br> Primera palabra "+pPalabra+"</br> Ultima palabra: "+uPalabra;
}