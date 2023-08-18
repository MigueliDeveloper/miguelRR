// Clase
class Camiseta{
    //Propiedades (características del objeto)
    private color: string
    private modelo: string
    private marca: string
    private talla: string
    private precio: number

    constructor(color:string, modelo:string, marca:string, talla:string, precio:number){
        this.color = color
        this.modelo = modelo
        this.marca = marca
        this.talla = talla
        this.precio = precio

    }

    public setColor(color:string){
        this.color=color
    }

    public getcolor(){
        return this.color
    }
}
    // Clase hija
    class Sudadera extends Camiseta{
    
        public capucha: boolean;

        constructor(color:string, modelo:string, marca:string, talla:string, precio:number){
            super(color, modelo, marca, talla, precio)
            this.capucha=true; // Valor predeterminado
        }

        setCapucha(capucha: boolean){
            this.capucha = capucha
        }

        getCapucha():boolean{
            return this.capucha
        }
    }

    var camiseta = new Camiseta("Rojo", "Manga Corta", "Una", "L", 30)
    console.log(camiseta)
    console.log(Camiseta)

    var sudadera_una = new Sudadera("Rojo", "Manga Corta", "Una", "L", 30)
    sudadera_una.setCapucha(true)

    console.log(sudadera_una)







