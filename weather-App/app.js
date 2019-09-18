const request =  require('request')

const url = 'https://api.darksky.net/forecast/6a4f86c199afab05342e0438006efab0/37.8267,-122.4233?units=si'

request({ url: url, json: true }, (error, response) => {

  console.log(`${response.body.daily.data[0].summary} the chance of rain is ${response.body.currently.precipProbability}%, and it is ${response.body.currently.apparentTemperature} degrees`);
})