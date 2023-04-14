import { Router } from 'express';
import { registerLoginRouter } from './register-login.js';
import { productsCartRouter } from './products-cart.js';
import { testRouter } from './test-api.js';

const router = Router()

router.use(registerLoginRouter);
router.use(productsCartRouter);
router.use(testRouter);

export default router;