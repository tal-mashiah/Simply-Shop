const express = require('express')
const { getProducts } = require('./compare.controller')
const router = express.Router()

router.post('/', getProducts)

module.exports = router