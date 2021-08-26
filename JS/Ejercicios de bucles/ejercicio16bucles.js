let cadena = prompt("Ingrese el texto deseado")
let cantidad = cadena.length
let salida = ""
for(let i = 0;i < cantidad;i++)
{
let orden = cadena.charAt(i)
salida = orden + salida
}
document.write("El texto es: "+salida)