class Libro{
    constructor(ISBN,titulo,autor,numerodepaginas){
        this.isbn=ISBN
        this.titulo=titulo
        this.autor=autor
        this.numerodepaginas=numerodepaginas
    }

    get mostrarISBN(){
        return this.isbn
    }

    get mostrarTitulo(){
        return this.titulo
    }

    get mostrarAutor(){
        return this.autor
    }

    get mostrarNumerodePaginas(){
        return this.numerodepaginas
    }

    set modificarISBN(nuevoISBN){
        this.isbn = nuevoISBN
    }

    set modificarTitulo(nuevotitulo){
        this.titulo = nuevotitulo
    }

    set modificarAutor(nuevoautor){
        this.autor = nuevoautor
    }

    set modificarNumerodePaginas(nuevonumerodepaginas){
        this.numerodepaginas = nuevonumerodepaginas
    }

    mostrarLibro(){
        document.write(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numerodepaginas} páginas <br>`)
    }

}

let libro1 = new Libro(0600500300,"El principito","Antoine de Saint-Exupéry",400)
let libro2 = new Libro(0100566111,"Yo robot","Isaac Asimov",615)

libro1.mostrarLibro()
libro2.mostrarLibro()

if(libro1.mostrarNumerodePaginas > libro2.mostrarNumerodePaginas){
    document.write("<br>El libro uno tiene más páginas")
}else if(libro1.mostrarNumerodePaginas < libro2.mostrarNumerodePaginas){
    document.write("<br>El libro dos tiene más páginas")
}else if(libro1.mostrarNumerodePaginas == libro2.mostrarNumerodePaginas){
    document.write("<br>Ambos libros tienen la misma cantidad de páginas")
}

