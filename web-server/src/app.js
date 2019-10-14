const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define Paths for Express Config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join (__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to server
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
    whatDo: 'Helpful Text',
    title: 'Help',
    name: 'Nate',
    footer: "Created by Nate"
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: "DC",
    name: 'Nae'
  })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
      title: '404',
      errorMessage: 'Help Page Not Found',
      name: 'Nae'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
      title: '404',
      name: 'Nae',
      errorMessage: 'Page Not Found'
    })
})

app.listen(3000, () => {
  console.log('Server is Up!');
})

