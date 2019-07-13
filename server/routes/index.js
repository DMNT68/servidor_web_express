const express = require('express');

const app = express();

app.use(require('./ejemplo'));

module.exports = app;