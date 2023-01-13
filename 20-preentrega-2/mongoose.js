import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGOOSE_URL_KEY);
        console.log("Base de datos conectada");
    }
    catch (err) {
        console.log(err);
    }
}

connect();