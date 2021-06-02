'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert(
        "Reviews",
        [
          {
            review: "This trail is amazing!",
            user_id: 1,
            trail_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            review: "This trail was difficult!",
            user_id: 1,
            trail_id: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
