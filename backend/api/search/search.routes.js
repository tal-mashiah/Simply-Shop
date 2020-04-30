const express = require('express')
const { getSearchData, getProducts, getProduct } = require('./search.controller')
const router = express.Router()

router.post('/', getSearchData);
router.post('/products', getProducts);
router.get('/:id', getProduct)

module.exports = router