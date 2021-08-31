let texto = prompt("Escriba cualquier texto")
letras(texto)

function letras(texto){
    if(texto == texto.toUpperCase()){
        document.write("El texto esta en mayusculas")
    }else if(texto == texto.toLowerCase()){
        document.write("El texto esta en minusculas")
    }else if(texto != texto.toLowerCase() && texto != texto.toUpperCase()){
        document.write("El texto esta en mayusculas y minusculas")
    }
}