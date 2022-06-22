'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const foodSchema = require('./food.schema');
const vehicleSchema = require('./vehicle.schema');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/basic-api-server';

const sequelize = new Sequelize(DATABASE_URL);

// const sequelize = new Sequelize(DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

const FoodModel = foodSchema(sequelize, DataTypes);

const VehicleModel = vehicleSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  FoodModel,
  VehicleModel,
};
