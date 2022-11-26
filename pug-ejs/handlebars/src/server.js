import express, { json, urlencoded } from 'express';
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import router from "./routes/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: join(__dirname, '/views/layouts'),
    partialsDir: join(__dirname, '/views/partials')
}));

app.set('view engine', 'hbs');
app.set('views', join(__dirname, '/views'));

app.use('/', router)

app.listen('3000', () => {
    console.log("server listening port 3000");
})

app.on('error', (err) => {
    console.log(err);
})

