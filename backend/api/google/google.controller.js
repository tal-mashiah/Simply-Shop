const logger = require('../../services/logger.service')
const googleService = require('./google.service')

async function getCaptchaValue(req, res) {
    try {
        const isValid = await googleService.getCaptchaValue(req.body.captchaValue, req.connection.remoteAddress);
        console.log('isValid: ', isValid);
        res.status(200).send({ "isValid": isValid });
    } catch (err) {
        logger.error('Cannot get captcha value', err);
        res.status(500).send(err)
    }
}

module.exports = {
    getCaptchaValue
}