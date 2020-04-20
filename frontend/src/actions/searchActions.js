import searchService from '../services/searchService';

export function loadSearchData(filterBy) {    
    return async dispatch => {
        try {
            const searchData = await searchService.query(filterBy);
            dispatch(_setSearchData(searchData));

        } catch (err) {
            console.log('searchActions: err in load searchData', err);
        }
    };
}

export function loadCurrProduct(_id) {    
    return async dispatch => {
        try {
            const currProduct = await searchService.getById(_id);
            console.log(currProduct);
            
            dispatch(_setCurrProduct(currProduct));

        } catch (err) {
            console.log('searchActions: err in load currProduct', err);
        }
    };
}

export function updateFilterBy(filterBy) {
    return dispatch => {
        try {
            dispatch(_updateFilterBy(filterBy));
        } catch (err) {
            console.log('searchActions: err in load searchData', err);
        }
    };
}

function _updateFilterBy(filterBy) {
    return {
        type: 'UPDATE_FILTER_BY',
        filterBy
    };
}

function _setSearchData(searchData) {
    return {
        type: 'SET_SEARCH_DATA',
        searchData
    };
}

function _setCurrProduct(currProduct) {
    return {
        type: 'SET_CURR_PRODUCT',
        currProduct
    };
}

// export function updateSearchFilters(filters,filter) {
//     console.log('filters: ',filters);
//     return async dispatch => {
//         try {
//             const updateFilter = await searchService.updateFilter(filter);
//             dispatch(_updateSearchFilters(filters));
//         } catch (err) {
//             console.log('searchActions: err in load searchData', err);
//         }
//     };
// }

// function _updateSearchFilters(filters) {
//     return {
//         type: 'UPDATE_SEARCH_FILTER',
//         filters
//     };
// }