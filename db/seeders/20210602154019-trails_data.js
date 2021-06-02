'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Trails', [{
        name: 'The Maze',
        description: 'There’s a reason this hike is called The Maze: it’s quite literally a labyrinth of Redrock and dead-end canyons that takes expert planning and self-sufficiency to tackle. While undeniably beautiful, this expert level hike is not the place for inexperienced hikers. The difficulties include interconnecting canyons that all look the same, high cliffs with no vantage points, scarce water supplies, and temperatures that reach around 48 degrees Celsius (118 degrees Fahrenheit). One mistake and you could be left for up to three days waiting for a rescue committee.',
        length: 14,
        difficulty: 10,
        state_id: 44,
        cross_state: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bright Angel Trail',
        description: 'Imagine a trail that descends into a massive hole that you have to climb back out of – that’s the South Kaibab and Bright Angel Trails. Located in the heart of the Grand Canyon, this hike offers an up close and person experience with the canyon few tourists can say they’ve experienced. That said, the trail is dangerously difficult. The most obvious difficulty is threefold: the lack of water combined with the length of the trail and boiling temperatures. More than 250 hikers have to be rescued each year due to dehydration and exhaustion!',
        length: 17,
        difficulty: 9,
        state_id: 3,
        cross_state: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    {
        name: 'Kalalau Trail',
        description: 'Easily one of the most breathtaking hikes in the US, the Kalalau Trail also happens to be one of the most difficult. From start to finish, this hike is filled with treacherous conditions, from crumbling trail beds, plummeting cliffs, and slippery inclines that seem impossible to tackle. After even just a little bit of rain, the trail turns into a disastrous slip n’ slide, which isn’t as fun when you’re on the edge of a 90 metre (295 foot) cliff that falls right into a rocky surf. Regardless of the risks, it’s still a popular hike that leads locals and visitors alike to Kalalau, one of the most beautiful beaches you could ever experience.',
        length: 11,
        difficulty: 8,
        state_id: 11,
        cross_state: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    {
        name: 'Mist Trail - Half Dome',
        description: 'Half Dome is easily one of the most beautiful chunks of granite in the entire world. The rock was made to be climbed, which is why the Mist Trail to Half Dome sees between 2,500 and 3,00 people every day during weekends in the summer. But just because it’s popular, doesn’t mean it’s easy… This 22 kilometre hike will push you to your physical limits; from fatigue, altitude sickness, and dehydration – the possibilities seem endless. Not to mention you must be good with heights, as hikers climb up steel cables bolted into the rock all the way to the top. On crowded weekends, hikers clog up the cables, making it impossible to make a quick escape should a storm roll in. It’s a popular hike, but still one of the most difficult.',
        length: 14,
        difficulty: 6,
        state_id: 5,
        cross_state:false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    {
        name: "Muir Snowfield Trail",
        description: 'Unlike some of the previous hikes, the Muir Snowfield is difficult due to its extremely cold temperatures and unforgiving arctic landscape. To reach the summit, hikers must be experienced in alpine climbing, otherwise you have very little hope of reaching the top. Even some of the most experienced mountaineers have slipped or frozen trying to summit the nearly 4,400 metre (14,435.7 foot) tall giant. The start of the trail seems innocent enough, wandering casually through meadows filled with flowers. But it quickly takes a turn when you face the vertical climb up the mountain, so don’t let the start fool you.',
        length: 7.7,
        difficulty: 8,
        state_id: 47,
        cross_state: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    {
        name: 'Huckleberry Mountain',
        description: 'In Glacier National Park, the odds of you having an encounter with a bear are higher than anywhere else in the Lower 48 states. The park boasts the highest bear density in the lower US, making it a beautiful but risky hiking area for anyone a bear might find satisfying. One recent study suggests there are more than 550 bears in the park, leading to a ratio of .35 bears every 2.5 square kilometre. It becomes a difficult hike to manage, due to the planning and preparation it takes to confidently say you could survive a bear attack. The trails are beautiful and the mountain air is soothing, but it’s hard to remain confident in your hike when a grizzly could be around any corner.',
        length: 14,
        difficulty: 8.5,
        state_id: 26,
        cross_state: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    {
        name: 'Barr Trail',
        description: 'The Barr Trail isn’t the hardest hike, but it offers its own unique challenge: electrical activity. More specifically, lighting strikes. As the state with the highest elevation, Colorado’s mountains see an outstanding amount of electrical activity, the biggest hot spot being Pikes Peak. While there is a road that could take you to the summit, most hikers agree that’s the easy way out. The Barr Trail works its way through stunning meadows and boulder fields to the stop of the mountain where the views are like no other. That said, some people argue the risk of lighting strikes on the way up isn’t worth the struggle.',
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
