// crear un arreglo con datos

let series = ["Naruto", "The Good Doctor", "Juego de Tronos", 2, 8, true];

// crear un arreglo vacio

let temporada = [];

// mostrar un valor de un arreglo

document.write(series[2]);

// funcion para mostrar los elementos del arreglo (arrow function), SIEMPRE VA ANTES DE SU LLAMADO PARA MOSTRAR, ESTO SE DEBE A QUE SE DECLARA UNA VARIABLE let Y ESA VARIABLE ACTUA DESDE ESA LINEA DE CODIGO HASTA ABAJO
 let mostrarseries = () => {
    for(let posicion = 0;posicion < series.length;posicion++){
        document.write("<br> Serie: "+ series[posicion])
    }
    document.write("<br>")
} 

//funcion tradicional para mostrar elementos del arreglo

mostrarseriesnetflix()

function mostrarseriesnetflix (){
    document.write("<h3>Arreglo de series</h3>")
    for(let posicion = 0;posicion < series.length;posicion++){
        document.write("<br> Serie: "+ series[posicion])
        document.write(`<br> Serie: ${series[posicion]} posicion: ${posicion}`); //otra forma de concatenar con comillas simples, si es que debo concatenar muchas veces, si es que debo concatener una sola vez suele utilizarse el operador  +
    }
    document.write("<br>")
}

// agregar un elemento al final del arreglo

series.push("Dr.House");

// contar los elementos que tiene el arreglo

console.log(series.length);
document.write("<br>" + series[6]);

// recorrer cada elemento de un arreglo
// la variable posicion es la flechita que señala cada cajita donde se encuentran los datos del vector

 for(let posicion = 0;posicion < series.length;posicion++){
    document.write("<br> Serie: "+ series[posicion])
}
 
// agregar un elemento en una posicion particular

//el primer valor nos dice la posicion donde queremos agregar el elemento
// el segundo parametro me esta diciendo cuantos elementos quiero borrar desde esa POSICION
// el tercer parametro es el valor que realmente quiero guardar en esa posicion

series.splice(1,0,"Loki")

// eliminar un elemento o varios desde una posicion particular del arreglo

//desde la posicion 4 elimina los dos elementos consecutivos es decir el 4 y 5
// si lleva un unico valor elimina todos los elementos a continuacion desde una posicion particular

series.splice(4,2);

//modificar un elemento desde una posicion particular del arreglo

series[4]="Vikingos"

