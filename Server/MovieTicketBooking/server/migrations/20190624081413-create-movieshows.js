'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movieshows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movie_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'moviedetails',
          key:'id'
        },
        allowNull: false,
        onUpdate:'cascade',
        onDelete:'cascade'

      },
      show_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'shows',
          key:'id'
        },
        allowNull: false,
        onUpdate:'cascade',
        onDelete:'cascade'

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movieshows');
  }
};
