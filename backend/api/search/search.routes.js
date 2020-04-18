const express = require('express')
const { getSearchData } = require('./search.controller')
const router = express.Router()

router.post('/', getSearchData);

module.exports = router