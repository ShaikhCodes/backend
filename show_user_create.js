const mysql = require('mysql2');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'ADMIN123',
  database: 'todoapp',
  port: '3306'
});

// Execute the SHOW CREATE USER command
connection.query('SHOW CREATE USER your_username@localhost', function (error, results, fields) {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Results:', results);
  }
});

// Close the connection
connection.end();
