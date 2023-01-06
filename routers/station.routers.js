const { Station } = require('../models')
const express = require('express')
const { createStation, getAllStation, getDetailStation, updateStation, deleStation } = require('../controllers/station.controllers')
const { checkExits } = require('../middlewares/validations/checkExist')
const { authenticate } = require('../middlewares/auth/authenticate')

const stationRouter = express.Router()

stationRouter.post('/', authenticate, createStation)
stationRouter.get('/', getAllStation)
stationRouter.get('/:id', getDetailStation)
stationRouter.put('/:id', checkExits(Station), updateStation)
stationRouter.delete('/:id', checkExits(Station), deleStation)

module.exports = {
  stationRouter,
}
