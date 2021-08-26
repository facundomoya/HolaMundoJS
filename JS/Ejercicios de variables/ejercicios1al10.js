 //ejercicios con variables

//1

 alert("Sitio sospechoso");

//2

document.write("Hello World");

//3

document.write("<br>Suma:"+8);

//4

prompt("Ingrese su nombre de usuario:", "Facundo");
document.write("<br>¡Hola Facundo!");

//5

let numero1 = parseInt(prompt("Ingrese el primer numero:"))
let numero2 = parseInt(prompt("Ingrese el segundo numero:"))
document.write("<br>El resultado de la suma del numero uno y dos es: "+(numero1+numero2))

//6

let numero3 = parseInt(prompt("Ingrese el numero tres: "))
let numero4 = parseInt(prompt("Ingrese el numero cuatro: "))
document.write("<br>El numero tres es: "+numero3)
document.write("<br>El numero cuatro es: "+numero4)
if(numero3 > numero4){
    document.write("<br>El numero tres es el mayor")
}else if(numero3 < numero4){
    document.write("<br>El numero cuatro es el mayor")
}else{
    document.write("<br>Los dos numeros son iguales")
}
    
//7

let numero5 = parseInt(prompt("Ingrese el numero cinco: "))
let numero6 = parseInt(prompt("Ingrese el numero seis: "))
let numero7 = parseInt(prompt("Ingrese el numero siete: "))
document.write("<br>El numero cinco es: "+numero5)
document.write("<br>El numero seis es: "+numero6)
document.write("<br>El numero siete es: "+numero7)
if(numero5 > numero6 && numero5 > numero7){
    document.write("<br>El numero cinco es el mayor")
}else if(numero6 > numero7 && numero6 > numero5){
    document.write("<br>El numero seis es el mayor")
}else if(numero7 > numero6 && numero7 > numero5){
    document.write("<br>El numero siete es el mayor")
}else{
    document.write("<br>Los tres numeros son iguales")
}

//8

let numero8 = parseInt(prompt("Ingrese el numero ocho: "))
document.write("<br>El numero ocho es: "+numero8)
resultado = numero8 % 2
if(resultado == 0){
    document.write("<br>El numero es divisible por dos")
}else{
    document.write("<br>El numero no es divisible por dos")
} 

//10

let numero9 = parseInt(prompt("Ingrese el numero nueve: "))
document.write("<br>El numero nueve es: "+numero9)
result = numero9 % 2
result2 = numero9 % 3
result3 = numero9 % 5
result4 = numero9 % 7
if(result == 0){
    document.write("<br>El numero es divisible por dos")
}if (result2 == 0){
    document.write("<br>El numero es divisible por tres")
}if (result3 == 0){
    document.write("<br>El numero es divisible por cinco")
}if (result4 == 0){
    document.write("<br>El numero es divisible por siete")
}





