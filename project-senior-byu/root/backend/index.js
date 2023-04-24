const mysql = require("mysql");
const dotenv = require('dotenv');
dotenv.config();


const db = mysql.createConnection({
  host: process.env.DATABASE_CONN,
  port: process.env.PORT,
  user:process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.HOST,
});

db.connect(err=>{
  if(err){
    console.error(err.message);
  }
  console.log("database connected")
})