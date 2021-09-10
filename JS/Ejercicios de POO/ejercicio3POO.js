class Rectangulo{
    constructor(alto,ancho){
        this.alto = alto
        this.ancho = ancho
    }

    mostrardatos(){
        document.write(`
        Alto: ${this.alto}<br>
        Ancho: ${this.ancho}<br>
        Perimetro: ${parseInt(2*this.ancho+2*this.alto)}<br>
        Area: ${parseInt(this.alto*this.ancho)}<br>`)
        document.write("<br>")
    }

    set modificaralto(altonuevo){
        this.alto = altonuevo
    }

    set modificarancho(anchonuevo){
        this.ancho = anchonuevo
    }
}

let rectangulo = new Rectangulo(5,10) //se crea la instancia del objeto

rectangulo.mostrardatos()
rectangulo.modificaralto = 100
rectangulo.modificarancho = 100
rectangulo.mostrardatos()
rectangulo.modificaralto = 300
rectangulo.modificarancho = 300
rectangulo.mostrardatos()