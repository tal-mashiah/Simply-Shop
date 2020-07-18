const logger = require('../../services/logger.service')
const contactService = require('./contact.service')

async function addContactForm(req, res) {
    try {
        await contactService.add(req.body);
        res.status(200).send();
    } catch (err) {
        logger.error('Cannot add contact form', err);
        res.status(500).send(err)
    }
}

module.exports = {
    addContactForm
}