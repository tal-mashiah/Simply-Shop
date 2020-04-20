const express = require('express')
const { getSearchData, getProduct } = require('./search.controller')
const router = express.Router()

router.post('/', getSearchData);
router.get('/:id', getProduct)

module.exports = router