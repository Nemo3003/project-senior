const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
dotenv.config();
const mysql = require('mysql2/promise')

const authRoute = require('./src/routes/auth.routes')
const adminRoute = require('./src/routes/admin.routes')
const classesRoute = require('./src/routes/classes.routes')
const usersRoute = require('./src/routes/users.routes')

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(morgan('dev'))

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  // other headers and configurations
  next();
});

const port_nd = 8081;
app.listen(port_nd, ()=>console.log(`Listening on port ${port_nd}`));

const db =  mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: {
    rejectUnauthorized: true, // Disables SSL/TLS certificate verification
  }
});

const routes = [authRoute,adminRoute,classesRoute,usersRoute,]

app.use('/', ...routes)

db.connect(err => {
  if (err) {console.error(err.message);}
  console.log("Database connected");
});