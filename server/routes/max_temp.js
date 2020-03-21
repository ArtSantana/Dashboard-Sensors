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
  const query = "SELECT * FROM max_temp";
  conn.query(query, (err, result) => {
    if(err) res.sendStatus(404);
    else res.json(result);
  })
})

router.patch('/patch', (req, res) => {
  const query = `UPDATE max_temp SET temperature=${req.body.temperature} WHERE ID=${req.body.id}`;
  conn.query(query, (err) => {
    if(err) res.sendStatus(404)
    else res.sendStatus(200);
  })
})

module.exports = router;