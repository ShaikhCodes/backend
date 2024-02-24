// backend/server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'database-1.cb88o66ooik1.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'ADMIN123',
  database: 'todoapp',
  port: '3306'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + db.threadId);
});

// CRUD operations
// Implement your CRUD operations here

// backend/server.js

// ...

// Get all tasks
app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
      if (err) {
        console.error('Error getting tasks:', err);
        res.status(500).send('Error getting tasks');
        return;
      }
      res.json(results);
    });
  });
  
  // Add a new task
  app.post('/tasks', (req, res) => {
    const { task } = req.body;
    db.query('INSERT INTO tasks (task) VALUES (?)', [task], (err, result) => {
      if (err) {
        console.error('Error adding task:', err);
        res.status(500).send('Error adding task');
        return;
      }
      res.status(201).send('Task added');
    });
  });
  
  // Delete a task
  app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM tasks WHERE id = ?', [id], (err, result) => {
      if (err) {
        console.error('Error deleting task:', err);
        res.status(500).send('Error deleting task');
        return;
      }
      res.send('Task deleted');
    });
  });
  
  // ...
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
