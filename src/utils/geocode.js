const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic3dlZXRpY2s1IiwiYSI6ImNrbHV6bmswbjA0YmEyb28wOWw2Z2s0NTYifQ.qOIr7xOdcw90_quG4jPwxA&limit=1`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to location service.", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
