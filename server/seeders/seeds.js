
const motorcycleSeeds = require('./motorcycleSeed.json');
const db = require('../config/connection');
const { Motorcycle, User } = require('../models');

db.once('open', async () => {
  try {
    await Motorcycle.deleteMany({});
    await User.deleteMany({});

    await Motorcycle.create(motorcycleSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
