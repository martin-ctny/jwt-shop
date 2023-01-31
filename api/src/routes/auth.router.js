const express = require('express')
const AuthController = require('../controllers/auth.controller')
const router = express.Router()

router.post('/auth/signin', AuthController.signin)
router.post('/auth/signup', AuthController.signup)

module.exports = router