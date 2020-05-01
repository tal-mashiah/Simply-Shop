import searchService from '../services/searchService';

export function setBag(storageBag) {
    return async dispatch => {
        try {
            const productIds = storageBag.map(item => item.productId);
            const products = await searchService.getByIds(productIds);
            // eslint-disable-next-line
            const updatedBag = products.map(product => {
                for (const item of storageBag) {
                    if (item.productId === product._id.toString()) {
                        return { product, quantity: item.quantity }
                    }
                }
            })

            dispatch(_setBag(updatedBag));
        } catch (err) {
            console.log('checkoutActions: err in set bag', err);
        }
    };
}

function _setBag(updatedBag) {
    return {
        type: 'SET_BAG',
        updatedBag
    };
}

export function updateBag(item) {
    return dispatch => {
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
    return dispatch => {
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

export function updateQuantity(itemId, diff, quantity) {
    return dispatch => {
        try {
            dispatch(_updateQuantity(itemId, diff, quantity));
        } catch (err) {
            console.log('checkoutActions: err in update quantity', err);
        }
    };
}

function _updateQuantity(itemId, diff, quantity) {
    return {
        type: 'UPDATE_QUANTITY',
        quantity,
        itemId,
        diff
    };
}