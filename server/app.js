const express = require('express');
const app = express();
// const ejs = require('ejs');
// require('express-async-errors');
// const path = require('path');
const port = 5001

require('dotenv').config();
app.use(express.json());


app.use('/users', require('./router/users'))


app.listen(port, () => console.log('Listening on port ' + port))
