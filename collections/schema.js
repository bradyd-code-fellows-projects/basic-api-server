'use strict';

const { DataTypes } = require("sequelize/types");

module.exports = (sequelize.define('person', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}));
