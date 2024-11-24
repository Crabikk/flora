const express = require('express')
const HarvestController = require('../controllers/harvestsController')

const harvestsRouter = express.Router()

harvestsRouter.get('/', HarvestController.getAllHarvests)
                  .post('/', HarvestController.createHarvest)
                  .delete('/', HarvestController.deleteHarvest)
                  .put('/', HarvestController.updateHarvest)

module.exports = harvestsRouter