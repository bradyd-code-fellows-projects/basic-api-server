'use strict';

const { sequelize, FoodModel } = require('./src/models');

sequelize.sync()
  .then(() => {
    console.log('Successful Connection');
  })
  .catch(err => console.error(err));