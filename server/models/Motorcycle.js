const { Schema, model } = require('mongoose');

const motorSchema = new Schema(
  {
    make: {
      type: String
    },
    model: {
      type: String
    },
    year: {
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


const Motorcycle = model('Motorcycle', motorSchema);

module.exports = Motorcycle;
