const express = require('express')
const { addContactForm } = require('./contact.controller')
const router = express.Router()

router.post('/', addContactForm)

module.exports = router