const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=1965ea235b4b89c3e4eff42976145f74&query=${latitude},${longitude}`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to weather service.", undefined);
    } else if (body.error) {
      callback("Unable to find the loaction.", undefined);
    } else {
      callback(
        undefined,
        `It is currently ${body.current.temperature} degress out.` +
          `It feels like ${body.current.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
