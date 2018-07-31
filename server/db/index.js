//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//local db url
const uri = 'mongodb://localhost:27017/homestock_db'

mongoose.connect(uri).then(
    () => {
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
        console.log('Connected to Mongo');

    },
    err => {
         /** handle initial connection error */
         console.log('error connecting to db: ')
         console.log(err);

        }
  );


module.exports = mongoose.connection
