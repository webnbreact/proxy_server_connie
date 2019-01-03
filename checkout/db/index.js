const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password123',         // Change user here if the mysql user on your computer differs
  database: 'booking',
});


module.exports = db;
