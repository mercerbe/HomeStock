const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

module.exports = mongoose.model('Item', ItemSchema)
