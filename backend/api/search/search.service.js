
const dbService = require('../../services/db.service');
const searchUtils = require('./search.utils');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    getByIds,
    getByTerm
}

async function query(filterBy) {
    const criteria = searchUtils.buildCriteria(filterBy);
    let collection = await dbService.getCollection('product');

    try {
        const products = await collection.find(criteria).toArray();
        if (filterBy.searchValue) {
            var allProducts = await collection.find({ 'title': new RegExp(".*" + filterBy.searchValue + ".*", "i") }).toArray();
        } else {
            var allProducts = await collection.find({ 'categoryId': ObjectId(filterBy.categoryId) }).toArray();
        }
        products.forEach(product => delete product.costPrice);
        products.forEach(product => product.imagesUrl = searchUtils.createImages(product.imagesUrl));
        const priceFilter = searchUtils.createPriceFilter(allProducts, products);
        const sortedProducts = searchUtils.sortProducts(products, filterBy.sortBy);
        const specValueIds = products.map(product => product.specValues).flat();
        collection = await dbService.getCollection('specValue');
        const specValues = await collection.find({ '_id': { $in: specValueIds } }).toArray();
        specValues.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        const specKeyIds = specValues.map(specValue => specValue.specKeyId).flat();
        collection = await dbService.getCollection('specKey');
        const specKeys = await collection.find({ '_id': { $in: specKeyIds } }).toArray();
        const filters = searchUtils.createFilters(specKeys, specValues, filterBy.filters);

        return { products: sortedProducts, priceFilter, filters }

    } catch (err) {
        console.log('ERROR: cannot find products', err);
        throw err;
    }
}

async function getById(productId) {
    let collection = await dbService.getCollection('product');

    try {
        const product = await collection.findOne({ "_id": ObjectId(productId) });
        delete product.costPrice;
        collection = await dbService.getCollection('specKey');
        const specKeys = await collection.find({}).toArray();;
        collection = await dbService.getCollection('specValue');
        const specValues = await collection.find({ "_id": { $in: product.specValues } }).toArray();
        const specs = searchUtils.createSpecs(specKeys, specValues);
        product.imagesUrl = searchUtils.createImages(product.imagesUrl, true);
        delete product.specValues
        return { product, specs };

    } catch (err) {
        console.log(`ERROR: while finding product ${productId}`)
        throw err;
    }
}

async function getByIds(ids) {
    let collection = await dbService.getCollection('product');

    try {
        const productIds = ids.map(id => ObjectId(id));
        const products = await collection.find({ "_id": { $in: productIds } }).toArray();
        products.forEach(product => {
            product.imagesUrl = searchUtils.createImages(product.imagesUrl, true);
            delete product.costPrice;
        });
        return products;

    } catch (err) {
        console.log('ERROR: cannot find storage products', err);
        throw err;
    }
}

async function getByTerm(term) {
    let collection = await dbService.getCollection('product');
    try {
        const products = await collection.find({ "title": new RegExp(".*" + term + ".*", "i") }).toArray();
        products.forEach(product => delete product.costPrice);
        products.forEach(product => product.imagesUrl = searchUtils.createImages(product.imagesUrl, true));
        return products;

    } catch (err) {
        console.log(`ERROR: while finding products by term: ${term}`)
        throw err;
    }
}