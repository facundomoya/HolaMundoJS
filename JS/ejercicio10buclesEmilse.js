let filas = parseInt(prompt("Ingrese un numero de filas"));
let columnas = parseInt(prompt("Ingrese un numero de columnas"))
let numero = 1 //numero que quiero ir incrementando
console.log(numero)
document.write("<table border>")
for(let indicefila =0;indicefila<filas;indicefila++){
    //dibujamos las filas
    document.write("<tr>")
    //dibujar las columnas
    for(let indicecolumna =0;indicecolumna<columnas;indicecolumna++){
        document.write("<td>"+numero)
        document.write("</td>")
        numero++
    }
    document.write("</tr>")
}
document.write("</table>")

