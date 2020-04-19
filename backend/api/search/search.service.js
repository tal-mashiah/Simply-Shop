
const dbService = require('../../services/db.service');
const searchUtils = require('./search.utils');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query
}

async function query(filterBy) {
    const criteria = searchUtils.buildCriteria(filterBy);
    try {
        let collection = await dbService.getCollection('product');
        const products = await collection.find(criteria).toArray();
        const allProducts = await collection.find({'categoryId' : ObjectId(filterBy.categoryId) }).toArray();
        products.forEach(product => delete product.costPrice);

        const priceFilter = searchUtils.createPriceFilter(allProducts, products);

        const specValueIds = products.map(product => product.specValues).flat();
        collection = await dbService.getCollection('specValue');
        const specValues = await collection.find({ '_id': { $in: specValueIds } }).toArray();
        specValues.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        const specKeyIds = specValues.map(specValue => specValue.specKeyId).flat();
        collection = await dbService.getCollection('specKey');
        const specKeys = await collection.find({ '_id': { $in: specKeyIds } }).toArray();

        const filters = searchUtils.createFilters(specKeys, specValues, filterBy.filters);

        return { products, priceFilter, filters }

    } catch (err) {
        console.log('ERROR: cannot find products', err);
        throw err;
    }
}
