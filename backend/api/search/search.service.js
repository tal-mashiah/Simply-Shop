
const dbService = require('../../services/db.service');
const searchUtils = require('./search.utils');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById
}

async function query(filterBy) {
    console.log('filterBy: ',filterBy);
    
    const criteria = searchUtils.buildCriteria(filterBy);
    let collection = await dbService.getCollection('product');
    try {
        const products = await collection.find(criteria).toArray();
        if(filterBy.searchValue){
            var allProducts = await collection.find({ 'title': new RegExp(".*" + filterBy.searchValue + ".*", "i") }).toArray();
        } else{
            var allProducts = await collection.find({ 'categoryId': ObjectId(filterBy.categoryId) }).toArray();
        }
        products.forEach(product => delete product.costPrice);        
        const priceFilter = searchUtils.createPriceFilter(allProducts, products);
        const sortedProducts =  searchUtils.sortProducts(products, filterBy.sortBy );
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
        const specValues = await collection.find({ "_id": { $in: product.specValues }}).toArray();;
        const specs = searchUtils.createSpecs(specKeys, specValues);
        const images = searchUtils.createImages(product.imagesUrl);
        product.imagesUrl = images;
        delete product.specValues
        return {product, specs};
    }

    catch (err) {
        console.log(`ERROR: while finding product ${productId}`)
        throw err;
    }
}