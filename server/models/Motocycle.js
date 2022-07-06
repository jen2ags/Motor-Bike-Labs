const { Schema, model } = require('mongoose');

const motoSchema = new Schema(
  {
    name: {
      type: String
    },
    motoType: {
      type: String
    },
    price:{
      type:String
    },
    image: {
      type: String
    },
    link: {
      type: String
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);


const Motocycle = model('Motocycle', motoSchema);

module.exports = Motocycle;
