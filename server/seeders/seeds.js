
const motorcycleSeeds = require('./motorcycleSeed.json');
const contactSeeds = require('./contactSeeds.json')
const db = require('../config/connection');
const { Motorcycle, User, Contact } = require('../models');

db.once('open', async () => {
  try {
    await Motorcycle.deleteMany({});
    await User.deleteMany({});

    await Motorcycle.create(motorcycleSeeds);
    await Contact.create(contactSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
