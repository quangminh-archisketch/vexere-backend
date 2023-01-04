const express = require('express')
const path = require('path')
const { sequelize } = require('./models')
const { rootRouter } = require('./routers')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('combined'))

app.use(express.json())

const publicPathDirectory = path.join(__dirname, './public')
app.use('/public', express.static(publicPathDirectory))
app.use('/api/v1', rootRouter)

app.listen(3000, async () => {
  console.log('app listening on port 3000')
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})
