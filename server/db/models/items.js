const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define itemSchema
const userSchema = new Schema({

	itemName: { type: String, unique: false, required: false },
	quantity: { type: String, unique: false, required: false },
  createdAt: {type: Date},
  upadatedAt: {type: Date}

})
