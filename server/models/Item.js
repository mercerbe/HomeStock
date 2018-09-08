const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const moment = require('moment')

const today = () => {
  let date = moment()
  return date
}

const Schema = mongoose.Schema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  amount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
})

let Item = mongoose.model('Item', itemSchema)
moule.exports = Item
