const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config();


const db = mysql.createConnection({
  host: process.env.DATABASE_CONN_ALT,
  port: process.env.PORT,
  user: process.env.USER_ALT,
  password: process.env.PASSWORD_ALT,
  database: process.env.HOST,
});

const seeCourses = (req, res) => {
    const sql = 'SELECT classes_id, className, classDescription FROM classes';
  
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      res.send(result);
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

const seeCurrentStudents = (req, res) => {
    const sql = 'SELECT users_id, username, email FROM users';
  
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
  
      res.send(result);
    });
  }

module.exports = [
    seeCourses,
    seeStudentEnrolled,
    seeCurrentStudents
]