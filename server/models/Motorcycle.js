const { Schema, model } = require('mongoose');
const reviewSchema = require('./Review');

const motorSchema = new Schema(
  {
    make: {
      type: String
    },
    year: {
      type: String
    },
    model: {
      type: String
    },
    mileage:{
      type: String
    },
    price:{
      type:String
    },
    condition: {
      type: String
    },
    primaryColor: {
      type: String
    },
    category: {
      type: String
    },
    type: {
      type: String
    },
    location: {
      type: String
    },
    stockNum: {
      type: String
    },
    image_1: {
      type: String
    },
    image_2: {
      type: String
    },
    image_3: {
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
