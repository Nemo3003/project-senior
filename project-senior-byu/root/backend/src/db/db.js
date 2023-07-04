const mysql = require("mysql2");

const db = () => {
    return  mysql.createConnection(process.env.DATABASE_URL)
}

module.exports = db;