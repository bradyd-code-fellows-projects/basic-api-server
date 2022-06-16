'use strict';

const { sequelize, FoodModel } = require('./src/models');
const server = require('./src/server');

sequelize.sync()
  .then(() => {
    console.log('Successful Connection');
  })
  .catch(err => console.error(err));

server.start();