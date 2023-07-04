const mysql = require("mysql2/promise");
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const salt = 10;
dotenv.config();


const app = express();
const db = mysql.createConnection(process.env.DATABASE_URL)

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

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

const Signup = (req, res) => {
  const { username, email, password } = req.body;

  // Check whether username or email already exists
  const checkQuery = "SELECT * FROM users WHERE username = ? OR email = ?";
  db.query(checkQuery, [username, email], (err, rows) => {
    if (err) {
      return res.json({ Error: "Database query error" });
    }

    if (rows.length > 0) {
      // Username or email already exists
      return res.json({ Error: "Username or email already exists" });
    }
    // Validate password strength
    if (password.length < 8) {
      return res.json({ Error: "Password should be at least 8 characters long" });
    }
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /\d/.test(password);
    
    if (!hasSpecialCharacter || !hasNumber) {
      return res.json({ Error: "Password should contain a mix of special characters and numbers" });
    }

    // Proceed with user creation
    bcrypt.hash(password.toString(), salt, (err, hash) => {
      if (err) {
        return res.json({ Error: "Error hashing password" });
      }

      const insertQuery = "INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)";
      const values = [username, email, hash];
      db.query(insertQuery, values, (err, result) => {
        if (err) {
          return res.json({ Error: "Error inserting data into the server" });
        }
        
        const userId = result.insertId; // Get the inserted user's ID
        console.log(userId);
        const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET, {
          expiresIn: 86400, // 24 hours
        });
        return res.json({ token }); // Return the user's ID in the response
      });
    });
  });
};

  function generateToken(user){
    return jwt.sign({ id: user.id, name: user.username, isAdmin: user.isAdmin, isStudent: user.isStudent }, process.env.JWT_SECRET, {expiresIn:86400});
  }

  const Signin = async (req, res) => {
    const sql = "SELECT * FROM users WHERE `email` = ?";
    
    db.query(sql, [req.body.email], (err, data) => {
      if (err) {
        console.log("Database query error:", err);
        return res.status(500).json({ error: "Database query error" });
      }
  
      if (data.length > 0) {
        const user = data[0];
        console.log(user.isAdmin);
        console.log(user.id);
  
        try {
          const passwordMatch = bcrypt.compare(
            req.body.password.toString(),
            user.password
          );
  
          if (passwordMatch) {
            console.log("Password comparison successful");
            const isAdmin = user.isAdmin;

            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
              expiresIn: 86400, // 24 hours
            });
            console.log(token);
            
            if (isAdmin) {
              console.log("User is an admin");
              
            } else {
              console.log("User is not an admin");
            }
            
            return res.json({
              valid: true,
              Login: true,
              token: token,
              isAdmin: isAdmin,
            });

          } else {
            console.log("Password comparison failed");
            return res.json({ valid: false, Login: false, message: "Failed" });
          }
        } catch (err) {
          console.log("bcrypt compare error:", err);
          return res.json({ valid: false, Login: false, message: "Error" });
        }
      } else {
        console.log("No user found");
        return res.json({ valid: false, Login: false, message: "Failed" });
      }
    });
  

  };
  
  
const Logout = (req, res) => {
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
}

module.exports = {
                Signup, 
                Signin,
                Logout};