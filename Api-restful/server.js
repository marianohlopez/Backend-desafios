import express, { Router, json, urlencoded } from 'express';
import Contenedor from './api.js';
import { fileURLToPath } from "url"
import { dirname } from "path"
import path from "path"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

const router = Router();
const baseRouter = Router();

const api = new Contenedor('./productos.txt');

baseRouter
    .route("/").get((req, res) => {
        res.sendFile(path.join(__dirname, "/public/index.html"))
    })

router
    .route('/')
    .get(async (req, res) => {
        res.json(await api.getAll())
    })
    .post(async (req, res) => {
        const { title, price, thumbnail } = req.body;
        res.json(await api.save(title, price, thumbnail))
    })

router
    .route('/:id')
    .get(async (req, res) => {
        const { id } = req.params;
        res.json(await api.getById(Number(id)))
    })
    .put(async (req, res) => {
        const { id } = req.params;
        const { title, price, thumbnail } = req.body;
        res.json(await api.replace(Number(id), { title, price, thumbnail }))
    })
    .delete(async (req, res) => {
        const { id } = req.params;
        res.json(await api.deleteById(Number(id)))
    })

app.use('/api/productos', router);
app.use('/', baseRouter);


app.listen("8080", () => {
    console.log("server listening port 8080");
})

app.on("error", (err) => {
    console.log(err);
})


