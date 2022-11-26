import e, { Router } from "express";
import Contenedor from "../api.js";

const api = new Contenedor('./src/productos.txt')

const router = Router();

router.get("/", (req, res) => {
    res.render("form.pug", {
        title: "Carga tu producto",
        url: "Ir a productos",
    });
});

router.get('/productos', async (req, res) => {
    res.render('productos.pug', {
        title: "Tienda de productos",
        url: "ir a formulario de carga",
        items: await api.getAll()
    })
})

router.post('/', async (req, res) => {
    const { title, price, thumbnail } = req.body;
    await api.save(title, price, thumbnail)
    res.redirect('/')
})

export default router;