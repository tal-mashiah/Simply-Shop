const dbService = require('../../services/db.service');

module.exports = {
    query
}

async function query() {
    try {
        let collection = await dbService.getCollection('category');
        const categories = await collection.find({}).toArray();
        return categories;

    } catch (err) {
        console.log('ERROR: cannot find products', err);
        throw err;
    }
}
