const logger = require('../../services/logger.service')
const searchService = require('./search.service')

async function getSearchData(req, res) {
    try {
        const searchData = await searchService.query(req.body)
        res.send(searchData)
    } catch (err) {
        logger.error('Cannot get searchData', err);
        res.status(500).send({ error: 'cannot get searchData' })
        
    }
}

async function getStorageProducts(req, res) {
    try {
        const storageProducts = await searchService.getStorageProducts(req.body)
        res.send(storageProducts)
    } catch (err) {
        logger.error('Cannot get storage products', err);
        res.status(500).send({ error: 'cannot get storage products' })
    }
}

async function getProduct(req, res) {
    const product = await searchService.getById(req.params.id)
    res.send(product)
}

module.exports = {
    getSearchData,
    getStorageProducts,
    getProduct
}