const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function add(order) {
    const collection = await dbService.getCollection('order')
    order.userId = ObjectId(order.userId);
    try {
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
                    product.imagesUrl = dbProduct.imagesUrl;
                    product.title = dbProduct.title;
                }
            }
            return orders
        } else {
            return null;
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
