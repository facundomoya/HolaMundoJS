let numero = parseInt(prompt("Ingrese el numero de la piramide:"))
if(Number(numero) == numero){
    if(numero >= 1 && numero <=50){
        for(i=0;i<=numero;i++){
           for(pos=1;pos<=i;pos++){
            document.write(pos)
           }
            document.write("<br>")
        }

    }else{
        alert("Ingrese un numero entre 1 y 50")
    }
}else{
    alert("Ingrese un valor numerico")
}