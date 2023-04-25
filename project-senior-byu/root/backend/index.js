const mysql = require("mysql");
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();


const app = express();

app.use(express.json())
app.use(cors());

app.listen(8081, ()=>{
  console.log('...listening')
})


const db = mysql.createConnection({
  host: process.env.DATABASE_CONN,
  port: process.env.PORT,
  user:process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.HOST,
});

app.post('/signup', (req, res)=>{
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  db.query(`INSERT INTO ${proces.env.HOST} (email,username,password) VALUES(?,?,?)`, [email, username, password],
    (err,result)=>{
      if(result){
        res.send(result);
      }else {
        res.send({message: "Enter correct asked details!"})
      }
    }
  )
})

app.post('/login', (req, res)=>{
  const email = req.body.email;
  const password = req.body.password;

  db.query(`SELECT * FROM ${proces.env.HOST} WHERE email = ? AND password = ?`, [email, password],
    (err,result)=>{
      if(err){
        req.setEncoding({err:err});
      }else {
        if(result.length > 0){
          res.send(result)
        }else{
          res.send({message: "wrong!"})
        }
      }
    }
  )
})

db.connect(err=>{
  if(err){
    console.error(err.message);
  }
  console.log("database connected")
})