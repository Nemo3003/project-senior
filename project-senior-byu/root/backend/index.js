
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
dotenv.config();
const mysql = require('mysql2')

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
  origin: 'https://ocacoplus.onrender.com',
  credentials: true,
}));


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://ocacoplus.onrender.com');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  // other headers and configurations
  next();
});

const port_nd = 8081;
app.listen(port_nd, ()=>console.log(`Listening on port ${port_nd}`));

const db = mysql.createConnection(process.env.DATABASE_URL);

const routes = [authRoute,adminRoute,classesRoute,usersRoute,]

app.use('/', ...routes)

db.connect(err => {
  if (err) {console.error(err.message);}
  console.log("Database connected");
});
