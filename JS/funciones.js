// funcion sin parametros

function holaMundo(){
    //todo el codigo que quiero que tenga esta funcion
    document.write("Hola Mundo")
}

//funciones con parametros

function saludar(nombre,apellido){
    document.write("<br>Hola mi nombre es: "+nombre+" y mi apellido es: "+apellido)
}

//funciones que retornan un valor
 function convertirdolarespesos(dolares){
    let pesos = dolares * 190;
    return pesos;
}



//arrow functions o funciones en forma de flecha

 let nombreFuncion = (parametro1,parametro2) => {
        //aqui va el codigo de la funcion
    }


// arrow functions, esta variable debe estar creada antes de que la invoque, porque se declara una variable nueva

let convertirdolarespesos = (dolares) =>{
    let pesos = dolares *195
    console.log(pesos)
    return pesos
}


//ejecutar o invocar o llamar a una funcion sin parametros

holaMundo();

//llamar una funcion con parametros

saludar("Esteban","Marquez");

let precioIphone = convertirdolarespesos(599)
document.write("<br>Iphone SE $ "+precioIphone)
document.write("<br>Jordan $ "+convertirdolarespesos(200))

