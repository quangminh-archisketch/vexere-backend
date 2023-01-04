const { Op } = require('sequelize')
const { Station } = require('../models')

const createStation = async (req, res) => {
  const { name, address, province } = req.body
  try {
    const newStation = await Station.create({ name, address, province })
    res.status(200).send({ data: newStation, statusCode: '200', message: 'Success' })
  } catch (error) {
    res.status(500).send({ error, statusCode: '500', message: 'UnSuccess' })
  }
}

const getAllStation = async (req, res) => {
  const { name } = req.query

  try {
    if (name) {
      const stationList = await Station.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      })
      res.status(200).send({ data: stationList, statusCode: '200', message: 'Success' })
    } else {
      const stationList = await Station.findAll()
      res.status(200).send({ data: stationList, statusCode: '200', message: 'Success' })
    }
  } catch (error) {
    res.status(500).send({ error, statusCode: '500', message: 'UnSuccess' })
  }
}

const getDetailStation = async (req, res) => {
  const { id } = req.params
  try {
    const detailStation = await Station.findOne({
      where: {
        id,
      },
    })
    res.status(200).send({ data: detailStation, statusCode: '200', message: 'Success' })
  } catch (error) {
    res.status(500).send({ error, statusCode: '500', message: 'UnSuccess' })
  }
}

const updateStation = async (req, res) => {
  const { id } = req.params
  const { name, address, province } = req.body
  try {
    const detailStation = await Station.findOne({
      where: {
        id,
      },
    })
    detailStation.name = name
    detailStation.address = address
    detailStation.province = province
    await detailStation.save()
    res.status(200).send({ data: detailStation, statusCode: '200', message: 'Success' })
  } catch (error) {
    res.status(500).send({ error, statusCode: '500', message: 'UnSuccess' })
  }
}

const deleStation = async (req, res) => {
  const { id } = req.params
  try {
    const deleteStationDetail = await Station.destroy({
      where: {
        id,
      },
    })
    res.status(200).send({ data: deleteStationDetail, statusCode: '200', message: 'Success' })
  } catch (error) {
    res.status(500).send({ error, statusCode: '500', message: 'UnSuccess' })
  }
}

module.exports = {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleStation,
}
