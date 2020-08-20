const searchUtils = require('../search/search.utils');
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId;

async function add(order) {
    const collection = await dbService.getCollection('order')
    order.userId = ObjectId(order.userId);
    try {
        let ordersCounter = await collection.countDocuments({})
        order.orderNumber = ordersCounter + 10000;
        await collection.insertOne(order);
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

async function getByUserId(userId) {
    let collection = await dbService.getCollection('order')
    try {
        const orders = await collection.find({ "userId": ObjectId(userId) }).toArray();
        if (orders.length > 0) {
            collection = await dbService.getCollection('product');

            for (const order of orders) {
                for (const product of order.products) {
                    const dbProduct = await collection.findOne({ "_id": ObjectId(product.productId) });
                    product.imagesUrl = searchUtils.createImages(dbProduct.imagesUrl);
                    product.title = dbProduct.title;
                }
            }            
            orders.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));
            return orders
        } else {
            return [];
        }
    } catch (err) {
        console.log('ERROR: cannot find orders')
        throw err;
    }
}

module.exports = {
    add,
    getByUserId
}
