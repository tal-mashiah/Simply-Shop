import HttpService from './HttpService';

export default {
    query,
    getById,
    getByIds
};

function query(filterBy) {
    return HttpService.post('search', filterBy);
}

function getById(id) {
    return HttpService.get(`search/${id}`);
}

function getByIds(productIds) {
    return HttpService.post('search/products', productIds);
}