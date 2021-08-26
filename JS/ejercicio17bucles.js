let texto = prompt("Introduzca un texto cualquiera");
let cantidad = texto.length;
let contador = 0;
while(contador <= cantidad){
    let posicion = texto.charAt(contador);
   if(posicion == "a" || posicion == "e" || posicion == "i" || posicion == "o" || posicion == "u")
   {
    document.write("La primera vocal del texto introducido es: "+posicion)
    break;
   }
   contador++
}


