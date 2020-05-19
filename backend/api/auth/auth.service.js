const bcrypt = require('bcrypt');
const userService = require('../user/user.service');
const logger = require('../../services/logger.service');

const saltRounds = 10;

async function login(email, password) {
    logger.debug(`auth.service - login with email: ${email}`);
    if (!email || !password) return Promise.reject('דואר אלקטרוני או סיסמה נדרשים');

    const user = await userService.getByEmail(email);
    if (!user) return Promise.reject('דואר אלקטרוני או סיסמה שגויים');
    const match = await bcrypt.compare(password, user.password);
    if (!match) return Promise.reject('דואר אלקטרוני או סיסמה שגויים');

    delete user.password;
    return user;
}

async function signup(email, password, fullName) {
    logger.debug(`auth.service - signup with email: ${email}, username: ${fullName}`)
    if (!email || !password || !fullName) return Promise.reject('דואר אלקטרוני, שם משתמש וסיסמה נדרשים')
    const user = await userService.getByEmail(email);
    if(user) return Promise.reject('המשתמש כבר רשום')
    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({email, password: hash, fullName})
}

module.exports = {
    signup,
    login,
}