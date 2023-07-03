const mysql = require("mysql2");
const dotenv = require('dotenv');

dotenv.config();


const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: {
    rejectUnauthorized: false, // Disables SSL/TLS certificate verification
  }
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

module.exports = seeCourses