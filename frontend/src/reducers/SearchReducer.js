const initialState = {
    searchData: {},
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
        default:
            return state;
    }
}
