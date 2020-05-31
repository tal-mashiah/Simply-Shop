import searchService from '../services/searchService';
import orderService from '../services/orderService';
import storageService from '../services/storageService';
import history from '../history';

import { setGrowl } from './GrowlActions';


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

export function setDelivery(option) {
    return dispatch => {
        try {
            dispatch(_setDelivery(option));
        } catch (err) {
            console.log('checkoutActions: err in set delivery', err);
        }
    };
}

function _setDelivery(option) {
    return {
        type: 'SET_DELIVERY',
        option
    };
}

export function updateForm(isValid, form) {
    return dispatch => {
        try {
            dispatch(_updateForm(isValid, form));
        } catch (err) {
            console.log('checkoutActions: err in update form', err);
        }
    };
}

function _updateForm(isValid, form) {
    return {
        type: 'UPDATE_FORM',
        isValid,
        form
    };
}

export function addOrder(type, order) {

    return async dispatch => {
        try {
            await orderService.add(order);

            switch (type) {
                case 'success':
                    dispatch(setGrowl('ההזמנה התקבלה', 'success'));
                    dispatch(_setBag([]));
                    storageService.removeFromStorage('bag')
                    history.push('/account/orders')
                    break;
                case 'cancel':
                    dispatch(setGrowl('ההזמנה התבטלה', 'warn'));
                    break;
                case 'error':
                    dispatch(setGrowl('אירעה שגיאה בפייפאל', 'error'));
                    break;
                default:
                    break;
            }

        } catch (err) {
            console.log('checkoutActions: err in set bag', err);
        }
    };
}