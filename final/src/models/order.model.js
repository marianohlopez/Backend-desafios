import { model, Schema } from "mongoose";

const orderSchema = Schema({
    products: { type: Schema.Types.Array },
    order: { type: Number },
    email: { type: String },
    state: { type: String, default: "Generada" },
    time: { type: String },
});

export const Orders = model("order", orderSchema);