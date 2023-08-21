// BOM - Browser Object Model

console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(screen.width);
console.log(screen.height);

console.log(window.location);
function redirect(){
    window.location.href = "https://www.google.es/";
}

function vantananueva(url){
    // window.open(url);
    window.open(url, "", "width=400px", "height=300px");

}

window.addEventListener('load', () =>{

    function cambiarColor(){
        if(boton.computedStyleMap.background == "green"){
            boton.computedStyleMap.background == "red"

        }else{
            boton.computedStyleMap.background =="green"

        }
    }

    var boton=document.querySelector('#boton2');

    boton.addEventListener('click',
    function(){
        cambiarColor();
        this.style.border="5px solid black";
    })

    var input = document.querySelector('#nombre');
    input.addEventListener('focus',
    function(){
        console.log("Estas dentro del input");

    })

    input.addEventListener('blur',
    function(){
        console.log("Estas fuera del input");
    })

    input.addEventListener('keydown',
    function(event){
        console.log("Has  pulsado la tecla: "+String.fromCharCode(event.keyCode));

    })

    
   


})