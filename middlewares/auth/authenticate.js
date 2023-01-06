const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
  const token = req.header('token')
  try {
    const decode = jwt.verify(token, 'quangminh-1398')
    if (decode) {
      req.user = decode
      return next()
    } else {
      res.status(401).send('You are not logged in')
    }
  } catch (error) {
    res.status(401).send('You are not logged in')
  }
}

module.exports = {
  authenticate,
}
