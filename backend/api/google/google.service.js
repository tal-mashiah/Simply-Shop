const axios = require('axios');

async function getCaptchaValue(captchaValue) {
    const secret = '6LcE8KkZAAAAAOsug92v7QZJ8McZUTjJ9e3rkgB2';
    try {
         const res = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captchaValue}`);
         return res.data.success;

    } catch (err) {
        console.log(`ERROR: failed in TRY to google recaptcha`, err)
        throw err;
    }
}

module.exports = {
    getCaptchaValue
}
