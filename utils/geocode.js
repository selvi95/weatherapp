const request = require("request");

var geocode = function (city, cb) {
  request(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1Ijoic2Fpa2FsYWlzZWx2aSIsImEiOiJja3g5eXJqYmIwNnl1MnBwZ3dkOTJmb2c3In0.x7UncoRnfeKdsPATfxZGdw`, function (error, response, body) {
    console.error('error:', error);
    var geocode = JSON.parse(body);

    var geocodeObj = {
      latitude: geocode.features[0].center[0],
      longtitude: geocode.features[0].center[1]
    }
    cb(geocodeObj);
  });
}

module.exports = geocode;
