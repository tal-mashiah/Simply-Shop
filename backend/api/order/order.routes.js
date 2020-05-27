const express = require('express')
const { addOrder } = require('./order.controller')
const router = express.Router()

router.post('/', addOrder)

module.exports = router