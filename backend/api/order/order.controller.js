const logger = require('../../services/logger.service')
const orderService = require('./order.service')

async function addOrder(req, res) {
    const order = req.body;
    try {
        await orderService.add(order)
        res.status(200).send();
    } catch (err) {
        logger.error('Cannot add order', err);
        res.status(500).send(err)
    }
}

async function getOrders(req, res) {
    try {
    const orders = await orderService.getByUserId(req.params.id)
    res.status(200).send(orders);
    } catch (err) {
        logger.error('Cannot get orders', err);
        res.status(500).send(err)
    }
}

module.exports = {
    addOrder,
    getOrders
}