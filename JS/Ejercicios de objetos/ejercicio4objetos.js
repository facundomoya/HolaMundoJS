class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimedatos() {
    document.write(`<br>
         Codigo: ${this.codigo}<br>
         Nombre: ${this.nombre}<br>
         Precio: $${this.precio}<br>`);
    document.write("<br>");
  }
}

let guardar = []

let producto1 = new Producto(456,"El principito",400);
let producto2 = new Producto(789,"La divina comedia",650);
let producto3 = new Producto(910,"Yo robot",450);

//pusheo los elementos dentro del array
guardar.push(producto1,producto2,producto3)

for(i in guardar){
    guardar[i].imprimedatos()
}


