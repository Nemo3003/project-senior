const express = require('express');
const router = express.Router();

const {addEnrollment,
    seeStudentEnrolled,
    addClasses,
    seeCurrentStudents,
    usersRegistered,
    usersEnrolled
} = require('../controllers/admin.controller')


//##############GET#################
router.get('/stuclass',seeStudentEnrolled)
router.get('/see-students', seeCurrentStudents)
router.get('/users/count', usersRegistered)
router.get('/users/counten', usersEnrolled)
//#############POST###################
router.post('/add-classes',  addClasses)
router.post('/setclass', addEnrollment);

module.exports = router;