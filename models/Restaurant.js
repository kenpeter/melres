// connect to db
const mongoose = require('mongoose');

const conn = require('../connect');

//
const Schema = mongoose.Schema;
//
const RestaurantSchema = new Schema({
  resId: String,
  name: String,
  address: String,
  url: String,
  thumbUrl: String,
  featuredImageUrl: String,
  aggregateRating: Number,
  averageCostForTwo: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
//
const Restaurant = conn.model('Restaurant', RestaurantSchema);
//
module.exports = Restaurant;
