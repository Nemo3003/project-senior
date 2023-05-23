const express = require('express');
const addEnrollment = require('../controllers/admin.controller')
const seeStudentEnrolled =  require('../controllers/admin.controller')
const seeCurrentStudents =  require('../controllers/admin.controller')
const addClasses =  require('../controllers/admin.controller')
const usersRegistered = require('../controllers/admin.controller')
const router = express.Router();

//##############GET#################
router.get('/stuclass', seeStudentEnrolled)
router.get('/see-students',seeCurrentStudents)
router.get('/users/count',usersRegistered)
//#############POST###################
router.post('/add-classes', addClasses)
router.post('/setclass', addEnrollment);

module.exports = router;