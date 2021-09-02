let auto = {
    color: "Negro",
    marca: "Mercedes Benz",
    modelo: "2010",
    encendido: function () {
        return true;
    },
    apagado: function () {
        return false;
    }
}
mostrarObjeto()

function mostrarObjeto() {
    document.write("Auto<br>");
    let mostrar = Object.keys(auto)
    for (let i = 0; i < mostrar.length; i++) {
      let clave = mostrar[i];
      document.write(`<br> ${clave}: ${auto[clave]}`);
    }
  }

  