const fs = require('fs')

class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;
        this.productos = [];
    }

    //GUARDAR PRODUCTO NUEVO

    async save(object) {

        let newId
        
        const response = await this.getAll()

        //PRODUCTO NO SE REPITE

        if(response.length > 1 && response.some((el) => el.title === object.title)){
            console.log("el producto ya se encuentra en el catalogo");
            return
        }
        else if(response.length === 0) {
            newId = 1
        }
        else {
            newId = response[response.length - 1].id + 1
        }

        const newObject = {...object, id: newId};

        response.push(newObject);
        
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify(response, null, 2))
            return newId
        }
        catch(err) {
            throw new Error(`Error al guardar un nuevo objeto: ${err}`)
        }
    }

    //OBTENEMOS PRODUCTO BUSCADO MEDIANTE EL ID

    async getById(id) {

        try {
            const response = await this.getAll()
            return response.find(item => item.id === id) ?? null
        }
        catch(err) {
            throw new Error(`No se encuentra el producto: ${err}`)
        }
    }

    //OBTENGO TODOS LOS PRODUCTOS O UN ARRAY VACIO

    async getAll() {
        try {
            const response = await fs.promises.readFile(this.archivo, 'utf-8')
            return JSON.parse(response)
        }
        catch(err) {
            return this.productos;
        }
    }

    async deleteById(id) {
            const response = await this.getAll();
            const newResponse = response.filter((item) => item.id !== id)
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify(newResponse, null, 2))
            console.log('producto borrado');
        }
        catch(err) {
            throw new Error(`Error al borrar data: ${err}`)
        }
    }

    async deleteAll(){
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify([]))
        }
        catch(err) {
            throw new Error(`Error al escribir: ${err}`)
        }
    }
}

module.exports = Contenedor






