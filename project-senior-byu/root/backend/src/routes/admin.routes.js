import {Router} from 'express';
const addEnrollment = require('../controllers/admin.controller')
const seeStudentEnrolled =  require('../controllers/admin.controller')
const seeCurrentStudents =  require('../controllers/admin.controller')
const addClasses =  require('../controllers/admin.controller')
const countingStudents = require('../controllers/admin.controller')
const router = Router();


//##############GET#################
router.get('/stuclass', seeStudentEnrolled)
router.get('/see-students', seeCurrentStudents)
router.get('/users/count', countingStudents)
//#############POST###################
router.post('/add-classes', addClasses)
router.post('/setclass',addEnrollment)

export default router;