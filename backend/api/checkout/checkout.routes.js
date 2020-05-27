const express = require('express')
const { addOrder } = require('./checkout.controller')
const router = express.Router()

router.post('/', addOrder)

module.exports = router