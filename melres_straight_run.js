const fetch = require('node-fetch');
const config = require('./config');

let zomatoApiUrl = `${config.zomatoApiRootUrl}?entity_id=${config.locationId}&entity_type=city&start=0&count=20`;

/*
console.log('-- test --');
console.log(zomatoApiUrl);
console.log('https://developers.zomato.com/api/v2.1/search?entity_id=259&entity_type=city&start=0&count=20');
console.log(config.zomatoApiKey);
*/

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
  console.log(JSON.stringify(json, null, 4));
})
.catch((err) => {
  console.log(err);
});
