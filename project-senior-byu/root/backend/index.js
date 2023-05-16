const mysql = require("mysql");
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
dotenv.config();

const Signup = require('./src/controlers/auth.controler')
const create = require('./src/controlers/auth.controler')
const Signin = require('./src/controlers/auth.controler')
const seeClasses = require('./src/controlers/getData.controller')
const seeStudentEnrolled = require('./src/controlers/getData.controller')
const seeCurrentStudents = require('./src/controlers/getData.controller')



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

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))

app.post('/signup', Signup);

  app.get('/logout', (req, res) => {
    // Check if the user is authenticated
    if (!req.session.user) {
      // Redirect the user to the login page
      res.redirect('/');
      return;
    }
  
    // Delete the JWT token from the user's session
    delete req.session.user;
  
    // Redirect the user to the home page
    res.redirect('/');
  });


  app.post('/reclass', (req, res) => {
    const { username, email, password } = req.body;
    const sql = 'INSERT INTO ocacoplus.users (username, email, password) VALUES (?, ?, ?)';
    const values = [username, email, password];
  
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
app.post('/add-classes', (req, res) => {
  const { className, classDescription } = req.body;
  const sql = 'INSERT INTO ocacoplus.classes (className, classDescription) VALUES (?, ?)';
  const values = [className, classDescription];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error creating class:', err);
      return res.status(500).json({ error: 'Could not create a new class' });
    }

    console.log('New class created:', result.insertId);
    return res.status(201).json({ message: 'Class created successfully' });
  });
});

app.get('/see-students', authenticateToken,seeCurrentStudents);

app.post('/setclass', authenticateToken,(req, res) => {
  const sql = 'INSERT INTO ocacoplus.enrollments (users_id, classes_id) VALUES (?, ?)';
  const values = [req.body.usersId, req.body.classId];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error linking student and class', err);
      return res.status(500).json({ error: 'Could not link user to class' });
    }

    console.log('Successfully linked student to class', result);
    return res.status(201).json({ message: 'Successfully linked student to class' });
  });
});

// Students and their respective classes
app.get('/stuclass', seeStudentEnrolled)

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus (401)
  jwt.verify(token, process.env.JWT_SECRET, (err,user)=>{
    if(err) return res.sendStatus (403)
    req.user = user
    next()
  })

};


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
app.get('/courses',authenticateToken, seeClasses);

//Enrollment

app.post('/enroll', authenticateToken,(req, res) => {
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

//UPLOADING FILES

/*
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('myFile'), (req, res) => {
  res.send('File uploaded successfully');
});*/


// testing enrollments
//TODO: I need to add some sort of form here in order to let the user enroll in whatever class they want
app.post('/add-test', (req, res) => {
  const sql = 'INSERT INTO ocacoplus.enrollments (classes_id, users_id) VALUES (?, ?)';
  const values = [req.body.classes_id, req.body.users_id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error creating enrollment', err);
      return res.status(500).json({ error: 'Could not enroll in a new class' });
    }

    console.log('New enrollment created', result.insertId);
    return res.status(201).json({ message: 'Enrolled successfully' });
  });
});

// TESTING PURPOSES

app.post("/test", (req, res) => {
  const sql = "SELECT * FROM users WHERE `email` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      debug("Database query error:", err);
      return res.json("Error");
    }
    if (data.length > 0) {
      const user = data[0];
      console.log(user)
      try {
        const result = bcrypt.compare(req.body.password, user.password);
        
        if (result) {
          console.log("Password comparison successful");
          const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
          console.log(token)
          return res.json({ token });
        } else {
          console.log("Password comparison failed");
          return res.json("Failed");
        }
      } catch (err) {
        console.log("bcrypt compare error:", err);
        return res.json("Error");
      }
    } else {
      console.log("No user found");
      return res.json("Failed");
    }
  })});

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
