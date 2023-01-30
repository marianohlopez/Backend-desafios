import { Router } from 'express';
import generateFaker from '../faker.js';

const router = Router()

router.route('/login').get((req, res) => {
    res.render('login')
})
    .post((req, res) => {
        const { user } = req.body;
        if (user) req.session.user = user;
        res.redirect('/login/productos')
    })

router.route('/logout').get((req, res) => {
    const { user } = req.session;
    res.render('logout', { user })
})

router.get('/login/productos', (req, res) => {
    const { user } = req.session;
    if (!user) res.redirect('/login')
    res.render('form', { user })
})

router.route('/api/productos-test').get((req, res) => {
    res.render('test', { items: generateFaker() })
})


export default router;