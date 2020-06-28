const express = require('express')
const { getCaptchaValue } = require('./google.controller')
const router = express.Router()

router.post('/', getCaptchaValue)

module.exports = router