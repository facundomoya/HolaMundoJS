let i,pos;
let numero = parseInt(prompt("Ingrese la cantidad de numeros de la piramide: "))
if (Number(numero) == numero){
   if(numero >=1 && numero <=50){
    for(i=numero;i>=1;i--){
        for(pos=i;pos>=1;pos--){
            document.write(i)
        }
        document.write("<br>")
    }

   }else{
       alert("Ingrese un valor entre 1 y 50")
   }
}else{
    alert("Ingrese un valor numerico")
}

