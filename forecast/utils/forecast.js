const request = require('request');

const forecast = (latitude, longitude, callback) => {
    
    // URL
    // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    // http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=bbed4b542f115ffbb662110104b1d7c0

    const url = "http://api.openweathermap.org/data/2.5/weather?lat=" + encodeURIComponent(latitude) + "&lon=" + encodeURIComponent(longitude) + "&appid=bbed4b542f115ffbb662110104b1d7c0";

    // Http request
    request({
        url: url,
        json: true,
    }, (error, response) => {
        // Verify if there is an error
        if(error){
            callback('Cant connect to the services!', undefined);

            // If there is no properties
        } else if(response.body.length === 0){
            callback('No matches found! Double check the it.', undefined);
        } else {
            // Get the temperature, pressure, humidity and weather main
            callback('undefined', {
                //place_name: response.body.name,
                temperature: response.body.main.temp,
                pressure: response.body.main.pressure,
                humidity: response.body.main.humidity,
                weather_main: response.body.weather[0].main,
            })
        }
    })

}



module.exports = forecast