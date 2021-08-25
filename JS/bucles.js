// while

/* 
while(condicion logica){
    el codigo a ejecutar
    cambiar condicion logica
}
*/

let contador = 24
while(contador <= 20){
    document.write("Elemento "+ contador + "<br>")
    contador=contador+2
}

// do-while

let cont=1
do{ //siempre se va a ejecutar por lo menos una vez, si se cumple la condicion vuelve a la linea 19
    // codigo que quiero ejecutar varias veces
    document.write("Contador "+cont+"<br>")
    //cambio la condicion logica
    cont--
}while(cont>=20)

/* for(crear la variable; condicion logica; incrementar o decrementar la variable){
    ... codigo a ejecutar muchas veces
} 
*/

for(let i=1; i<= 20;i=i+2){
    document.write("Estructura for vuelta "+i+"<br>")
}