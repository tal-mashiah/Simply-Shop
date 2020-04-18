const initialState = {
    searchData: {},
    filterBy: {
        categoryId: '5e9392bb8213516b835c04e8',
        priceFilter: { max: null, min: null },
        filters: [],
        searchValue: null,
        pageNumber: 1
    }
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_SEARCH_DATA':
            return { ...state, searchData: action.searchData };
        case 'UPDATE_FILTER_BY':
            return { ...state, filterBy: action.filterBy };
        // case 'UPDATE_SEARCH_FILTER':
        //     return { ...state, searchData:{...state.searchData,filters:action.filters} };
        default:
            return state;
    }
}
