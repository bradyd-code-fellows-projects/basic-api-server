'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('vehicle', {
    vehicleType: {
      type: DataTypes.ENUM,
      values: ['sedan', 'pickup', 'SUV', 'coupe', 'minivan', 'other'],
      allowNull: true,
    },
    vehicleMake: {
      type: DataTypes.ENUM,
      values: ['Dodge', 'Ford', 'Chevrolet', 'Nissan', 'Toyota', 'Tesla', 'Hyundai', 'Cadillac', 'Lincoln', 'Lexus', 'BMW', 'Saturn', 'Volkswagen', 'Other'],
      allowNull: false,
    },
    vehicleModel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
