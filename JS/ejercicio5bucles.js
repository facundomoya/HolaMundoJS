document.write("Los resultados son los siguientes<br>")
do {
  let dni = parseInt(prompt("Ingrese el numero de DNI: "));
  if (Number(dni) == dni) {
    if (dni > 0 && dni < 99999999) {
      resto = dni % 23;
      Math.trunc(resto);
      calculo(resto,dni);
    } else {
      alert("El DNI debe estar entre 0 y 99999999");
    }
  } else {
    alert("El DNI debe ser numerico");
  }
} while (confirm("¿Desea continuar?"));

function calculo(resto,dni) {
  if (resto == 0) {
    document.write("<br>La letra correspondiente es T y el DNI ingresado es: "+dni);
  } else if (resto == 1) {
    document.write("<br>La letra correspondiente es R y el DNI ingresado es: "+dni);
  } else if (resto == 2) {
    document.write("<br>La letra correspondiente es W y el DNI ingresado es: "+dni);
  } else if (resto == 3) {
    document.write("<br>La letra correspondiente es A y el DNI ingresado es: "+dni);
  } else if (resto == 4) {
    document.write("<br>La letra correspondiente es G y el DNI ingresado es: "+dni);
  } else if (resto == 5) {
    document.write("<br>La letra correspondiente es M y el DNI ingresado es: "+dni);
  } else if (resto == 6) {
    document.write("<br>La letra correspondiente es Y y el DNI ingresado es: "+dni);
  } else if (resto == 7) {
    document.write("<br>La letra correspondiente es F y el DNI ingresado es: "+dni);
  } else if (resto == 8) {
    document.write("<br>La letra correspondiente es P y el DNI ingresado es: "+dni);
  } else if (resto == 9) {
    document.write("<br>La letra correspondiente es D y el DNI ingresado es: "+dni);
  } else if (resto == 10) {
    document.write("<br>La letra correspondiente es X y el DNI ingresado es: "+dni);
  } else if (resto == 11) {
    document.write("<br>La letra correspondiente es B y el DNI ingresado es: "+dni);
  } else if (resto == 12) {
    document.write("<br>La letra correspondiente es N y el DNI ingresado es: "+dni);
  } else if (resto == 13) {
    document.write("<br>La letra correspondiente es J y el DNI ingresado es: "+dni);
  } else if (resto == 14) {
    document.write("<br>La letra correspondiente es Z y el DNI ingresado es: "+dni);
  } else if (resto == 15) {
    document.write("<br>La letra correspondiente es S y el DNI ingresado es: "+dni);
  } else if (resto == 16) {
    document.write("<br>La letra correspondiente es Q y el DNI ingresado es: "+dni);
  } else if (resto == 17) {
    document.write("<br>La letra correspondiente es V y el DNI ingresado es: "+dni);
  } else if (resto == 18) {
    document.write("<br>La letra correspondiente es H y el DNI ingresado es: "+dni);
  } else if (resto == 19) {
    document.write("<br>La letra correspondiente es L y el DNI ingresado es: "+dni);
  } else if (resto == 20) {
    document.write("<br>La letra correspondiente es C y el DNI ingresado es: "+dni);
  } else if (resto == 21) {
    document.write("<br>La letra correspondiente es K y el DNI ingresado es: "+dni);
  } else if (resto == 22) {
    document.write("<br>La letra correspondiente es E y el DNI ingresado es: "+dni);
  }
}
