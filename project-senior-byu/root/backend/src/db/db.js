const mysql = require("mysql2");

const db = () => {
    return  mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_NAME,
        port: process.env.PORT
      });
}

module.exports = db;