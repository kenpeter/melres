module.exports = {
  secret: 'melres',
  database: 'mongodb://melres:melres@localhost:27017/melres',
  zomatoApiKey: 'E9b1cff0cffa024fcc7dd2da1abf75ca',
  locationId: 259,
  count: 20,
  total: 20, // max is 100, that is all
  entityType: 'city',
  startIndex: 0,
  // entity_id = 259, city is Melbourne
  // only able to get 20 restaurants each time.
  //zomatoUrl: 'https://developers.zomato.com/api/v2.1/search?entity_id=259&entity_type=city&start=0&count=20'
  zomatoApiRootUrl: 'https://developers.zomato.com/api/v2.1/search'
};
