const initialState = {
    searchData: {},
    currProduct: null,

    filterBy: {
        categoryId: null,
        priceFilter: { max: null, min: null },
        filters: [],
        searchValue: null,
        pageNumber: 1,
        sortBy: 'bestMatch',
    }
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_SEARCH_DATA':
            return { ...state, searchData: { ...action.searchData } };
        case 'UPDATE_FILTER_BY':
            return { ...state, filterBy: action.filterBy };
        case 'UPDATE_SORT_BY':
            return { ...state, filterBy: { ...state.filterBy, sortBy: action.sortBy } };
        case 'SET_CURR_PRODUCT':
            return { ...state, currProduct: action.currProduct };
        default:
            return state;
    }
}
