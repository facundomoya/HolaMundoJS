let texto = prompt("Ingrese un texto cualquiera");
let cantidad = texto.length;
let contador = 0;
let sumador = 0;
while(cantidad >= contador) {
  let posicion = texto.charAt(contador);
  if (posicion == "a") {
    sumador++;
  } else if (posicion == "e") {
    sumador++;
  } else if (posicion == "i") {
    sumador++;
  } else if (posicion == "o") {
    sumador++;
  } else if (posicion == "u") {
    sumador++;
  }
  contador++;
}
document.write("La cantidad de vocales es de: "+sumador)
