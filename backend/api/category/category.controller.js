const logger = require('../../services/logger.service')
const categoryService = require('./category.service')

async function getCategories(req, res) {
    try {
        const categories = await categoryService.query(req.body)
        res.send(categories)
    } catch (err) {
        logger.error('Cannot get categories', err);
        res.status(500).send({ error: 'cannot get categories' })
        
    }
}

module.exports = {
    getCategories
}