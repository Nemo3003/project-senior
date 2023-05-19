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
  } 


const Signin = async (req, res) => {
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
}
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

module.exports = [
                Signup, 
                Signin,
                Logout
                ]
