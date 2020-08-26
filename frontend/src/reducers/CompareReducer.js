const initialState = {
    compareProducts: []
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'TOGGLE_COMPARE_PRODUCT':
            const isExist = state.compareProducts.some(product => product._id === action.product._id);
            if (isExist) {
                const filteredProducts = state.compareProducts.filter(product => product._id !== action.product._id )
                return { ...state, compareProducts: filteredProducts };
            } else {
                return { ...state, compareProducts: [...state.compareProducts, action.product] };
            }
        default:
            return state;
    }
}