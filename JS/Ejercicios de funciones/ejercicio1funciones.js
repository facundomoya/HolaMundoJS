let numero = parseInt(prompt("Ingrese un numero entero cualquiera"))
entero(numero)
if(solucion == 0){
    document.write("El numero ingresado es par")
}else{
    document.write("El numero ingresado es impar")
}

function entero(numero){
    let solucion = numero % 2
    if(solucion == 0){
        document.write("El numero ingresado es par")
    }else{
        document.write("El numero ingresado es impar")
    }
}