const express = require('express')
const router = require('./src/Routes/api');
const app = new express();

app.use('/api/v1/hello', router);


module.exports = app ;