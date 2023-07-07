const dotenv = require('dotenv');
dotenv.config();
 
 const PORT=process.env.PORT || 3000

 const DB_URI = process.env.DB_URL

module.exports = {
     PORT, DB_URI
}