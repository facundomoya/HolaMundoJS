let cuenta = {
    //propiedades
    nombre: "Alex",
    saldo: 0,
    //metodos
    ingresar(cantidad) {
        cuenta.saldo = cuenta.saldo + cantidad
        
    },
    extraer(cantidad) {
        cuenta.saldo = cuenta.saldo - cantidad
    },
    informar(){
        document.write(`
        Nombre: ${cuenta.nombre} <br>
        Saldo: ${cuenta.saldo}<br>`)
    }
    }
    
   cuenta.informar()
   cuenta.ingresar(5000)
   cuenta.informar()
   cuenta.extraer(2000)
   cuenta.informar()