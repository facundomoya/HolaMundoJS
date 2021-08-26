let text = String(prompt("Escriba un texto cualquiera"))
let letras = text.length
for(i=0;i<=letras;i++){
    let ok = text.charAt(i)
   document.write(ok+"-")
}