'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const logger = require('./middleware/logger');
const foodRoute = require('./routes/food');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use(logger);

app.get('/', (req, res) => {
  res.status(200).send('This is the server for Brady\'s 401-lab03');
});

app.use(foodRoute);

app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port ', PORT)),
};
