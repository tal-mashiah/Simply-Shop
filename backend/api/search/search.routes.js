const express = require('express')
const { getSearchData, getStorageProducts, getProduct } = require('./search.controller')
const router = express.Router()

router.post('/', getSearchData);
router.post('/storage', getStorageProducts);
router.get('/:id', getProduct)

module.exports = router