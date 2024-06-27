const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'admin',
  database: 'db_ecommerce'
});

dbConnection.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});

module.exports = dbConnection;
