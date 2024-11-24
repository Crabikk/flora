const express = require('express')
const BenefitsController = require('../controllers/benefitsController')

const benefitsRouter = express.Router()

benefitsRouter.get('/', BenefitsController.getAllBenefits)
              .post('/', BenefitsController.createBenefit)
              .delete('/', BenefitsController.deleteBenefit)
              .put('/', BenefitsController.updateBenefit)

module.exports = benefitsRouter