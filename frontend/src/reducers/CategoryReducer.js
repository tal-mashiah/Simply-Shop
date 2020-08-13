const initialState = {
    categories: []
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return { ...state, categories: action.categories };
        default:
            return state;
    }
}
