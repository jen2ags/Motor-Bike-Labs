const mongoose = require('mongoose');
require('dotenv').config();

const connect = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/drive-now', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect.then((db) => { console.log('connected to db')})
.catch((err) => {
  console.log(err)
})

module.exports = mongoose.connection;
