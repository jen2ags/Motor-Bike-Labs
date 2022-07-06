const userSeeds = require('./userSeed.json');
const motorcycleSeeds = require('./motorcycleSeed.json');
const db = require('../config/connection');
const { Motocycle, User } = require('../models');

// db.once('open', async () => {
//   try {
//     await Motocycle.deleteMany({});
//     await User.deleteMany({});

//     await User.create(userSeeds);

//     for (let i = 0; i < thoughtSeeds.length; i++) {
//       const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
//       const user = await User.findOneAndUpdate(
//         { username: thoughtAuthor },
//         {
//           $addToSet: {
//             thoughts: _id,
//           },
//         }
//       );
//     }
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }

//   console.log('all done!');
//   process.exit(0);
// });