let numero = 500
for(i=1;i<=500;i++){
    resto = i % 4;
    resto2 = i % 9;
    resto3 = resto + resto2
    if(i % 5 == 0){
        document.write("<hr>")
        
    }
    if(resto == 0 && resto3 != 0)
    {
        document.write(i+" (Multiplo de 4)")
    }
    if(resto2 == 0 && resto3 != 0)
    {
        document.write(i+" (Multiplo de 9)")
    }
    if(resto3 == 0)
    {
        document.write(i+" (Multiplo de 4 y 9)")
    }
    if(resto != 0 && resto2 != 0){
        document.write(i)
    }
    document.write("<br>")
}