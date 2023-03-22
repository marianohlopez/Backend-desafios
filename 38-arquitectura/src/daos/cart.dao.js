import { Carts } from "../models/car.model.js";

const createCart = async (createCarRequest) => {
    try {
        const createdCart = await Carts.create(createCarRequest);

        return createdCart;
    } catch (err) {
        console.log(err);
    }
};

const updateCart = async (id, updateCartRequest) => {
    try {
        const updatedCart = await Carts.updateOne(id, updateCartRequest);

        return updatedCart;
    } catch (err) {
        console.log(err);
    }
};

const deleteCart = async (id) => {
    try {
        const deletedCart = await Carts.deleteOne(id);

        return deletedCart;
    } catch (err) {
        console.log(err);
    }
};

const findAllCarts = async () => {
    try {
        const carts = await Carts.find();

        return carts;
    } catch (err) {
        console.log(err);
    }
};

const findCartById = async (id) => {
    try {
        const cart = await Carts.findById(id);

        return cart;
    } catch (err) {
        console.log(err);
    }
};

const findCartByFilter = async (filters) => {
    try {
        const cart = await Carts.findOne(filters).lean();

        return cart;
    } catch (err) {
        console.log(err);
    }
};

export const cartDao = {
    createCart,
    updateCart,
    deleteCart,
    findAllCarts,
    findCartById,
    findCartByFilter,
};