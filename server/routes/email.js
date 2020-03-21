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
  const query = "SELECT * FROM destinatary";
  conn.query(query, (err, result) => {
    if(err) console.log(err);
    else res.json(result);
  })
})

router.patch('/patch', (req, res) => {
  const query = `UPDATE destinatary SET email='${req.body.email}' WHERE ID=1;`
  conn.query(query, (err, result) => {
    if(err) console.log(err);
    else res.sendStatus(200);
  })
})

module.exports = router;