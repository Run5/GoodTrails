'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Trails', [{
        name: 'The Maze',
        img: null,
        length: 14,
        difficulty: 10,
        state_id: 44,
        cross_state: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bright Angel Trail',
        img: null,
        length: 17,
        difficulty: 9,
        state_id: 3,
        cross_state: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    {
        name: 'Kalalau Trail',
        img: null,
        length: 11,
        difficulty: 8,
        state_id: 11,
        cross_state: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    {
        name: 'Mist Trail - Half Dome',
        img: null,
        length: 14,
        difficulty: 6,
        state_id: 5,
        cross_state:false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    {
        name: "Muir Snowfield Trail",
        img: null,
        length: 7.7,
        difficulty: 8,
        state_id: 47,
        cross_state: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    {
        name: 'Huckleberry Mountain',
        img: null,
        length: 14,
        difficulty: 8.5,
        state_id: 26,
        cross_state: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    {
        name: 'Barr Trail',
        img: null,
        length: 13,
        difficulty: 7,
        state_id: 6,
        cross_state: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Trails', null, {});

  }
};
