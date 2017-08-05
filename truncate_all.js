// model
const Restaurant = require('./models/Restaurant');
const RestaurantVote = require('./models/RestaurantVote');

Restaurant.remove({}, (err, res) => {
  console.log('-- remove restaurant --');
  RestaurantVote.remove({}, (err1, res1) => {
    console.log('-- remove restaurantVote --');
      process.exit(0);
  });
});
