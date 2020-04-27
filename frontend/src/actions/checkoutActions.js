// import searchService from '../services/searchService';

export function updateBag(item) {
    return async dispatch => {
        try {
            dispatch(_updateBag(item));
        } catch (err) {
            console.log('checkoutActions: err in update bag', err);
        }
    };
}

function _updateBag(item) {
    return {
        type: 'UPDATE_BAG',
        item
    };
}

export function deleteItem(itemId) {
    return async dispatch => {
        try {
            dispatch(_deleteItem(itemId));
        } catch (err) {
            console.log('checkoutActions: err in delete item', err);
        }
    };
}

function _deleteItem(itemId) {
    return {
        type: 'DELETE_ITEM',
        itemId
    };
}

export function updateQuantity(itemId,diff,quantity) {
    return async dispatch => {
        try {
            dispatch(_updateQuantity(itemId,diff,quantity));
        } catch (err) {
            console.log('checkoutActions: err in update quantity', err);
        }
    };
}

function _updateQuantity(itemId,diff,quantity) {
    return {
        type: 'UPDATE_QUANTITY',
        quantity,
        itemId,
        diff
    };
}