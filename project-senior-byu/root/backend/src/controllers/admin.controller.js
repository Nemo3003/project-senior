const dotenv = require('dotenv');
const { pool } = require('../db/db.js');
dotenv.config();

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
};

const seeStudentEnrolled = (req, res) => {
  const sql =
    'SELECT users.*, classes.* FROM users INNER JOIN enrollments ON users.users_id = enrollments.users_id INNER JOIN classes ON enrollments.classes_id = classes.classes_id';

  pool.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(result);
  });
};

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
};

const seeCurrentStudents = (req, res) => {
  const sql = 'SELECT users_id, username, email FROM users';

  pool.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send({ message: 'Oops!', error: err.message });
    }
    res.send(result);
  });
};

const usersRegistered = (req, res) => {
  try {
    const sql = 'SELECT COUNT(*) as total_users FROM users';
    pool.query(sql, (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ total_users: results[0].total_users });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const usersEnrolled = (req, res) => {
  try {
    const query = 'SELECT COUNT(users_id) as total_users FROM enrollments';
    pool.query(query, (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ total_users: results[0].total_users });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addEnrollment,
  seeStudentEnrolled,
  addClasses,
  seeCurrentStudents,
  usersRegistered,
  usersEnrolled,
};
