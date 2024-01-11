require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "your host name",
  user: "your user",
  password: "your password",
  database: "your dbname"
});

module.exports = db;
