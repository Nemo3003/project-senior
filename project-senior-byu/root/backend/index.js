const mysql = require("mysql");
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');
dotenv.config();


const app = express();

app.use(express.json())
app.use(cors());
let port_nd = 8081;

app.listen(8081, ()=>{
  console.log(`Listening on port ${port_nd}`)
})


const db = mysql.createConnection({
  host: process.env.DATABASE_CONN,
  port: process.env.PORT,
  user:process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.HOST,
});

app.post('/signup', (req, res) => {
  const sql = 'INSERT INTO ocacoplus.users (username, email, password) VALUES (?, ?, ?)';
  const { username, email, password } = req.body;

  // Hash the password before inserting it into the database
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json({ error: 'Failed to create user' });
    }

    const values = [username, email, hashedPassword];
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error creating user:', err);
        return res.status(500).json({ error: 'Failed to create user' });
      }

      console.log('New user created:', result.insertId);
      return res.status(201).json({ message: 'User created successfully' });
    });
  });
});

app.post('/test', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (data.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = data[0];
    // Compare the hashed password with the one provided in the request
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        return res.status(500).json({ message: 'Server error' });
      }

      if (!result) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      return res.status(200).json({ user });
    });
  });
});



db.connect(err=>{
  if(err){
    console.error(err.message);
  }
  console.log("database connected")
})
