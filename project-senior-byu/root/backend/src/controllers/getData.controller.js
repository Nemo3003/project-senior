
const{ pool } = require('../db/db.js')

const seeCourses = (req, res) => {
    const sql = 'SELECT classes_id, className, classDescription FROM classes';
  
    pool.query(sql, (err, result) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      res.send(result);
    });
  }

module.exports = seeCourses