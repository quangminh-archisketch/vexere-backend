const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
  const token = req.header('token')
  const decode = jwt.verify(token, 'bearer')
  console.log('decode', decode)
}

module.exports = {
  authenticate,
}
