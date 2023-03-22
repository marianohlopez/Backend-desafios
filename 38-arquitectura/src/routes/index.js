import { Router } from 'express';
import passport from "passport";
import { authController } from "../controllers/index.js";
import compression from 'compression';
import upload from '../lib/multer.js';
import { cartController } from '../controllers/cart.controller.js';

const router = Router()

router
    .route('/login')
    .get(authController.getLogin)
    .post(
        passport.authenticate("login", { failureRedirect: "/fail-login" }),
        authController.getLogin
    );

router
    .route("/register")
    .get(authController.getRegister)
    .post(
        upload.single("photo"),
        passport.authenticate("register", { failureRedirect: "/fail-register" }),
        authController.getLoginMail,
    );

router.get("/fail-login", authController.getLoginFailiure);
router.get("/fail-register", authController.getRegisterFailiure);

router.get("/logout", authController.logOut);

router.route('/login/adminproductos')
    .get(authController.getLoginAdmin)

router.route('/login/productos')
    .get(cartController.findCartByFilter)

router.route('/api/productos-test')
    .get(authController.fakerProducts)

router.route("/cart/:productId")
    .post(cartController.updateCart);

router.route("/cart/finish/:cartId")
    .post(cartController.finish)

router.get("/info", compression(), authController.info)

router.get("/info-uncomp", authController.info)

router.get("/api/random", authController.getRandom)

export default router;