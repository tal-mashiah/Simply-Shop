import categoryService from '../services/categoryService';
import { loading, doneLoading } from './SystemActions';

export function loadCategories() {
    return async dispatch => {
        try {
            dispatch(loading());
            const categories = await categoryService.query();
            dispatch(_setCategories(categories));
        } catch (err) {
            console.log('searchActions: err in load categories', err);
        }
        finally {
            dispatch(doneLoading());
        }
    };
}

function _setCategories(categories) {
    return {
        type: 'SET_CATEGORIES',
        categories
    };
}