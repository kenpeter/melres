const config = require('./config');
const mylib = require('./lib/lib');

const myfunc = async () => {
  let startIndex;
  const count = config.count;

  for (startIndex = 0; startIndex < config.total; startIndex += config.count) {
    const result = await mylib.fetechResPromise(startIndex, count);
    //console.log('===================');
    //console.log(startIndex);
    //console.log(result.restaurants);

    const resArr = result.restaurants;
    resArr.forEach(async (res) => {
      const myRes = res.restaurant;
      await mylib.restaurantSavePromise(myRes);
      // "id": "18106852", it is from the api, not from mongo db
      const condi = await mylib.restaurantVoteExistPromise(myRes.id);
      if (!condi) {
        await mylib.restaurantVoteSavePromise(myRes.id);
        //console.log('-- not exist --');
      }

      /*
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

      console.log('-- start --');
      console.log(resId);
      console.log(name);
      console.log(url);

      console.log(address);
      console.log(averageCostForTwo);
      console.log(thumbUrl);
      console.log(rating);

      console.log(photoUrl);
      console.log(menuUrl);
      console.log(featureImageUrl);

      console.log('-- end --');
      */
    });
  }

  process.exit(0);
};

myfunc();
