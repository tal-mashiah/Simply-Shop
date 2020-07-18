const express = require('express')
const { getSearchData, getProducts, getProduct, getProductByTerm } = require('./search.controller')
const router = express.Router()

router.post('/', getSearchData);
router.post('/products', getProducts);
router.get('/:id', getProduct)
router.get('/products/:term', getProductByTerm)

module.exports = router