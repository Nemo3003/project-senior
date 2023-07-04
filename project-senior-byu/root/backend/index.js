
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
dotenv.config();
const mysql = require('mysql2')
const http = require('http'); 

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


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://ocacoplus.onrender.com');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  // other headers and configurations
  next();
});

const port_nd = 8081;

// Create a server using http module
const server = http.createServer(app);

const dbConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: {
    rejectUnauthorized: true, // Disables SSL/TLS certificate verification
  }
}
// Connect to the PlanetScale database
async function connectToDatabase() {
  try {
    const db = await mysql.createConnection(dbConfig);
    console.log('Database connected');
    return db;
  } catch (err) {
    console.error('Failed to connect to the database:', err);
    process.exit(1); // Exit the application if the database connection fails
  }
}

const routes = [authRoute, adminRoute, classesRoute, usersRoute];

app.use('/', ...routes);

// Start the server after the database connection is established
connectToDatabase()
  .then((db) => {
    // Pass the database connection to routes or use it as needed
    app.set('db', db);

    server.listen(port_nd, () => console.log(`Listening on port ${port_nd}`));
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
  });