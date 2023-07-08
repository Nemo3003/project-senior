

const dotenv = require('dotenv');

dotenv.config();

const pool = require("../db/db.js")



const countUsers = () => {
    const query = "SELECT COUNT(*) as total_users FROM users";
    return new Promise((resolve, reject) => {
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
    const query = "SELECT COUNT(users_id) as total_users FROM enrollments";
    return new Promise((resolve, reject) => {
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