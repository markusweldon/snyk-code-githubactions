const express = require('express');
const app = express();
const port = 3000;

// SQL Injection vulnerability
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  console.log(query);
  res.send('User query: ' + query);
});

// XSS vulnerability
app.get('/search', (req, res) => {
  const searchTerm = req.query.q;
  res.send(`<h1>Search results for: ${searchTerm}</h1>`);
});

// Path Traversal vulnerability
const fs = require('fs');
app.get('/file', (req, res) => {
  const fileName = req.query.name;
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});