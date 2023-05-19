import {Router} from 'express';
const seeCourses = require('../controllers/getData.controller')
const router = Router();


router.get('/courses', seeCourses)



export default router;