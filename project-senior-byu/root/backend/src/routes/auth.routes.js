import {Router} from 'express';
const router = Router();
const Signup = require('../controllers/auth.controller')
const Signin = require('../controllers/auth.controller')
const Logout = require('../controllers/auth.controller')

router.post('/signup', Signup)
router.post('/login', Signin)
router.get('/logout', Logout)

export default router;