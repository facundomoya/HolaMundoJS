//9

let frase = prompt("Ingrese una frase:");
let cantidad = frase.length;
let vocal1 = "a";
let vocal2 = "e";
let vocal3 = "i";
let vocal4 = "o";
let vocal5 = "u";
let vocal6 = "A";
let vocal7 = "E";
let vocal8 = "I";
let vocal9 = "O";
let vocal10 = "U";
let contador = 0;
document.write("La frase es: " + frase);
document.write("<br>Las vocales que aparecen son las siguientes:");
while (cantidad >= contador) {
  let nombre = frase.charAt(contador);
  if (nombre == vocal1 || nombre == vocal6) {
    document.write("<br>a");
  } else if (nombre == vocal2 || nombre == vocal7) {
    document.write("<br>e");
  } else if (nombre == vocal3 || nombre == vocal8) {
    document.write("<br>i");
  } else if (nombre == vocal4 || nombre == vocal9) {
    document.write("<br>o");
  } else if (nombre == vocal5 || nombre == vocal10) {
    document.write("<br>u");
  }
  contador++;
}
