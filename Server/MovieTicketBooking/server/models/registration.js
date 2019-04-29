'use strict';
module.exports = (sequelize, DataTypes) => {
  const registration = sequelize.define('registration', {
    fullname: DataTypes.STRING,
    phoneNo: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  registration.associate = function(models) {
    // associations can be defined here
  };
  return registration;
};