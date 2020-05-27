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

module.exports = {
    add
}


