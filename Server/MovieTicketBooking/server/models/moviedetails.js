'use strict';
module.exports = (sequelize, DataTypes) => {
  const moviedetails = sequelize.define('moviedetails', {
    Name: DataTypes.STRING,
    ReleaseDate: DataTypes.DATE,
    Synapsis: DataTypes.STRING,
    Cast: DataTypes.STRING,
    Crew: DataTypes.STRING
  }, {});
  moviedetails.associate = function(models) {
    // associations can be defined here
  };
  return moviedetails;
};
