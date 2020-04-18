
const dbService = require('../../services/db.service');
const searchUtils = require('./search.utils');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    // updateFilter
    // getById,
    // getByEmail,
    // remove,
    // update,
    // add
}

async function query(filterBy) {    
    try {
        const criteria = searchUtils.buildCriteria(filterBy);
        let collection = await dbService.getCollection('product');

        const products = await collection.find(criteria).toArray();
        products.forEach(product => delete product.costPrice);
        const prices = products.map(product => product.price);
        const maxPrice = Math.max(...prices);
        const minPrice = Math.min(...prices);
        const specValueIds = products.map(product => product.specValues).flat();
        collection = await dbService.getCollection('specValue');
        const specValues = await collection.find({ '_id': { $in: specValueIds } }).toArray();
        const specKeyIds = specValues.map(specValue => specValue.specKeyId).flat();
        collection = await dbService.getCollection('specKey');
        const specKeys = await collection.find({ '_id': { $in: specKeyIds } }).toArray();
        const filters = searchUtils.createFilters(specKeys, specValues, filterBy.filters);        
        return { products, priceFilter:{max:maxPrice, min:minPrice} , filters }

    } catch (err) {
        console.log('ERROR: cannot find products', err);
        throw err;
    }
}


// async function getById(userId) {
//     const collection = await dbService.getCollection('user')
//     try {
//         const user = await collection.findOne({"_id":ObjectId(userId)})
//         delete user.password

//         user.givenReviews = await reviewService.query({byUserId: ObjectId(user._id) })
//         user.givenReviews = user.givenReviews.map(review => {
//             delete review.byUser
//             return review
//         })


//         return user
//     } catch (err) {
//         console.log(`ERROR: while finding user ${userId}`)
//         throw err;
//     }
// }
// async function getByEmail(email) {
//     const collection = await dbService.getCollection('user')
//     try {
//         const user = await collection.findOne({email})
//         return user
//     } catch (err) {
//         console.log(`ERROR: while finding user ${email}`)
//         throw err;
//     }
// }

// async function remove(userId) {
//     const collection = await dbService.getCollection('user')
//     try {
//         await collection.deleteOne({"_id":ObjectId(userId)})
//     } catch (err) {
//         console.log(`ERROR: cannot remove user ${userId}`)
//         throw err;
//     }
// }

// async function updateFilter(filter) {
//     console.log(filter);
//     const collection = await dbService.getCollection('specValue');
//     filter._id = ObjectId(filter._id);
//     filter.specKeyId = ObjectId(filter.specKeyId);

//     try {
//         await collection.replaceOne({"_id" : filter._id}, { $set : filter})
//         return filter;
//     } catch (err) {
//         console.log(`ERROR: cannot update filter ${filter._id}`)
//         throw err;
//     }
// }

// async function add(user) {
//     const collection = await dbService.getCollection('user')
//     try {
//         await collection.insertOne(user);
//         return user;
//     } catch (err) {
//         console.log(`ERROR: cannot insert user`)
//         throw err;
//     }
// }




// const _updateSpecValues = (values,filters) => {
//     return values.map(value => {
//         let updateValue = { ...value, selected: false };
//         for (let i = 0; i < filters.length; i++) {
//             const filter = filters[i];
//             if (filter._id.toString() === value._id.toString()) {
//                 updateValue = { ...value, selected: true };
//             }
//         }
//         return updateValue;
//     })
// }

// const createFilters = (specKeys, specValues, selectedFilters) => {
//     let updatedSpecValues = _updateSpecValues(specValues,selectedFilters);

//     if (selectedFilters.length > 0) {
//         specValues = updatedSpecValues;
//     }
//     newFilters = [];
//     specKeys.forEach(specKey => {
//         let KeyValues = [];
//         specValues.forEach(value => {
//             let currentValue = { ...value };
//             if (currentValue.specKeyId.toString() === specKey._id.toString()) {
//                 KeyValues.push(currentValue);
//             }
//         });
//         newFilters.push({ key: specKey.name, values: KeyValues });
//     });
//     return newFilters;
// };