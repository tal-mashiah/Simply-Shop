const searchUtils = require('../search/search.utils');
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId;

async function add(contact) {
    const collection = await dbService.getCollection('contact')
    try {
        await collection.insertOne(contact);
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}
module.exports = {
    add
}
