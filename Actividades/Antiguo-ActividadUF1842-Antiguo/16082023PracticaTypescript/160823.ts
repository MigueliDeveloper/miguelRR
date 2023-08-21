console.log("Hola, TypeScript")

// let mivariable = "Esto es una cadena de carácteres"
// let variablenumerica = 5

let mivariable = "Hola"
let minumero = 13;

// console.log(mivariable)



// console.log(typeof variablenumerica)

if(minumero == 10 && mivariable == "Hola"){

    console.log("El valor es 10")

}else if(minumero == 11 || mivariable == "Hola"){

    console.log("El valor es 11")
}else{
    console.log("El valor no es 10 ni 11")
}

function mifuncion(): string {
    return "Mi función"
}

console.log(mifuncion())

// List --
let miLista: Array<string> = ["miNomre", "miApellido", "miPagina"]
console.log(miLista)

// El objeto Set le permite almacenar valores únicos de cualquier tipo
let miSet: Set<string> =  new Set(["miNombre", "miApellido", "miPagina"])
miSet.add("36")
console.log(miSet)

// Map -- Estructura de datos de par de valores clave.

let miMapa: Map<string, number> = new Map([["Manuel", 54], ["Javier", 19]])
miMapa.set("Miguel", 39)
console.log(miMapa.get("Javier"))

// Bucles
for(const value of miLista){
    console.log(value)
}

let contador = 0;
while(contador < miLista.length){
    console.log(miLista[contador])
    contador++
}

class miClase{
    nombre: string
    edad: number
    
    // metodo que se pasa dos parámetro nombre y edad
    constructor(nombre: string, edad: number){
        this.nombre = nombre
        this.edad = edad 

    }
}

let MiClase: miClase= new miClase("Javier", 19)

console.log(miClase)
console.log(MiClase.nombre)

