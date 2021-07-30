const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const User = require('../models/User.model')

router.post('/register', authController.postSignInOrSignUp)

router.post('/user', authController.getUserInfo)

module.exports = router