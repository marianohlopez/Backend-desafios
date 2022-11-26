import express, { json, urlencoded } from 'express';
import router from './routes/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use('/', router)

app.listen('3000', () => {
    console.log('server listening port 3000');
})

app.on("error", (err) => {
    console.log(err)
})