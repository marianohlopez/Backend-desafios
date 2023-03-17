import { Router } from 'express';
import passport from "passport";
import { authController } from "../controllers/index.js";
import compression from 'compression';
import generateFaker from '../faker.js';
import logger from '../lib/logger.js';
import upload from '../lib/multer.js';
import sendMail from '../nodemail.js';

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
        console.log(user.photo);
        if (!user) { return res.redirect('/login') }
        res.render('form', { user })
    }
    catch (err) {
        logger.error(err)
    }
})

router.route('/login/productos')
    .get((req, res) => {
        try {
            const { user } = req.session.passport;
            if (!user) { return res.redirect('/login') }
            res.render('cart', { user })
        }
        catch (err) {
            logger.error(err)
        }
    })
    .post((req, res) => {
        try {
            const { productTitle } = req.body;
            console.log(productTitle);
        }
        catch (err) {
            logger.error(err)
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

router.get("/info", compression(), authController.info)

router.get("/info-uncomp", authController.info)

router.get("/api/random", authController.getRandom)

export default router;