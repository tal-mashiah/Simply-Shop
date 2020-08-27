const searchUtils = require('../search/search.utils');
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId;

async function getByIds(ids) {
    let collection = await dbService.getCollection('product');

    try {
        const productIds = ids.map(id => ObjectId(id));
        const products = await collection.find({ "_id": { $in: productIds } }).toArray();

        collection = await dbService.getCollection('specKey');
        const specKeys = await collection.find({}).toArray();;

        collection = await dbService.getCollection('specValue');
        const productsData = []
        for (const product of products) {
            product.imagesUrl = searchUtils.createImages(product.imagesUrl, true);
            delete product.costPrice;
            const specValues = await collection.find({ "_id": { $in: product.specValues } }).toArray();
            const specs = searchUtils.createSpecs(specKeys, specValues);
            delete product.specValues
            productsData.push({ product, specs });
        }

        return productsData;

    } catch (err) {
        console.log('ERROR: cannot find storage products', err);
        throw err;
    }
}

async function getById(productId) {
    // let collection = await dbService.getCollection('product');

    try {
        // const product = await collection.findOne({ "_id": ObjectId(productId) });
        // delete product.costPrice;
        // collection = await dbService.getCollection('specKey');
        // const specKeys = await collection.find({}).toArray();;
        // collection = await dbService.getCollection('specValue');
        // const specValues = await collection.find({ "_id": { $in: product.specValues } }).toArray();
        // const specs = searchUtils.createSpecs(specKeys, specValues);
        // product.imagesUrl = searchUtils.createImages(product.imagesUrl, true);
        delete product.specValues
        return { product, specs };

    } catch (err) {
        console.log(`ERROR: while finding product ${productId}`)
        throw err;
    }
}
module.exports = {
    getByIds
}
