const express = require('express');
const app = express();
const path = require('path');

app.listen(8080);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));