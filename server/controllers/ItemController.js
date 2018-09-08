const Item = require('../models/Item')
const User = require('../models/User')

//CRUD for items
module.exports = {
  // Get all items
  findAll: function(req, res) {
    Item.find({})
    // Sort items by ending soon to just posted
      .populate('businessId').sort({endDate: -1}).then(item => res.json(item)).catch(err => res.status(422).json(err))
  },
  // Get a specific item
  findById: function(req, res) {
    Item.findById(req.params.id).then(item => res.json(item)).catch(err => res.status(422).json(err))
  },
  // Business creates a item
  create: function(req, res) {
    req.body.url = req.body.url.replace(/https?:\/\//gi,'')
    Item.create(req.body).then((dbItem) => {
      // Push newly created item into business collection.  (Needs to be tested)
      Business.findOneAndUpdate({
        _id: dbItem.businessId
      }, {
        $push: {
          items: dbItem._id
        }
      }, {new: true}).populate('items').then(updatedBusiness => {
        res.json(updatedBusiness)
      })
    }).catch(err => res.status(422).json(err))
  },
  // Update a item
  update: function(req, res) {
    Item.findOneAndUpdate({
      _id: req.params.id
    }, req.body).then(item => res.json(item)).catch(err => res.status(422).json(err))
  },
  // Delete a item
  remove: function(req, res) {
    Item.findById({_id: req.params.id}).then(item => item.remove()).then(item => res.json(item)).catch(err => res.status(422).json(err))
  }
}
