const mysql = require("mysql2");
const dotenv = require('dotenv');

dotenv.config();


const db = mysql.createConnection(process.env.DATABASE_URL);

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

module.exports = seeCourses