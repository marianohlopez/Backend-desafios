import { model, Schema } from "mongoose";

const productSchema = Schema({
    title: { type: String },
    thumbnail: { type: String },
    price: { type: Number },
    category: { type: String }
});

export const Product = model("products", productSchema);
