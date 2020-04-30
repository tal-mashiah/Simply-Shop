import HttpService from './HttpService';

export default {
    query,
    getById,
    getStorageProducts
};

function query(filterBy) {
    return HttpService.post('search', filterBy);
}

function getById(id) {
    return HttpService.get(`search/${id}`);
}

function getStorageProducts(storageBag) {
    return HttpService.post('search/storage', storageBag);
}