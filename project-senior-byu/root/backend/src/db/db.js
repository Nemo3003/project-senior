const mysql = require("mysql");

const db = () => {
    return  mysql.createConnection({
        host: process.env.DATABASE_CONN_ALT,
        port: process.env.PORT,
        user: process.env.USER_ALT,
        password: process.env.PASSWORD_ALT,
        database: process.env.HOST,
      });
}

module.exports = db;