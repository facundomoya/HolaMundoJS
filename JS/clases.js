//crear una clase
class Funkopop{
    //aqui comienzo a crear mi clase o molde el constructor es un METODO
    constructor(nombreFunko,precioFunko,version,numSerie){ //este this reemplaza donde despues va a estar el objeto, cuando lo cree mas adelante en el futuro. En la notacion LITERAL no es necesario porque ya esta creado el objeto, en cambio cuando creo una clase, el objeto se crea como instancia y va mas adelante que la clase
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

    //propiedades conmutadas get y set ---> GET = accede a una sola propiedad de un objeto, por ejemplo muestra el nombre de una clase y no de todas
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
    constructor(nombre, apellido, dni, mail,telefono,edad,usuario,pass){ 
        this.nombre = nombre
        this.apellido = apellido;
        this.dni = dni;
        this.mail = mail;
        this.telefono = telefono;
        this.edad = edad;
        this.usuario = usuario
        this.pass = pass
    }

    mostrardatos(){
        document.write(`<br>
        <br>Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>DNI: ${this.dni}
        <br>Mail: ${this.mail}
        <br>Telefono: ${this.telefono}
        <br>Edad: ${this.edad}
        <br>Usuario: ${this.usuario}
        <br>Contraseña: ${this.pass}`)
    }
}

//herencia

class Alumno extends Persona{
    constructor(nombre,apellido,dni,mail,telefono,edad,usuario,pass,matricula,comision,notas,curso){
        // invocar el metodo constructor de la clase persona
        super(nombre,apellido,dni,mail,telefono,edad,usuario,pass)
        this.matricula = matricula;
        this.comision = comision;
        this.notas = notas;
        this.curso = curso;
    }
    //sobreescribir metodos 
    mostrardatos(){
        document.write(`<br>
        <br>Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>DNI: ${this.dni}
        <br>Mail: ${this.mail}
        <br>Telefono: ${this.telefono}
        <br>Edad: ${this.edad}
        <br>Matricula: ${this.matricula}
        <br>Comision: ${this.comision}
        <br>Notas: ${this.notas}
        <br>Curso: ${this.curso}`)
    }
    //todos los metodos que quiero crear, set y get
}

class Tutor extends Persona{
    constructor(nombre,apellido,dni,mail,telefono,edad,usuario,pass,legajo,comision,antiguedad){
        super(nombre,apellido,dni,mail,telefono,edad,usuario,pass)
        //aqui va lo que agregamos a tutor lo que difiere de persona, eso es: legajo,comision,antiguedad
        this.legajo = legajo
        this.comision = comision
        this.antiguedad = antiguedad
    }

    mostrardatostutor(){
        document.write(`
        <br>Legajo: ${this.legajo}<br>
        Comision: ${this.comision}<br>
        Antiguedad: ${this.antiguedad}<br>
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
let juan = new Persona("Juan","Alaniz",33484859,"jalaniz@gmail.com","156615007",35,"jalainiz","contrase12")
let abel = new Alumno("Abel","Cordoba",33484859,"abel@gmail.com","156500501",34,"cordoba567","password123",3435,"16i","A","Fullstack")

//para juan nos muestra el mostrardatos() de la clase Persona
//para abel nos muestra el mostrardatos() de la clase Alumno, alli se sobreescribio el metodo mostrardatos()
juan.mostrardatos()
abel.mostrardatos()

let jony = new Tutor ("Jony","Plodzien",37828894,"jony@gmail.com",1555941123,30,"jony123","contraseña123",46280,"16i",2)

jony.mostrardatos()
jony.mostrardatostutor()