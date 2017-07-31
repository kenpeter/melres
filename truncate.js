// model
const Restaurant = require('./models/Restaurant');

Restaurant.remove({}, (err, res) => {
  console.log('-- remove restaurant --');
  process.exit(0);
});
