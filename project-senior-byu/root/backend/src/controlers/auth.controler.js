const mysql = require("mysql");
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
        return res.redirect('/test');
      });
    }


const Signin = async (req, res) => {
  try {
    const [user] = await db.query("SELECT * FROM users WHERE `email` = ?", [req.body.email]);
    if (user) {
      const match = await bcrypt.compare(req.body.password, user.password);
      if (match) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        return res.json({ token });
      }
    }
    return res.json("Failed");
  } catch (err) {
    console.log("Error:", err);
    return res.json("Error");
  }};


module.exports = [Signup, Signin]
