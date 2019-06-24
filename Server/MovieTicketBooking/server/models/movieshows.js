'use strict';
module.exports = (sequelize, DataTypes) => {
  const movieshows = sequelize.define('movieshows', {
    movie_id: DataTypes.INTEGER,
    show_id: DataTypes.INTEGER
  }, {});
  movieshows.associate = function(models) {
    movieshows.belongsTo(models.shows,{
      foreignKey:{
        name:'show_id',
        allowNull:false
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    })
    movieshows.belongsTo(models.moviedetails,{
      foreignKey:{
        name:'movie_id',
        allowNull:false
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    })

  };
  return movieshows;
};
