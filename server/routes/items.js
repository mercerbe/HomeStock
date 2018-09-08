const router = require('express').Router()
const itemController = require('../controllers/ItemController')

router.route('/')
  .get(itemController.findAll)
  .post(itemController.create)

router.route('/:id')
  .get(itemController.findById)
  .put(itemController.update)
  .delete(itemController.remove)
