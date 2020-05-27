const express = require('express')
const { addOrder, getOrders } = require('./order.controller')
const router = express.Router()

router.get('/:id', getOrders)
router.post('/', addOrder)

module.exports = router