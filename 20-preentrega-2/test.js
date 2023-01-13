import ContenedorProd from "./daos/ContenedorProd.js";
import ContenedorCart from "./daos/ContenedorCart.js";
import * as model from './models/products.js';
import firebaseConfig from "./firebase.js";

const prod = new ContenedorProd(model)

const product = {
    title: "Teclado",
    price: 900,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    id: 5
}

const set = {
    price: 300.50,
    id: 4
}

//prod.create(product)

//prod.read()

//prod.update("Calculadora", set)

//prod.delete("Teclado")

const cartExample = [
    {
        "cartId": 1,
        "timestamp": 1670434673406,
        "productos": [
            {
                "title": "Calculadora",
                "price": 234.56,
                "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
                "id": 2
            },
            {
                "title": "transformador",
                "price": 234.56,
                "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
                "id": 3
            }
        ]
    },
    {
        "cartId": 2,
        "timestamp": 1670434673406,
        "productos": [
            {
                "title": "Reloj",
                "price": 234.56,
                "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
                "id": 3
            }
        ]
    }
]

const setCart = {
    cartId: 6
}

const cart = new ContenedorCart(firebaseConfig);

//cart.create(cartExample)
//cart.read()
//cart.update("b79G3xEDXWZ25XFC1wrc", setCart)
cart.delete("b79G3xEDXWZ25XFC1wrc")