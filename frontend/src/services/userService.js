import HttpService from './HttpService'
import storageService from './storageService'

export default {
    login,
    logout,
    signup,
    update,
    updatePassword
}

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
    storageService.removeFromSession('user');
}
function _handleLogin(user) {
    storageService.saveToSession('user',user);
    return user;
}