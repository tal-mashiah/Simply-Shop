const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function add(order) {
    const updatedOrder = _organizeOrder(order);
    const collection = await dbService.getCollection('order')
    try {
        await collection.insertOne(updatedOrder);
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

function _organizeOrder(order) {
    let updatedOrder = {};
    const { delivery, bag, form, user } = order;
    updatedOrder.userId = user ? user._id : null;
    updatedOrder.delivery = {
        method: delivery.value,
        price: delivery.price
    };
    updatedOrder.checkoutInfo = form.input;
    updatedOrder.products = bag.map(item => {
        return {
            productId: ObjectId(item.product._id),
            quantity: item.quantity,
            price: item.product.price
        }
    });
    updatedOrder.totalAmount = bag.reduce((acc, item) => acc + (item.product.price * item.quantity), delivery.price);
    return updatedOrder;

}

module.exports = {
    add
}


