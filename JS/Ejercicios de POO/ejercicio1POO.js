let auto = {
    color: "Negro",
    marca: "Mercedes Benz",
    modelo: "2010",
    modo: "Apagado",

    mostrar(){
        document.write(`
        Color: ${auto.color}<br>
        Marca: ${auto.marca}<br>
        Modelo: ${auto.modelo}<br>
        Modo: ${auto.modo}<br>`)
        document.write("<br>")
    },
    encender(){
        auto.modo = "Encendido"
    },
    apagado(){
        auto.modo = "Apagado"
    }
}

auto.mostrar()
auto.encender()
auto.mostrar()
auto.apagado()
auto.mostrar()
auto.encender()
auto.mostrar()



  