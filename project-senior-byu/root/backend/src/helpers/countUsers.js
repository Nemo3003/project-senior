
const mysql = require("mysql2");
const dotenv = require('dotenv');

dotenv.config();


const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.PORT
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