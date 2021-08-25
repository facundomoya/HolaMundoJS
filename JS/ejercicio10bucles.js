let filas = parseInt(prompt("Ingrese el numero de filas"))
let columnas = parseInt(prompt("Ingrese el numero de columnas"))
let i,j,
res = filas/columnas
document.write("<table border>"); //comienza la tabla
for(i=0;i<filas;i++){
    document.write("<tr>"); //comienzan las filas
    for(j=0;j<columnas;j++)
    {
        document.write("<td>"); //comienzan las columnas
        document.write(res)
        res++
        document.write("</td>"); //terminan las columnas
    }
    document.write("</tr>"); //terminan las filas
}
document.write("</table>"); //termina la tabla