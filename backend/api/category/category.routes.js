const express = require('express')
const { getCategories } = require('./category.controller')
const router = express.Router()

router.get('/', getCategories);

module.exports = router