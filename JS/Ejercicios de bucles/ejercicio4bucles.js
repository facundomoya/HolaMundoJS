let solucion = 0;
do {
  let numero = parseInt(prompt("Ingrese un numero:"));
  if (Number(numero) == numero) {
    solucion = solucion + numero;
  } else {
    alert("ERROR, ingrese un numero");
  }
} while (confirm("¿Desea continuar?"));
document.write(solucion);
