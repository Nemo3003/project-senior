const mysql = require("mysql");
const dotenv = require('dotenv');
const countUsers = require('../helpers/countUsers')
dotenv.config();


const db = mysql.createConnection({
  host: process.env.DATABASE_CONN_ALT,
  port: process.env.PORT,
  user: process.env.USER_ALT,
  password: process.env.PASSWORD_ALT,
  database: process.env.HOST,
});

const addEnrollment = (req, res) => {
    const sql = 'INSERT INTO ocacoplus.enrollments (users_id, classes_id) VALUES (?, ?)';
    const values = [req.body.usersId, req.body.classId];
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error linking student and class', err);
        return res.status(500).json({ error: 'Could not link user to class' });
      }
  
      console.log('Successfully linked student to class', result);
      return res.status(201).json({ message: 'Successfully linked student to class' });
    });
  }

const seeStudentEnrolled =  (req, res)=>{
    const sql = 'SELECT users.*, classes.* FROM ocacoplus.users INNER JOIN enrollments ON users.users_id = enrollments.users_id INNER JOIN classes ON enrollments.classes_id = classes.classes_id;'
    
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }      
        res.send(result);

    });
  }

  const addClasses = (req, res) => {
    const { className, classDescription } = req.body;
    const sql = 'INSERT INTO ocacoplus.classes (className, classDescription) VALUES (?, ?)';
    const values = [className, classDescription];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error creating class:', err);
        return res.status(500).json({ error: 'Could not create a new class' });
      }
  
      console.log('New class created:', result.insertId);
      return res.status(201).json({ message: 'Class created successfully' });
    });
  }

  const seeCurrentStudents = (req, res) => {
    const sql = 'SELECT users_id, username, email FROM users';
  
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).send({ message: "Oops!", error: err.message });
        return;
      }
      res.send(result);
    });
  };
  

const usersRegistered = async (req, res) => {
    try {
      const totalUsers = await countUsers();
      res.json({ total_users: totalUsers });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


module.exports = 
    {addEnrollment,
    seeStudentEnrolled,
    addClasses,
    seeCurrentStudents,
    usersRegistered
};