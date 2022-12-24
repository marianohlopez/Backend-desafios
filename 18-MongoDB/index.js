// Agregar 10 documentos con valores distintos a las colecciones mensajes y productos.

//use ecommerce

db.mensajes.insertMany([
    { username: "Carlos", message: "Hola", time: "19 12 2022 06:31:01" },
    { username: "Alberto", message: "como estan?", time: "19 12 2022 06:34:01" },
    { username: "Mariano", message: "Todo bien", time: "19 12 2022 06:38:31" },
    { username: "Juan", message: "Hola", time: "19 12 2022 06:41:01" },
    { username: "Salvador", message: "Hola", time: "19 12 2022 06:42:08" },
    { username: "Daniela", message: "Vamos argentina", time: "19 12 2022 06:46:11" },
    { username: "Gaston", message: "somos campeones", time: "19 12 2022 06:50:21" },
    { username: "Martin", message: "vamoooo!!", time: "19 12 2022 06:51:21" },
    { username: "Dardo", message: "como estan todos?", time: "19 12 2022 06:53:15" },
    { username: "Esteban", message: "genial", time: "19 12 2022 06:55:12" }])

db.productos.insertMany([
    {
        title: "Escuadra",
        price: 120,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    },
    {
        title: "Calculadora",
        price: 580,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    },
    {
        title: "Computadora",
        price: 1280,
        thumbnail: "https://www.tecnologia-informatica.com/wp-content/uploads/2018/07/funciones-de-la-computadora-1.jpeg",
    },
    {
        title: "Teclado",
        price: 900,
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Computer_keyboard_ES_layout.svg",
    },
    {
        title: "Regla",
        price: 345.67,
        thumbnail: "https://www.shutterstock.com/image-vector/school-measuring-plastic-ruler-20-260nw-615662024.jpg",
    },
    {
        title: "Escritorio",
        price: 1700,
        thumbnail: "https://www.parati.com.ar/wp-content/uploads/2021/07/ESCRITORIOS-PARA-DOS15.jpg",
    },
    {
        title: "Impresora",
        price: 2300,
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Samsung_ML-2010.jpg",
    },
    {
        title: "Piano",
        price: 2860,
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Grandpiano.svg/800px-Grandpiano.svg.png",
    },
    {
        title: "Moto",
        price: 4320,
        thumbnail: "https://cdn.forbes.com.mx/2020/06/moto-Aston-Martin-1-e1593442114237-640x360.jpg",
    },
    {
        title: "Auto",
        price: 4990,
        thumbnail: "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/4GSUPRZXXREO7A3YKFIT3W2RMM.jpg",
    }
])

// Listar todos los documentos en cada colección.

db.mensajes.find()
db.productos.find()

// Mostrar la cantidad de documentos almacenados en cada una de ellas.

db.mensajes.estimatedDocumentCount()
db.productos.estimatedDocumentCount()

// Agregar un producto más en la colección de productos.

db.productos.insertOne({ title: "Mesa", price: 1500, thumbnail: "https://i.pinimg.com/736x/cd/d7/90/cdd7907f33e8ff549b8db5082a14c5a9.jpg" })

// Listar los productos con precio menor a 1000 pesos.

db.productos.find({ price: { $lt: 1000 } })

// Listar los productos con precio entre los 1000 a 3000 pesos.

db.productos.find({ $and: [{ price: { $gt: 1000 } }, { price: { $lt: 3000 } }] })

// Listar los productos con precio mayor a 3000 pesos.

db.productos.find({ price: { $gt: 3000 } })

// Realizar una consulta que traiga sólo el nombre del tercer producto más barato.

db.productos.find().skip(2).limit(1).sort({ price: 1 })

// Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.

db.productos.updateMany({ price: { $exists: true } }, { $set: { stock: 100 } })

// Cambiar el stock a cero de los productos con precios mayores a 4000 pesos. 

db.productos.updateMany({ price: { $gt: 4000 } }, { $set: { stock: 0 } })

// Borrar los productos con precio menor a 1000 pesos.

db.productos.deleteMany({ price: { $lt: 1000 } })

// Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce. Verificar que pepe no pueda cambiar la información.

db.createUser(
    {
        user: "pepe",
        pwd: "asd456",
        roles: [
            { role: "read", db: "ecommerce" }
        ]
    }
)

//abro base de datos nuevamente

//mongod --auth --dbpath ./

// cierro cli y abro nuevamente con usuario

//mongo - u pepe - p asd456