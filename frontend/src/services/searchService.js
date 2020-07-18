import HttpService from './HttpService';

export default {
    query,
    getById,
    getByIds,
    getByTerm
};

function query(filterBy) {
    return HttpService.post('search', filterBy);
}

function getByTerm(term) {
    return HttpService.get(`search/products/${term}`);
}

function getById(id) {
    return HttpService.get(`search/${id}`);
}

function getByIds(productIds) {
    return HttpService.post('search/products', productIds);
}