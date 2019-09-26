const geocode = require('./utils/geocode')
const forecast = require('./Utils/forecast')


const address = process.argv[2]
if (!address) {
  console.log("Please Provide an Adress.");
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }


    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    })
  })

}

