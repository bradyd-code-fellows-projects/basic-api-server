'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize.sync()
  .then(() => console.log('Successful Connection'))
  .catch(err => console.error(err));
