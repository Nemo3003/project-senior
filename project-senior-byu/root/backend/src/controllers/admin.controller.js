
const dotenv = require('dotenv');
const {countUsers,countUsersEnrolled} = require('../helpers/countUsers')
const{ pool } = require('../db/db.js')
dotenv.config();

const app = express()

const addEnrollment = (req, res) => {
    const sql = 'INSERT INTO enrollments (users_id, classes_id) VALUES (?, ?)';
    const values = [req.body.usersId, req.body.classId];
    pool.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error linking student and class', err);
        return res.status(500).json({ error: 'Could not link user to class' });
      }
  
      console.log('Successfully linked student to class', result);
      return res.status(201).json({ message: 'Successfully linked student to class' });
    });
  }

const seeStudentEnrolled =  (req, res)=>{
    const sql = 'SELECT users.*, classes.* FROM users INNER JOIN enrollments ON users.users_id = enrollments.users_id INNER JOIN classes ON enrollments.classes_id = classes.classes_id;'
    
    pool.query(sql, (err, result) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }      
        res.send(result);

    });
  }

  const addClasses = (req, res) => {
    const { className, classDescription } = req.body;
    const sql = 'INSERT INTO classes (className, classDescription) VALUES (?, ?)';
    const values = [className, classDescription];
  
    pool.query(sql, values, (err, result) => {
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
  
    pool.query(sql, (err, result) => {
      if (err) {
        res.status(500).send({ message: "Oops!", error: err.message });
        return;
      }
      res.send(result);
    });
  };
  

  const usersRegistered = async (req, res) => {
    try {
      const sql = "SELECT COUNT(*) as total_users FROM users";
      pool.query(sql, (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          const totalUsers = parseInt(results[0].total_users);
          res.json(totalUsers);
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  
const usersEnrolled = async (req, res) => {
    try {
      const query = "SELECT COUNT(users_id) as total_users FROM enrollments";
      pool.query(query, (error, results)=>{
        if (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          res.json(results[0].total_usersu.toString());
        }
      })
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://heartfelt-twilight-23e637.netlify.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

module.exports = 
    {addEnrollment,
    seeStudentEnrolled,
    addClasses,
    seeCurrentStudents,
    usersRegistered,
    usersEnrolled
};