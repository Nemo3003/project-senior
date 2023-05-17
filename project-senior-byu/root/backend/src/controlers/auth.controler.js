const mysql = require("mysql");
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = 10;
dotenv.config();


const db = mysql.createConnection({
  host: process.env.DATABASE_CONN_ALT,
  port: process.env.PORT,
  user: process.env.USER_ALT,
  password: process.env.PASSWORD_ALT,
  database: process.env.HOST,
});



const Signup = (req, res) => {
    const sql = 'INSERT INTO ocacoplus.users (username, email, password) VALUES (?, ?, ?)';
    bcrypt.hash(req.body.password.toString(), salt, (err, hash)=>{{
      if(err) return res.json({Error: "Error hashing password"})
      const values = [
        req.body.username,
        req.body.email,
        hash
      ]
      db.query(sql, [values], (err, result) => {
        if (err) return res.status(500).json({ error: 'Failed to create user' });
        return res.json({Status: 'Success'});
      });
    }})
      
      
      
    }


const Signin = async (req, res) => {
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
  });
};

module.exports = [Signup, Signin]
