const Router = require('express')
const seeCourses = require('../controllers/getData.controller')
const router = Router();


router.get('/courses', seeCourses)



module.exports = router;