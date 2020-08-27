import HttpService from './HttpService';

export default {
    getByIds
};

function getByIds(productIds) {
    return HttpService.post('compare', productIds);
}