const config = require('./config');
const mylib = require('./lib/lib');

const myfunc = async () => {
  let startIndex;
  const count = config.count;

  for (startIndex = 0; startIndex < config.total; startIndex += config.count) {
    const result = await mylib.fetechResPromise(startIndex, count);
    console.log('===================');
    console.log(startIndex);
    console.log(result);
  }

  /*
  startIndex = 0;
  const result1 = await mylib.fetechResPromise(startIndex, count);

  startIndex += config.count;
  const result2 = await mylib.fetechResPromise(startIndex, count);

  startIndex += config.count;
  const result3 = await mylib.fetechResPromise(startIndex, count);


  console.log('-- test --');
  console.log(JSON.stringify(result1, null, 4));
  console.log('==============================');
  console.log(JSON.stringify(result2, null, 4));
  */

  process.exit(0);
};

myfunc();
