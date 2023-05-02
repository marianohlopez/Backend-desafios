import { Router } from 'express';
import { authController } from "../controllers/index.js";
import compression from 'compression';
import { cartController } from '../controllers/cart.controller.js';

const router = Router()

router.route('/admin')
    .get(authController.getLoginAdmin)

router.route('/productos')
    .get(cartController.findCartByFilter)

router.route('/productos/:id')
    .get(cartController.productDescription)

router.route('/productos/:category')
    .get(cartController.findProductsByCategory)

/* router.route('/api/productos-test')
    .get(authController.fakerProducts) */

//Agregar o eliminar productos del carrito por su id utilizando cookies

router.route("/cart/:productId")
    .post(cartController.updateCart)
    .delete(cartController.deleteProductInCart);

router.route("/cart/finish/:cartId")
    .post(cartController.finish)

router.get("/info", compression(), authController.info)

router.get("/info-uncomp", authController.info)

router.get("/api/random", authController.getRandom)

export const productsCartRouter = router;