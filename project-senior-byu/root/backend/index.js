const mysql = require("mysql");
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
dotenv.config();
const salt = 10;

const Signup = require('./src/controllers/auth.controller')
const create = require('./src/controllers/auth.controller')
const Signin = require('./src/controllers/auth.controller')
const seeCourses = require('./src/controllers/getData.controller')
const seeStudentEnrolled = require('./src/controllers/admin.controller')
const seeCurrentStudents = require('./src/controllers/getData.controller')


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24
  }
}))
app.use(cors({
  origin: ["http://localhost:5173","http://localhost:8081"],
  method: ["POST", "GET"],
  credentials: true
}));


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

app.use(
  session({
    secret: process.env.SESSION_SECRET, // Replace with your own secret key
    resave: false,
    httpOnly: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 86400000, // Cookie expiration time (in milliseconds)
      secure: false, // Set to true if using HTTPS
    },
  })
);
//ready
app.post('/signup', (req, res) => {
  const sql = "INSERT INTO ocacoplus.users (`username`,`email`, `password`) VALUES (?)";
  bcrypt.hash (req.body.password.toString(), salt, (err, hash) => {
  if(err) return res.json({Error: "Error for hassing password"});
    const values = [
      req.body.username,
      req.body.email,
      hash
      ]
  db.query(sql, [values], (err, result) => {
    if(err) return res.json({Error: "Inserting data Errorr in server"});
    return res.json(result)}
    )
  })
    
    
  });
//ready
  app.get('/logout', (req, res) => {
    // Check if the user is authenticated
    if (!req.session.user) {
      // Redirect the user to the login page
      res.redirect('/');
      return;
    }
  
    // Clear the session cookie
    res.clearCookie('connect.sid');
  
    // Redirect the user to the home page
    res.redirect('/');
  });
  

  const isAuthenticated = (req, res, next) => {
    // Check if the user is authenticated
    if (!req.session.user) {
      // Redirect the user to the login page
      res.redirect('/test');
    } else {
      // Continue to the next middleware or controller
      next();
    }
  };
  
  //Is it necessary?
  app.post('/reclass', verifyToken,(req, res) => {
    
    const { username, email, password } = req.body;
    jwt.verify(req.token, process.env.JWT_SECRET, (err, authData)=>{
      if(err) {
        res.sendStatus(403)
      }else{
        res.json({
          message: "Give us the money!",
          authData
        })
      }
    })
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


  function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
      if(err) return res.sendStatus(403)
      req.session.user = user
      next()
    })
  }
  
  
  //testing page
  app.get('/home', (req, res) => {
    
   if(req.session.username){
    return res.json({valid: true, username: req.session.username})
   }else{
    return res.json({valid: false})
   }
  }, []);
  

//ADMIN
//ready
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
//ready
app.get('/see-students', (req, res) => {
  console.log('Session:', req.session.username); 
  
    const sql = 'SELECT users_id, username, email FROM users';
   
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }

      res.send(result);
    });

});


// Ready
app.post('/setclass', (req, res) => {
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
//ready
app.get('/users/count', async (req, res) => {
  try {
    const totalUsers = await countUsers();
    res.json({ total_users: totalUsers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// testing purposes
app.get('/auth/check', (req, res) => {
  // Check if the user is authenticated based on your session or JWT logic
  if (req.session.user) {
    res.json({ authenticated: true });
  } else {
    res.json({ authenticated: false });
  }
});


// Use the middleware function to protect all routes



// GENERAL
// ready
app.get('/courses', seeCourses);

//Enrollment
// Ready
app.post('/enroll', verifyToken,(req, res) => {
  
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

function generateToken(user){
  return jwt.sign({ id: user.id, name: user.username, isAdmin: user.isAdmin, isStudent: user.isStudent }, process.env.JWT_SECRET, {expiresIn:'1m'});
}


// TESTING PURPOSES
// ready
app.post("/test", (req, res) => {
  const sql = "SELECT * FROM users WHERE `email` = ?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) {
      debug("Database query error:", err);
      return res.json("Error");
    }
    if (data.length > 0) {
      const user = data[0];
      req.session.username = data[0].username;
      console.log("first",req.session.username = data[0].username)
      console.log("second",req.session.user = data[0].user)
      console.log("third",req.session.user = data[0].username)
      console.log("zi",req.session.user = data[0].username)
      console.log("third",req.session.user)
      if(req.session.user){
        console.log('zi',data[0])
      }
      
      try {
        const passwordMatch = bcrypt.compare(
          req.body.password.toString(),
          user.password
        );
        
        if (passwordMatch) {
          console.log("Password comparison successful");
          const token = generateToken(user)
          const refreshToken = jwt.sign({id: user.id, name: user.username, isAdmin: user.isAdmin, isStudent: user.isStudent }, process.env.S_SECRET)

          res.json({valid: true,Login: true, name: req.session.username, isAdmin: user.isAdmin ,token, refreshToken });
        } else {
          console.log("Password comparison failed");
          return res.json({valid:false, Login:false},"Failed");
        }
      } catch (err) {
        console.log("bcrypt compare error:", err);
        return res.json({valid:false, Login:false},"Error");
      }
    } else {
      console.log("No user found");
      return res.json({valid:false, Login: false},"Failed");
    }
  });
  if(req.session.user){
    console.log(('get back to work'))
  }
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
