import HttpService from './HttpService'

export default {
    // getUsers,
    // getById,
    // remove,
    login,
    logout,
    signup,
    update,
    updatePassword
}

// function getUsers() {
//     return HttpService.get('user')
// }

// function getById(userId) {
//     return HttpService.get(`user/${userId}`)
// }

// function remove(userId) {
//     return HttpService.delete(`user/${userId}`)
// }

async function update(userCred) {
    const user = await HttpService.put(`user/${userCred._id}`, userCred)
    return _handleLogin(user)
}

function updatePassword(userCred) {
    return HttpService.put(`user/updatePassword/${userCred._id}`, userCred)
}

async function login(userCred) {
    const user = await HttpService.post('auth/login', userCred)
    return _handleLogin(user)
}
async function signup(userCred) {
    const user = await HttpService.post('auth/signup', userCred)
    return _handleLogin(user)
}
function logout() {
    sessionStorage.clear();
}
function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}