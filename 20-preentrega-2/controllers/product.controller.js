import { Daos } from "../daos/index.js";
import { products } from "../models/products.js";

const Product = new Daos.ProductDao(products);

const getAllProducts = async (req, res) => {
    try {
        const response = await Product.getAll();
        res.json(response);
    } catch (err) {
        throw new Error();
    }
};

const createProduct = async (req, res) => {
    try {
        const { title, price, thumbnail, id } = req.body;
        await Product.create({ title, price, thumbnail, id });
        const response = await Product.getAll();
        res.json(response);
    } catch (err) {
        throw new Error();
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, price, thumbnail } = req.body;
        await Product.update(Number(id), { title, price, thumbnail });
        return "update realizado";
    } catch (err) {
        throw new Error();
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.delete(Number(id));
        return "delete realizado";
    } catch (err) {
        throw new Error();
    }
};

export const ProductController = { getAllProducts, createProduct, updateProduct, deleteProduct };