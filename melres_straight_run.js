const config = require('./config');
const mylib = require('./lib/lib');

const myfunc = async () => {
  let startIndex;
  const count = config.count;

  for (startIndex = 0; startIndex < config.total; startIndex += config.count) {
    const result = await mylib.fetechResPromise(startIndex, count);
    console.log('===================');
    //console.log(startIndex);
    //console.log(result.restaurants);

    const resArr = result.restaurants;
    resArr.forEach((res) => {
      res = res.restaurant;
      const resId = res.id;
      const name = res.name;
      //console.log(res);
      console.log(`${resId}: ${name}`);
    });
  }

  process.exit(0);
};

myfunc();
