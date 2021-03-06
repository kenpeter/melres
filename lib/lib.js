const config = require('../config');
const fetch = require('node-fetch');
const Restaurant = require('../models/Restaurant');
const RestaurantVote = require('../models/RestaurantVote');

const mongoose = require('mongoose');

exports.fetechResPromise = function fetechResPromise(startIndex, count) {
  return new Promise((resolve, reject) => {
    const zomatoApiUrl = `${config.zomatoApiRootUrl}?entity_id=${config.locationId}&entity_type=${config.entityType}&start=${startIndex}&count=${count}`;

    //console.log(zomatoApiUrl);

    fetch(zomatoApiUrl, {
      method: 'GET',
      headers: {
        'user-key': config.zomatoApiKey
      }
    })
    .then((res) =>
      res.json()
    )
    .then((json) => {
      //console.log(JSON.stringify(json, null, 4));
      resolve(json);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};


exports.restaurantSavePromise = function restaurantSavePromise(myRes) {
  return new Promise((resolve, reject) => {
    //
    const resId = myRes.id;
    const name = myRes.name;
    const url = myRes.url;
    const address = myRes.location.address;

    const averageCostForTwo = myRes.average_cost_for_two;
    const thumbUrl = myRes.thumb;
    const rating = myRes.user_rating.aggregate_rating;

    const photoUrl = myRes.photos_url;
    const menuUrl = myRes.menu_url;
    const featureImageUrl = myRes.featured_image;

    const restaurant = new Restaurant({
      resId,
      name,
      url,
      address,

      averageCostForTwo,
      thumbUrl,
      rating,
      photoUrl,

      menuUrl,
      featureImageUrl
    });

    restaurant.save((err, doc) => {
      // err
      if (err) {
        const obj = { success: false };
        console.log(err);
        reject(obj);
      } else {
        console.log('-- restarant saved --');
        resolve(doc);
      }
    });
  });
};


exports.restaurantVoteExistPromise = function restaurantVoteExistPromise(resId) {
    return new Promise((resolve, reject) => {
      //test
      //console.log(`-- what is res: ${resId} --`);
      RestaurantVote.findOne({ restaurant: resId }, (err, doc) => {
        // err
        if (err) {
          const obj = { success: false };
          console.log(err);
          reject(obj);
        } else {
          if (doc) {
            console.log('-- restarantVote found --');
            resolve(true);
          } else {
            console.log('-- restarantVote not found --');
            resolve(false);
          }
        }
      });
    });
};

exports.restaurantVoteSavePromise = function restaurantVoteSavePromise(resId) {
    return new Promise((resolve, reject) => {
      const restaurantVote = new RestaurantVote({
        restaurant: resId
      });

      restaurantVote.save((err, doc) => {
        // err
        if (err) {
          const obj = { success: false };
          console.log(err);
          reject(obj);
        } else {
          console.log('-- restarantVote saved --');
          resolve(doc);
        }
      });
    });
};
