'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const foodSchema = require('./food');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5433/basic-api-server';

const sequelize = new Sequelize(DATABASE_URL);

const FoodModel = foodSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  FoodModel,
};
