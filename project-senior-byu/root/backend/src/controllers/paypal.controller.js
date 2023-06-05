const express = require('express');
const morgan = require('morgan')
const mercadopago = require('mercadopago')

const mysql = require("mysql");
const dotenv = require('dotenv');
const countUsers = require('../helpers/countUsers')
dotenv.config();


const db = mysql.createConnection({
  host: process.env.DATABASE_CONN_ALT,
  port: process.env.PORT,
  user: process.env.USER_ALT,
  password: process.env.PASSWORD_ALT,
  database: process.env.HOST,
});

mercadopago.configure("access_token", process.env.ACCESS_TOKEN)
const MercadoPago = (req, res) => {

}