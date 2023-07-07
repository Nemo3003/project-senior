const dotenv = require('dotenv');
dotenv.config();
 
 const PORT=process.env.PORT || 3000

 const DB_URI = process.env.DB_URL

module.exports = {
    DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, PORT, DB_URI
}