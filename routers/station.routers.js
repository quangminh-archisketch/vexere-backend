const express = require('express')
const { createStation, getAllStation, getDetailStation, updateStation, deleStation } = require('../controllers/station.controllers')

const stationRouter = express.Router()

stationRouter.post('/', createStation)
stationRouter.get('/', getAllStation)
stationRouter.get('/:id', getDetailStation)
stationRouter.put('/:id', updateStation)
stationRouter.delete('/:id', deleStation)

module.exports = {
  stationRouter,
}
