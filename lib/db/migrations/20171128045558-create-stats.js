'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('stats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      scriptId: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      projectId: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      day: {
        type: Sequelize.DATE
      },
      undo: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      delivered: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      failed: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      succeed: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
    return queryInterface.dropTable('stats');
  }
};
