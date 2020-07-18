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

async function getProducts(req, res) {
    try {
        const products = await searchService.getByIds(req.body)
        res.send(products)
    } catch (err) {
        logger.error('Cannot get products', err);
        res.status(500).send({ error: 'cannot get products' })
    }
}

async function getProduct(req, res) {
    const product = await searchService.getById(req.params.id)
    res.send(product)
}

async function getProductByTerm(req, res) {
    try {
        const products = await searchService.getByTerm(req.params.term)
        res.send(products)
    } catch (err) {
        logger.error('Cannot get products', err);
        res.status(500).send({ error: 'cannot get products' })
    }
}

module.exports = {
    getProductByTerm,
    getSearchData,
    getProducts,
    getProduct
}