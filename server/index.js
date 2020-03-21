require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT, () => console.log(`Server up at port ${process.env.PORT}`));
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json());
// Importing routes
const active = require('./routes/active');
const max = require('./routes/max_temp');
const temp = require('./routes/temperature');
const email = require('./routes/email');
// Defining URL's
app.use('/activate', active);
app.use('/max_temp', max);
app.use('/temperature', temp);
app.use('/email', email);