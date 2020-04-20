import HttpService from './HttpService';

export default {
    query,
    getById
};

function query(filterBy) {
    return HttpService.post('search', filterBy);
}

function getById(id) {
    return HttpService.get(`search/${id}`);
}