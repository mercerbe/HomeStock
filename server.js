//dependencies
const http = require('http')
const app = require('./app')

//set port
const PORT = process.env.PORT || 3001

//server listen
http.createServer(app).listen(PORT, () => {
  console.log('App listening on ' + PORT + ' @ ' + (new Date()).toLocaleString())
})
