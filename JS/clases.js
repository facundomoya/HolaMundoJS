//crear una clase
class Funkopop{
    //aqui comienzo a crear mi clase o molde
    constructor(nombreFunko,precioFunko,version,numSerie){
        this.nombre = nombreFunko
        this.precio = precioFunko
        this.version = version
        this.numSerie = numSerie
        this.disponible = true //propiedad por defecto
    }

    //metodos
    mostrardatos(){
        document.write(`<h3>Funkopop</h3>
        Nombre: ${this.nombre}
        <br>Precio: $${this.precio}
        <br>Version: ${this.version}
        <br>NumSerie: ${this.numSerie}
        <br>Disponible: ${this.disponible}`)
    }

    //propiedades conmutadas get y set ---> GET = accede a una sola propiedad de un objeto
    get mostrarNombre(){
        return this.nombre
    }

    get mostrarPrecio(){
        return this.precio
    }

    set modificarPrecio(precioNuevo){ //sirve para cambiar el valor de una propiedad de un objeto (precioNuevo es el parametro que se crea dentro de los parentesis, lo podemos usar como variable dentro de las llaves)
        this.precio = precioNuevo
    }
}

class Persona{
    constructor(nombre, apellido, dni, mail,telefono,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.mail = mail;
        this.telefono = telefono;
        this.edad = edad;
    }

    mostrardatos(){
        document.write(`
        <br>Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>DNI: ${this.dni}
        <br>Mail: ${this.mail}
        <br>Telefono: ${this.telefono}
        <br>Edad: ${this.edad}
        `)
    }
}

//¿que tiene un alumno que no tenga otras personas? notas, usuario, contraseña, matricula, comision
//¿que tiene un tutor? usuario, contraseña, legajo, comision



console.log("Prueba")

//crear una instancia de un objeto
let strange = new Funkopop("Stephen Vincent Strange",5000,"End-Game","djhk3346")
let hulk = new Funkopop("Bruce Banner",5000,"End-Game","asd123asd")
let viudanegra = new Funkopop("Natasha Romanoff",5000,"End-Game","ksj123")

//usar el metodo mostrardatos (o cualquier metodo)
strange.mostrardatos()
hulk.mostrardatos()
viudanegra.mostrardatos()

//utilizar las propiedades conmutadas
document.write("<br>Propiedad Nombre: "+strange.mostrarNombre)
document.write("<br>Propiedad Precio anterior: $"+strange.mostrarPrecio)

//modificar el precio de un Funkopop
strange.modificarPrecio = 6000 //modificamos el precio
document.write("<br>Propiedad Precio nuevo: $"+strange.mostrarPrecio)



//2 clase (Persona)
let juan = new Persona("Juan","Alaniz",33484859,"jalaniz@gmail.com","156615007",35)
let abel = new Persona("Abel","Cordoba",33484859,"abel@gmail.com","156500501",34)

juan.mostrardatos()
abel.mostrardatos()