let resultado = "";
do {
  let word = prompt("Introduzca la palabra:");
  if (resultado == "") {
    resultado = resultado + word;
  } else {
    resultado = resultado + "-" + word;
  }
} while (confirm("¿Desea continuar?"));
document.write(resultado);
