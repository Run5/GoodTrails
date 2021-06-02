'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      description: {
        type: Sequelize.STRING(1000),
      },
      length: {
        allowNull: false,
        type: Sequelize.NUMERIC,
      },
      difficulty: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      state_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "States" },
      },
      cross_state: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable('Trails');
  }
};
