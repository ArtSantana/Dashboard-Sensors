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

router.get('/search', (res) => {
  const query = "SELECT * FROM active";
  conn.query(query, (err, result) => {
    if(err) res.sendStatus(404);
    else res.json(result);
  })
})

router.patch('/patch', (req, res) => {
  const query = `UPDATE active SET activate=${req.body.activate} WHERE ID=${req.body.id}`;
  conn.query(query, (err) => {
    if(err) {console.log(err); res.sendStatus(403)}
    else res.sendStatus(200);
  })
})

module.exports = router;