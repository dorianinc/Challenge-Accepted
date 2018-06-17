'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Challenges', [
      {
        challenge_name: 'Mission Peak Grind',
        location: 'Mission Peak, Fremont, CA, USA',
        description: 'Hike to the top of Mission Peak within an hour',
        points: 3,
        image: 'https://res.cloudinary.com/dkuhmdf7w/image/upload/v1529145653/cbrtbbrivmuaaw4rfba2.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        challenge_name: "Straight D's",
        location: 'Planet Granite, Sunnyvale, CA, USA',
        description: "Successfully complete at least four 5.10d's",
        points: 4,
        image:'https://res.cloudinary.com/dkuhmdf7w/image/upload/v1529145845/v3iixgvabyf1akl13gjh.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        challenge_name: 'Conquer the Moutain',
        location: 'Half Dome, Yosemite, California, USA',
        description: 'Hike to the top of Half Dome',
        points: 5,
        image: 'https://res.cloudinary.com/dkuhmdf7w/image/upload/v1529145788/njapuv92in6me89utguj.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        challenge_name: 'Yum! CHIPS!',
        location: 'Mount Woodson Trail, San Diego, California, USA',
        description: 'Make it to Potato Chip Rock',
        points: 4,
        image: 'https://res.cloudinary.com/dkuhmdf7w/image/upload/v1529145869/vls5hxdfhtd3jl9k3lzj.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        challenge_name: 'Dont Wine! Just Do It.',
        location: 'Napa Valley, CA, USA',
        description: 'Participate in the Tour de Napa',
        points: 3,
        image: 'https://res.cloudinary.com/dkuhmdf7w/image/upload/v1529145946/qgvbwwfnhva9drucfu6s.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
