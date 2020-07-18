import HttpService from './HttpService';

export default {
    add
};

function add(form) {
    HttpService.post('contact', form);
}
