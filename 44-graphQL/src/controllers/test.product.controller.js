import ContenedorMongo from "../classes/ContenedorMongo.js";
import { Product } from "../models/product.model.js";

const productApi = new ContenedorMongo(Product);

const create = async ({ data }) => {
    try {
        const response = await productApi.save(data);

        return response;
    } catch (err) {
        console.log(err);
    }
};

const update = async ({ id, data }) => {
    try {
        const response = await productApi.update(
            id,
            data
        );
        return response;
    } catch (err) {
        console.log(err);
    }
};

const deleteDocument = async ({ id }) => {
    try {
        const response = await productApi.delete(id);

        return response;
    } catch (err) {
        console.log(err);
    }
};

const getAll = async () => {
    try {
        const response = await productApi.getAll();

        return response;
    } catch (err) {
        console.log(err);
    }
};

const getProduct = async ({ id }) => {
    try {
        const response = await productApi.getById(id);

        return response;
    } catch (err) {
        console.log(err);
    }
};

export const testController = {
    create,
    update,
    deleteDocument,
    getAll,
    getProduct,
};