

const dotenv = require('dotenv');

dotenv.config();

const pool = require("../db/db.js")



const countUsers = () => {
    return new Promise((resolve, reject) => {
      const query = "SELECT COUNT(*) as total_users FROM ocacoplus.users";
      pool.query(query, (error, results) => {
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
      pool.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0].total_users);
        }
      });
    });
  };

module.exports = {countUsers, countUsersEnrolled}