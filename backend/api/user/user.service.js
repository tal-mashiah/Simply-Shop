
const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = {
    getByEmail,
    updatePassword,
    update,
    add
}

async function getByEmail(email) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({ email })
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${email}`)
        throw err;
    }
}

async function update(user) {
    const collection = await dbService.getCollection('user')
    user._id = ObjectId(user._id);

    try {
        await collection.updateOne({ "_id": user._id }, { $set: user })
        return user
    } catch (err) {
        console.log(`ERROR: cannot update user ${user._id}`)
        throw err;
    }
}

async function updatePassword(currPassword, email, password) {
    const user = await getByEmail(email);
    const match = await bcrypt.compare(currPassword, user.password);
    if (!match) return Promise.reject('הסיסמא הנוכחית שלך שגויה');
    const hash = await bcrypt.hash(password, saltRounds);

    const collection = await dbService.getCollection('user');
    try {
        await collection.update({ _id: user._id }, { $set: { password: hash } });
    } catch (err) {
        console.log(`ERROR: cannot update user ${user._id}`)
        throw err;
    }
}

async function add(user) {
    const collection = await dbService.getCollection('user')
    try {
        await collection.insertOne(user);
        return user;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}


