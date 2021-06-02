'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      return queryInterface.bulkInsert('Collections', [{
        user_id: 1,
        trail_id: 4,
        visited: true,
        want_to_visit: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Collections', null, {});

  }
};
