const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')


const app = express()


const config = require('./server/config')

// connect to database
mongoose.connect(
  process.env.MONGODB_URI || config.mongoURI,
  { useNewUrlParser: true }
);
//bring in routes
const apiRoutes = require('./server/routes/api')
const itemRoutes = require('./server/routes/items')

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Put all API endpoints under '/api'
app.use('/api', apiRoutes)
app.use('/item', itemRoutes)

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

const handleUnexpectedError = (err, req, res, next) => {
  console.log('Unexpected error: ' + JSON.stringify(err))
  res.sendStatus(500);
}

app.use(handleUnexpectedError)

module.exports = app
