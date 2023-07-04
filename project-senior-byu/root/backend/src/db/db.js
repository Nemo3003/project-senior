const mysql = require("mysql2");
const dotenv = require('dotenv');
dotenv.config();

const db = () => {
    return  mysql.createConnection(process.env.DATABASE_URL)
}

module.exports = db;