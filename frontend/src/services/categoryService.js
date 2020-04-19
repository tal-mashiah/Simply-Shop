import HttpService from './HttpService';

export default {
    query
};

function query() {
    return HttpService.get('category');
}
