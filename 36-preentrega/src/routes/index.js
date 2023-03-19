import { Router } from 'express';
import passport from "passport";
import { authController } from "../controllers/index.js";
import compression from 'compression';
import generateFaker from '../faker.js';
import logger from '../lib/logger.js';
import upload from '../lib/multer.js';
import { Carts } from "../table/car.model.js";
import { Product } from "../table/product.model.js";
import sendMessage from '../twilio.js';

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

router.get('/login/adminproductos', (req, res) => {
    try {
        const { user } = req.session.passport;
        if (!user) { return res.redirect('/login') }
        res.render('form', { user })
    }
    catch (err) {
        logger.error(err)
    }
})

router.route('/login/productos')
    .get(async (req, res) => {
        try {
            const { user } = req.session.passport;
            const userCart = await Carts.findOne({ username: user.username }).lean();
            if (!user) {
                return res.redirect("/login");
            }
            res.render("cart", { cart: userCart, user });
        } catch (err) {
            logger.error(err);
        }
    })

router.route('/api/productos-test').get((req, res) => {
    try {
        res.render('test', { items: generateFaker() })
    }
    catch (err) {
        logger.error(err)
    }
})

router.post("/cart/:productId", async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        const cart = await Carts.findOne({
            username: req.session.passport.user.username,
        });

        cart.products.push(product);

        await Carts.updateOne(
            { username: req.session.passport.user.username },
            cart
        );
        res.redirect("/login/productos")
    } catch (err) {
        console.log(err);
        logger.error({ error: err }, "Error adding product");

        res.sendStatus(500);
    }
});

router.post("/cart/finish/:cartId", async (req, res) => {
    try {
        sendMessage()
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        logger.error({ error: err }, "Error adding product");
        res.sendStatus(500);
    }
})

router.get("/info", compression(), authController.info)

router.get("/info-uncomp", authController.info)

router.get("/api/random", authController.getRandom)

export default router;