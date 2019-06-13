'use strict';
module.exports = (sequelize, DataTypes) => {
  const addtheater = sequelize.define('addtheater', {
    theatername: DataTypes.STRING,
    address:DataTypes.STRING,
    city: DataTypes.STRING,
   }, {});
  addtheater.associate = function(models) {
    // associations can be defined here
  };
  return addtheater;
};
