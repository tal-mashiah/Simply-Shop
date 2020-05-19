import Axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'


var axios = Axios.create({
    withCredentials: true
});

export default {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'get', data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data
        })
        return res.data;
    } catch (err) {
        console.error(err);
        throw err.response.data;
    }
}

/*
function extractResponseErrorMessage(errorObject) {
    if (_.isString(errorObject)) return errorObject;
    let data = _.get(errorObject, 'data');
    if (_.isString(data)) return data;
    let message = _.get(errorObject, 'data.message');
    if (_.isString(message)) return message;
    return '';
};
*/



