let lado1 = parseInt(prompt("Ingrese la altura del rectangulo"))
let lado2 = parseInt(prompt("Ingrese el ancho del rectangulo"))
resultado(lado1,lado2)

function resultado(lado1,lado2){
    let perimetro = 2*(lado1+lado2)
    document.write("El perimetro del rectangulo es de: "+perimetro+"u")
}
