const logger = require('../../services/logger.service')
const compareService = require('./compare.service')

async function getProducts(req, res) {
    try {
    const products = await compareService.getByIds(req.body)
    res.status(200).send(products);
    } catch (err) {
        logger.error('Cannot get products', err);
        res.status(500).send(err)
    }
}

module.exports = {
    getProducts
}