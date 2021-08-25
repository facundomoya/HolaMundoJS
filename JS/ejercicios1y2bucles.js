//1

let edad = parseInt(prompt("Ingrese la edad:"))
if(edad >= 18){
    document.write("La persona puede conducir")
}else{
    document.write("La persona NO puede conducir")
} 

//2

 let nota = prompt("Ingrese la nota (de 0 a 10)")
if(nota <= 2){
    alert("Muy deficiente")
}else if(nota <= 4){
    alert("Insuficiente")
}else if(nota <= 6){
    alert("Suficiente")
}else if(nota == 7){
    alert("Bien")
}else if(nota <= 9){
    alert("Notable")
}else if(nota == 10){
    alert("Sobresaliente")
}else if(nota < 0 || nota > 10){
    alert("Numero erroneo")
    alert("Introduce un numero valido")
} 