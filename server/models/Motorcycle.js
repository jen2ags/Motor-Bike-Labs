const { Schema, model } = require('mongoose');
const reviewSchema = require('./Review');

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
    mileage: {
      type: String
    },
    price:{
      type:String
    },
    image: {
      type: String
    },
    reviews: [reviewSchema]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);


const Motorcycle = model('Motorcycle', motorSchema);

module.exports = Motorcycle;
