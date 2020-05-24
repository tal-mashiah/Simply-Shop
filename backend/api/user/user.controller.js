const userService = require('./user.service')

async function getUser(req, res) {
    const user = await userService.getById(req.params.id)
    res.send(user)
}

async function getUsers(req, res) {
    console.log(req.query);
    const users = await userService.query(req.query)
    res.send(users)
}

async function deleteUser(req, res) {
    await userService.remove(req.params.id)
    res.end()
}

async function updateUser(req, res) {
    const user = req.body;
    await userService.update(user)
    res.send(user)
}

async function updatePassword(req, res) {
    const { currPassword, email, password } = req.body;
    try {
        const user = await userService.updatePassword(currPassword, email, password)
        res.json(user)
    } catch (err) {
        res.status(401).send(err)
    }
}

module.exports = {
    getUser,
    getUsers,
    deleteUser,
    updateUser,
    updatePassword
}