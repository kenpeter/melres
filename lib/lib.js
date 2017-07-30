const config = require('../config');
const fetch = require('node-fetch');

exports.fetechResPromise = function fetechResPromise(startIndex, count) {
  return new Promise((resolve, reject) => {
    const zomatoApiUrl = `${config.zomatoApiRootUrl}?entity_id=${config.locationId}&entity_type=${config.entityType}&start=${startIndex}&count=${count}`;

    console.log(zomatoApiUrl);

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
