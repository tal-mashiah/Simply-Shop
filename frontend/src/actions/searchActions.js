import searchService from '../services/searchService';
import { loading, doneLoading } from './SystemActions';

export function loadSearchData(filterBy) {
    return async dispatch => {
        try {
            dispatch(loading());
            const searchData = await searchService.query(filterBy);
            dispatch(_setSearchData(searchData));
        } catch (err) {
            console.log('searchActions: err in load searchData', err);
        }
        finally {
            dispatch(doneLoading());
        }
    };
}

function _setSearchData(searchData) {
    return {
        type: 'SET_SEARCH_DATA',
        searchData
    };
}

export function loadCurrProduct(_id) {
    return async dispatch => {
        try {
            const currProduct = await searchService.getById(_id);
            dispatch(_setCurrProduct(currProduct));
        } catch (err) {
            console.log('searchActions: err in load currProduct', err);
        }
    };
}

function _setCurrProduct(currProduct) {
    return {
        type: 'SET_CURR_PRODUCT',
        currProduct
    };
}

export function updateFilterBy(filterBy) {
    return dispatch => {
        try {
            dispatch(_updateFilterBy(filterBy));
        } catch (err) {
            console.log('searchActions: err in update FilterBy', err);
        }
    };
}

function _updateFilterBy(filterBy) {
    return {
        type: 'UPDATE_FILTER_BY',
        filterBy
    };
}

export function updateSortBy(sortBy) {
    return dispatch => {
        try {
            dispatch(_updateSortBy(sortBy));
        } catch (err) {
            console.log('searchActions: err in update SortBy', err);
        }
    };
}

function _updateSortBy(sortBy) {
    return {
        type: 'UPDATE_SORT_BY',
        sortBy
    };
}