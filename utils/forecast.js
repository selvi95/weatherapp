const request = require('request');

var forecast = function (data, cb) {
    request(`http://api.weatherstack.com/current?access_key=bfb004b26db04080c5d08d62048424cb&query=${data.longtitude
},${data.latitude}`, function (error, response, body) {
        console.error('error:', error);
        var forecast = JSON.parse(body);
        // console.log("forecast", forecast);
        // console.log("forecast", forecast.current.weather_descriptions[0]);
        cb(forecast.current.weather_descriptions[0]);
    });
}

module.exports = forecast;


