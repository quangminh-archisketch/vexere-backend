const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieSession = require('cookie-session')
const passport = require('passport')
const { sequelize } = require('./models')
const { rootRouter } = require('./routers')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('combined'))

app.use(express.json())

// cài static file
const publicPathDirectory = path.join(__dirname, './public')
app.use('/public', express.static(publicPathDirectory))

app.use('/api/v1', rootRouter)
app.use(
  cookieSession({
    name: 'session',
    keys: ['lama'],
    maxAge: 24 * 60 * 60 * 100,
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
  })
)

app.listen(3000, async () => {
  console.log('app listening on port 3000')
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})
