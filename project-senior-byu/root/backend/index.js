const mysql = require("mysql");
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());
const port_nd = 8081;
app.listen(port_nd, ()=>{
  console.log(`Listening on port ${port_nd}`);
});



const db = mysql.createConnection({
  host: process.env.DATABASE_CONN_ALT,
  port: process.env.PORT,
  user: process.env.USER_ALT,
  password: process.env.PASSWORD_ALT,
  database: process.env.HOST,
});



app.post('/signup', (req, res) => {
  const sql = 'INSERT INTO ocacoplus.users (username, email, password) VALUES (?, ?, ?)';

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword
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


//ADMIN
app.post('/add-classes', (req, res)=>{
  const sql = 'INSERT INTO ocacoplus.classes (className, classDescription) VALUES (?,?)';
  const values = [
    req.body.className,
    req.body.classDescription
  ];

  db.query(sql, values, (err, result)=>{
    if(err){
      console.error('Error creating class', err);
      return res.status(500).json({error: 'Could not create a new class'});
    }

    console.log('New class created', result.insertId);
    return res.status(201).json({message: 'Class created successfully'})
  });
});

app.get('/see-students', (req, res) => {
  const sql = 'SELECT username, email FROM users';

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    res.send(result);
  });
});

// GENERAL
app.get('/courses', (req, res) => {
  const sql = 'SELECT className, classDescription FROM classes';

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    res.send(result);
  });
});

//Enrollment
app.post('/enroll', (req,res)=>{
  const {classes_classes_id, users_users_id} = req.body;
  const sql = 'INSERT INTO user_has_classes (classes_class_id, users_users_id) VALUES (?, ?)';
  db.query(sql, [classes_classes_id, users_users_id], (error, results, fields) => {
    if(error){
      res.status(500).json({error: 'Failed to enroll in class'});
    }else {
      res.json({message: 'Enrolled in class'});
    }
  })
})

// TESTING PURPOSES
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
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token });
  });
});




db.connect(err => {
  if (err) {
    console.error(err.message);
  }
  console.log("Database connected");
});
