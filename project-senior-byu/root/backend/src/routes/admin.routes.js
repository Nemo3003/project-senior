const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authJwt')

const {addEnrollment,
    seeStudentEnrolled,
    addClasses,
    seeCurrentStudents,
    usersRegistered
} = require('../controllers/admin.controller')


//##############GET#################
router.get('/stuclass', seeStudentEnrolled)
router.get('/see-students',seeCurrentStudents)
router.get('/users/count',usersRegistered)
//#############POST###################
router.post('/add-classes', addClasses)
router.post('/setclass', addEnrollment);

module.exports = router;