/* 
switch(operacion){
    case 1: 
    // todo el codigo necesario si la opcion que eligio el usuario es 1
    break;
    case 2:
    // ...
    break;
    case "otros"
    ...
    break;
    default: cuando no coincida con algun caso ingresado
    //codigo a ejecutar por defecto
}
*/

let estacion = prompt(
  "Ingrese su estacion del año preferida: 1-Verano, 2-Invierno, 3-Otoño, 4-Primavera"
);

switch (estacion) {
  case "1":
    document.write("La estacion es verano");
    break; //con el break se detiene la ejecucion, sin el break sigue al siguiente caso hasta que aparezca un break
  case "2":
    document.write("La estacion es invierno");
    break;
  case "3":
    document.write("La estacion es otoño");
    break;
  case "4":
    document.write("La estacion es primavera");
    break;
  default:
    alert("Ingreso una opcion invalida")
}
