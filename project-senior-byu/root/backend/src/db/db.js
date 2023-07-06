const mysql = require('mysql2/promise')
const {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  DB_PORT,
  DB_URI
} = require('./config.js')

try{
const pool = mysql.createPool(DB_URI)
module.exports = pool
}
catch(err){
  throw new Error(err)
}

