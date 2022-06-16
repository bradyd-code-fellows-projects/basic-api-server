'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    baseType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
