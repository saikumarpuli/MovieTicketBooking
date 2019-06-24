'use strict';
module.exports = (sequelize, DataTypes) => {
  const shows = sequelize.define('shows', {
    showtimings: DataTypes.INTEGER
  }, {});
  shows.associate = function(models) {
    shows.belongsToMany(models.moviedetails,{
      through:'movieshows',
      as:shows,
      foreignKey:{
        name:'show_id',
        allowNull:false
      }
    })

  };
  return shows;
};
