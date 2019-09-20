const request =  require('request')

// const url = 'https://api.darksky.net/forecast/6a4f86c199afab05342e0438006efab0/37.8267,-122.4233?units=si'

// request({ url: url, json: true }, (error, response) => {

//   if (error) {
//     console.log('Unable to connect to the weather service.');
//   } else if (response.body) {
//     console.log('Unable to find location.');
//   } else {
//     console.log(`${response.body.daily.data[0].summary} the chance of rain is ${response.body.currently.precipProbability}%, and it is ${response.body.currently.apparentTemperature} degrees`);
//   }


// })

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmFlbmFlMjMiLCJhIjoiY2swcHdrNGdzMDJkdzNwbzRlZTJ4enh5ZiJ9.649DuwWplvlzgK87ewg0Rw&limit=1'

request({ url: url2, json: true }, (error, response) => {
  
  if (error) {
    console.log('Unable to connect to weather services.');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location');
  } else {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude);
  }

})

