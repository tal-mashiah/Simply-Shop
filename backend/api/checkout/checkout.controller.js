const logger = require('../../services/logger.service')
const checkoutService = require('./checkout.service')

async function addOrder(req, res) {
    const order = req.body;
    try {
        await checkoutService.add(order)
        res.status(200).send();
    } catch (err) {
        logger.error('Cannot add order', err);
        res.status(401).send(err)
    }
}

module.exports = {
    addOrder
}