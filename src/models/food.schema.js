'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    baseType: {
      type: DataTypes.ENUM,
      values: ['beef', 'chicken', 'pork', 'vegetarian', 'other'],
      allowNull: true,
    },
  });
};
