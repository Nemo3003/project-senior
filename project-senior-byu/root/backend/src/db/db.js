const {createPool} = require('mysql2/promise')
const {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  DB_PORT
} = require('./config.js')

try{
const pool = createPool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME
})
}
catch(err){
  throw new Error(err)
}

module.exports = pool