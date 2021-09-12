class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }

  mostrarGeneracion() {
    if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
      document.write("<br>La generación a la que pertenece es la GENERACION Z");
      document.write("<br>Su rasgo caracteristico es la irreverencia");
    } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
      document.write(
        "<br>La generación a la que pertenece es la GENERACION Y (millennials)"
      );
      document.write("<br>Su rasgo caracteristico es la frustación");
    } else if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
      document.write("<br>La generación a la que pertenece es la GENERACION X");
      document.write("<br>Su rasgo caracteristico es la obsesión por el éxito");
    } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
      document.write("<br>La generación a la que pertenece es la Baby Boom");
      document.write("<br>Su rasgo caracteristico es la ambición");
    } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
      document.write(
        "<br>La generación a la que pertenece es la Silent Generation(los niños de la posguerra"
      );
      document.write("<br>Su rasgo caracteristico es la austeridad");
    }
  }

  esMayordeEdad() {
      if(this.edad >= 18){
          document.write("<br>La persona es mayor de edad")
      }else{
          document.write("<br>La persona no es mayor de edad")
      }
  }

  mostrarDatos(){
    document.write(`<br>
    Nombre: ${this.nombre}<br>
    Edad: ${this.edad}<br>
    DNI: ${this.dni}<br>
    Sexo: ${this.sexo}<br>
    Peso: ${this.peso} kg<br>
    Altura: ${this.altura} m<br>
    Nacimiento: ${this.nacimiento}`);
    document.write("<br>");
  }

  generaDNI(){
   this.dni= Math.floor(Math.random() * (99999999 - 11111111)) + 11111111
  }

}

let persona1 = new Persona("Alfredo",23,"","H",74,1.81,1997)
let persona2 = new Persona("Lucía",61,"","M",56.5,1.59,1960)

persona1.generaDNI()
persona1.esMayordeEdad()
persona1.mostrarGeneracion()
persona1.mostrarDatos()

persona2.generaDNI()
persona2.esMayordeEdad()
persona2.mostrarGeneracion()
persona2.mostrarDatos()