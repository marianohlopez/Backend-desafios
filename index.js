class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }   

    getFullName() {
        return `El nombre del usuario es ${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({nombre, autor});
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre); 
    }
}

const usuario1 = new Usuario('franco', 'lopez', [], []);

console.log(usuario1.getFullName());

usuario1.addMascota('hamster');
usuario1.addMascota('perro');

console.log(usuario1.countMascotas());

usuario1.addBook('El señor de los anillos', 'Carlos');
usuario1.addBook('Harry Potter', 'Alberto');

console.log(usuario1.getBookNames());
