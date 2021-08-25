let numero1 = parseInt(prompt("Ingrese un primer numero:"))
let numero2 = parseInt(prompt("Ingrese un segundo numero:"))

document.write("Numero 1= "+numero1)
document.write("<br>Numero 2= "+numero2)

// Estructura if
/* if (condicion logica && condicion logica || condicion logica){
    codigo a ejecutar si la respuesta es verdadera o true
}
*/

if(numero1>numero2){
    document.write("<br>El numero uno es mayor al numero dos")
}else{
    if(numero1 == numero2){
        document.write("<br>Los numeros ingresados son iguales")
    }else{
        document.write("<br>El numero dos es mayor al numero uno")
    }
}
    
