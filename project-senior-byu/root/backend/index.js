const mysql = require("mysql");
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());
const port_nd = 8081;
app.listen(port_nd, ()=>{
  console.log(`Listening on port ${port_nd}`);
});

const db = mysql.createConnection({
  host: process.env.DATABASE_CONN,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.HOST,
});

app.post('/signup', (req, res) => {
  const sql = 'INSERT INTO ocacoplus.users (username, email, password) VALUES (?, ?, ?)';
  const values = [
    req.body.username,
    req.body.email,
    req.body.password
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
      return res.status(500).json({ error: 'Failed to create user' });
    }

    console.log('New user created:', result.insertId);
    return res.status(201).json({ message: 'User created successfully' });
  });
});
/*
app.post('/enroll', (req, res) => {
  const { name, email, class } = req.body;

  // Insert the enrollment into the MySQL database
  const sql = 'INSERT INTO enrollments (name, email, class) VALUES (?, ?, ?)';
  const values = [name, email, class];
  pool.query(sql, values, (error, result) => {
    if (error) {
      console.error('Error inserting enrollment:', error);
      res.status(500).send('Error inserting enrollment');
    } else {
      console.log('Enrollment inserted into MySQL');
      res.send('Enrollment submitted');
    }
  });
});*/

app.post('/test', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    
    if (data.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = data[0];
    return res.status(200).json({ user });
  });
});




db.connect(err => {
  if (err) {
    console.error(err.message);
  }
  console.log("Database connected");
});
