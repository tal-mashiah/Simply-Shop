// import searchService from '../services/searchService';

export function updateBag(item) {
    return async dispatch => {
        try {
            dispatch(_updateBag(item));
        } catch (err) {
            console.log('searchActions: err in update bag', err);
        }
    };
}

function _updateBag(item) {
    return {
        type: 'UPDATE_BAG',
        item
    };
}