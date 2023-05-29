const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const mysql = require("mysql");
const dotenv = require('dotenv');
const express = require('express');

dotenv.config();


const app = express();
const db = mysql.createConnection({
  host: process.env.DATABASE_CONN_ALT,
  port: process.env.PORT,
  user: process.env.USER_ALT,
  password: process.env.PASSWORD_ALT,
  database: process.env.HOST,
});

const userUploads = (req, res) => {
    const file = req.file;
  
    // Insert the file information into the database
    const insertQuery = `INSERT INTO files (name, size, file_data) VALUES (?, ?, ?)`;
    const values = [file.originalname, file.size, file.path];
  
    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error('Error inserting file information:', err);
        // Handle the error response
        res.status(500).json({ error: 'Failed to store file information' });
        return;
      }
  
      console.log('File information stored successfully');
      res.json({ message: 'File uploaded successfully!' });
    });
  }


const getDocument = (req, res) => {
    const fileId = req.params.id;
  
    // Query the database to retrieve the file data
    const selectQuery = `SELECT file_data, name FROM files WHERE id = ?`;
    db.query(selectQuery, [fileId], (err, results) => {
      if (err) {
        console.error('Error retrieving file data:', err);
        // Handle the error response
        res.status(500).json({ error: 'Failed to retrieve file data' });
        return;
      }
  
      if (results.length === 0) {
        // Handle case when file is not found
        res.status(404).json({ error: 'File not found' });
        return;
      }
  
      const fileData = results[0].file_data;
      const fileName = results[0].name;
  
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
      res.send(fileData);
    });
  }
module.exports = {userUploads, getDocument}