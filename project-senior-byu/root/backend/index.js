const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
dotenv.config();
const mysql = require('mysql2/promise');

const authRoute = require('./src/routes/auth.routes');
const adminRoute = require('./src/routes/admin.routes');
const classesRoute = require('./src/routes/classes.routes');
const usersRoute = require('./src/routes/users.routes');

const { pool } = require('./src/db/db.js');
const { PORT } = require('./src/db/config.js');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://heartfelt-twilight-23e637.netlify.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

const port_nd = 8081;
app.listen(port_nd, () => console.log(`Listening on port ${port_nd}`));

const routes = [authRoute, adminRoute, classesRoute, usersRoute];
app.get('/', (req, res) => {
  res.send('Hello, welcome to ocacoplus!');
});

app.use('/',...routes);
