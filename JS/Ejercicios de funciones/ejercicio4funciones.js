let numero = parseInt(prompt("Ingrese un numero cualquiera"))
resultado(numero)

function resultado(numero){
    let i = 1
    while(i<=10){
        let producto = i* numero
        document.write(""+i,"","x",+numero,"= "+producto)
        document.write("<br>")
        i++
    }
}