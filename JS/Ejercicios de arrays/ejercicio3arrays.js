let dado1 = ["1","2","3","4","5","6"]
let dado2 = ["1","2","3","4","5","6"]
let resultado = []
for(let i =0; i<=49; i++)
{
    let lanza1 = Math.floor((Math.random(dado1)*6)+1) 
    let lanza2 = Math.floor((Math.random(dado2)*6)+1) 
    let suma = lanza1 + lanza2
    document.write("<li>El primer dado es: "+lanza1)
    document.write(" y el segundo dado es: "+lanza2)
    document.write("<br>")
    resultado.push(suma)

}
document.write("<br>El array es: "+resultado)