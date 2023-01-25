import mongoose, { Schema } from "mongoose";

const productsCollection = 'products';

const ProductSchema = new Schema({
    title: { type: Schema.Types.String },
    price: { type: Schema.Types.Number },
    thumbnail: { type: Schema.Types.String }
})

export const products = mongoose.model(productsCollection, ProductSchema);