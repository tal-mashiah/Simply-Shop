import HttpService from './HttpService';

export default {
    getCaptchaValue
};

function getCaptchaValue(captchaValue) {
    return HttpService.post('google',{"captchaValue":captchaValue});
}
