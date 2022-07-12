const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema (
  {
    reviewBody: {
        type: String,
        required: true,
        maxlength: 300
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
        getters: true
    }
  }

);

const Review = model('Review', reviewSchema);
module.exports = Review;