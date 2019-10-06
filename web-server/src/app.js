const path = require('path')
const express = require('express')

const app = express()
const publicDir = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDir))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Nate'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'about me',
    name: 'Nae'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    whatDo: 'Enter localhost:3000/about into your url.'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: "DC"
  })
})

app.listen(3000, () => {
  console.log('Server is Up!');
})

