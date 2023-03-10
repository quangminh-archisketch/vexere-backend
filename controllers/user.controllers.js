const { User } = require('../models')
const bcrypt = require('bcrypt')
const multer = require('multer')

const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  const { name, email, password, numberPhone } = req.body
  try {
    // tạo ra một chuỗi ngẫu nhiên
    const salt = bcrypt.genSaltSync(10)
    // mã hóa salt + password
    const hashPassword = bcrypt.hashSync(password, salt)
    const newUser = await User.create({ name, email, password: hashPassword, numberPhone })
    res.status(201).send({ data: newUser, statusCode: '201', message: 'Success' })
  } catch (error) {
    res.status(500).send(error)
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({
    where: {
      email,
    },
  })
  console.log('user', user)
  if (user) {
    // b2 : kiểm mật khẩu có đúng hay không
    const isAuth = bcrypt.compareSync(password, user.password)
    if (isAuth) {
      const token = jwt.sign({ email: user.email, type: user.type }, 'quangminh-1398', { expiresIn: 60 * 60 })

      res.status(200).send({ message: 'Login to Success ! ', token })
    } else {
      res.status(500).send({ message: 'Account and Pass is incorrect' })
    }
  } else {
    res.status(404).send({ message: 'No matching email found' })
  }
}

const uploadAvatar = async (req, res) => {
  const { file } = req
  const urlImage = `http://localhost:3000/${file.path}`
  const { user } = req
  const userFound = await User.findOne({
    email: user.email,
  })
  userFound.avatar = urlImage
  await userFound.save()
  res.send(userFound)
}

module.exports = {
  register,
  login,
  uploadAvatar,
}
