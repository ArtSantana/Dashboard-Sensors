require('dotenv').config();
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

conn.connect((err) => {if(err) console.log(err)});

router.get('/search', (req, res) => {
  const query = "SELECT * FROM sensors";
  conn.query(query, (err, result) => {
    if(err) res.sendStatus(404);
    else res.json(result);
  })
})

module.exports = router;