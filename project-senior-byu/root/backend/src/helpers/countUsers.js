
const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config();


const db = mysql.createConnection({
  host: process.env.DATABASE_CONN_ALT,
  port: process.env.PORT,
  user: process.env.USER_ALT,
  password: process.env.PASSWORD_ALT,
  database: process.env.HOST,
});



const countUsers = () => {
    return new Promise((resolve, reject) => {
      const query = "SELECT COUNT(*) as total_users FROM ocacoplus.users";
      db.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0].total_users);
        }
      });
    });
  };
  const countUsersEnrolled = () => {
    return new Promise((resolve, reject) => {
      const query = "SELECT COUNT(users_id) as total_users FROM ocacoplus.enrollments";
      db.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0].total_users);
        }
      });
    });
  };

module.exports = {countUsers, countUsersEnrolled}