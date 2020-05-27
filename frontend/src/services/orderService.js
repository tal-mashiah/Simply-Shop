import HttpService from './HttpService';

export default {
    add,
    getById
};

function add(order) {
    return HttpService.post('order', order);
}

function getById(userId) {
    return HttpService.get(`order/${userId}`)
}