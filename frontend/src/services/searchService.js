import HttpService from './HttpService';

export default {
    query
};

function query(filterBy) {
    return HttpService.post('search', filterBy);
}


