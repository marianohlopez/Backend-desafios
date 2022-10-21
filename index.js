class Usuario {

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }   

    getFullName() {
        console.log(`El nombre del usuario es ${this.nombre} ${this.apellido}`);
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        console.log(this.mascotas.length);
    }

    addBook(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor});
    }

    getBookNames() {
        console.log(this.libros.map((libro) => libro.nombre)); 
    }
}

const usuario1 = new Usuario('franco', 'lopez');

usuario1.getFullName();

usuario1.addMascota('hamster');
usuario1.addMascota('perro');

usuario1.countMascotas();

usuario1.addBook('El señor de los anillos', 'Carlos');
usuario1.addBook('Harry Potter', 'Alberto');


usuario1.getBookNames();