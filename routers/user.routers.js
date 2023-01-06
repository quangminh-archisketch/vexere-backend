const express = require('express')
const multer = require('multer')
const { authenticate } = require('passport')
const { register, login, uploadAvatar } = require('../controllers/user.controllers')
const { uploadImage } = require('../middlewares/upload/upload-image')

const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
// upload file
userRouter.post('/upload-avatar', uploadImage('user'), uploadAvatar)

module.exports = {
  userRouter,
}
