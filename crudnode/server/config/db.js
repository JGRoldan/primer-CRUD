require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.DBPASS,
  database: process.env.DBNAME
});

module.exports = db;