import { model, Schema } from "mongoose";

const cartSchema = Schema({
    products: { type: Schema.Types.Array }
});

export const Carts = model("cart", cartSchema);