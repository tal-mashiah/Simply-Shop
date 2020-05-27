import HttpService from './HttpService';

export default {
    add
};

function add(order) {
    return HttpService.post('checkout', order);
}
