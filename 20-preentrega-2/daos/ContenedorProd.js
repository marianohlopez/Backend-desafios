import mongoose from "mongoose";

class ContenedorProd {
    constructor(model) {
        this.model = model;
    }

    async connect() {
        try {
            mongoose.connect("mongodb+srv://admin:coder123@coderhouse.v7rnyqk.mongodb.net/test");
            console.log("Base de datos conectada");
        } catch (err) {
            console.log(err);
        }
    }

    async create(product) {
        try {
            await this.connect();
            const productSaveModel = new this.model.products(product)
            const productSave = await productSaveModel.save();
            console.log("producto guardado");
            console.log(productSave);
        } catch (err) {
            console.log(err);
        }
    }

    async read() {
        try {
            await this.connect();
            let products = await this.model.products.find({});
            console.log(products);

        } catch (err) {
            console.log(err);
        }
    }

    async update(productTitle, set) {
        try {
            await this.connect();
            let userUpdate = await this.model.products.updateOne({
                title: productTitle,
                $set: set
            })
            console.log(userUpdate);

        } catch (err) {
            console.log(err);
        }
    }

    async delete(productTitle) {
        try {
            await this.connect();
            let productDelete = await this.model.products.deleteOne({
                title: productTitle
            });
            console.log(productDelete);

        } catch (err) {
            console.log(err);
        }
    }
}

export default ContenedorProd;