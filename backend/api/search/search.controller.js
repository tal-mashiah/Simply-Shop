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

module.exports = {
    getSearchData
}