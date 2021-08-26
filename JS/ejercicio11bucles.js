let nombre1 = prompt("Ingrese el primer nombre")
let edad1 = Number(prompt("Ingrese la edad del primer nombre"))
let nombre2 = prompt("Ingrese el segundo nombre")
let edad2 =Number(prompt("Ingrese la edad del segundo nombre"))
let nombre3 = prompt("Ingrese el tercer nombre")
let edad3 =Number(prompt("Ingrese la edad del tercer nombre"))
let maxi = Math.max(edad1,edad2,edad3)
if(maxi == edad1){
    document.write("La persona con mayor edad es: "+nombre1)
}else if(maxi == edad2){
    document.write("La persona con mayor edad es: "+nombre2)
}else if(maxi == edad3){
    document.write("La persona con mayor edad es: "+nombre3)
}else if(maxi == edad1 && maxi == edad2 && maxi == edad3){
    document.write("Las tres personas tienen la misma edad")
}




