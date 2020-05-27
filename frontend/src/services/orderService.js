import HttpService from './HttpService';

export default {
    add,
    getByUserId
};

function add(order) {
    return HttpService.post('order', order);
}

function getByUserId(userId) {
    return HttpService.get(`order/${userId}`)
}