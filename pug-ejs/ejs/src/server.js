import express, { json, urlencoded } from 'express';
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));



app.set('view engine', 'ejs');
app.set('views', join(__dirname + '/views'));

app.use('/', router)

app.listen('3000', () => {
    console.log("server listening port 3000");
})

app.on('error', (err) => {
    console.log(err);
})

