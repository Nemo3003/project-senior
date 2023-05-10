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

//TODO: Perhaps using session I could finally make this work...

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


  app.post('/reclass', (req, res) => {
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

// count users


const countUsers = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT COUNT(*) as total_users FROM ocacoplus.users";
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0].total_users);
      }
    });
  });
};
app.get('/users/count', async (req, res) => {
  try {
    const totalUsers = await countUsers();
    res.json({ total_users: totalUsers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// GENERAL
app.get('/courses', (req, res) => {
  const sql = 'SELECT classes_id, className, classDescription FROM classes';

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    res.send(result);
  });
});

//Enrollment

app.post('/enroll', (req, res) => {
  const { userId, classId } = req.body; // Assuming userId and classId are sent in the request body

  // Insert a new row into the enrollments table
  const insertQuery = `INSERT INTO ocacoplus.enrollments (users_id, classes_id) VALUES (?, ?)`;
  connection.query(insertQuery, [userId, classId], (error, results) => {
    if (error) {
      console.error('Error inserting enrollment:', error);
      res.status(500).json({ message: 'Error enrolling in the course' });
    } else {
      console.log('Enrollment inserted successfully!');
      res.status(200).json({ message: 'Enrollment successful' });
    }
  });
});

// testing enrollments
//TODO: I need to add some sort of form here in order to let the user enroll in whatever class they want
app.post('/add-test', (req, res)=>{
  const sql = 'INSERT INTO ocacoplus.enrollments (classes_id, users_id) VALUES (?,?)';
  const values = [
    req.body.classes_id,
    req.body.users_id
  ];

  db.query(sql, values, (err, result)=>{
    if(err){
      console.error('Error creating class', err);
      return res.status(500).json({error: 'Could not enroll in a new class'});
    }

    console.log('New enrollment created', result.insertId);
    return res.status(201).json({message: 'Enrolled successfully'})
  });
});
// TESTING PURPOSES


app.post('/test', (req, res) => {
  const sql = "SELECT * FROM users WHERE `email` = ?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      const user = data[0];
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.json("Error");
        }
        if (result) {
          const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, 'secret');
          return res.json({ token });
        } else {
          return res.json("Failed");
        }
      });
    } else {
      return res.json("Failed");
    }
  });
});


app.get('/courses-test', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'secret');
    if (decoded.isAdmin) {
      res.json('You are admin');
    } else {
      res.json('You are not an admin');
    }
  } catch (err) {
    res.sendStatus(401);
  }
});



db.connect(err => {
  if (err) {
    console.error(err.message);
  }
  console.log("Database connected");
});
