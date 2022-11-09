const Contenedor = require('./contenedor.js');

const item1 = {
    title: "Escuadra",
    price: 123.45,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
}

const item2 = {
    title: "Calculadora",
    price: 234.56,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
}
  
const item3 ={
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
}

const item4 = {
    title: "Escuadra",
    price: 12343,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
}

const contenedor = new Contenedor('./productos.txt');

const test = async () => {

    //OBTENGO TODOS LOS DATOS DEL ARRAY
    let datos1 = await contenedor.getAll()
    console.log(datos1)

/*     //GUARDO PRODUCTOS
    let save1 = await contenedor.save(item1)
    console.log(save1);
    let save2 = await contenedor.save(item2)
    console.log(save2);
    let save3 = await contenedor.save(item3)
    console.log(save3);

    let datos2 = await contenedor.getAll()
    console.log(datos2)

    //OBTENGO PRODUCTO ESPECIFICO A TRAVEZ DEL ID
    let busca1 = await contenedor.getById(1)
    console.log(busca1)

    let busca2 = await contenedor.getById(10)
    console.log(busca2)

    //BORRO UN PRODUCTO
    await contenedor.deleteById(1)
    let delete1 = await contenedor.getAll()
    console.log(delete1)

    //BORRO TODOS LOS PRODUCTOS
    await contenedor.deleteAll()
    let delete2 = await contenedor.getAll()
    console.log(delete2) */
}
test()