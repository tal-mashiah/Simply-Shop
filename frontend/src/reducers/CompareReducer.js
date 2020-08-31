let sessionCompareProducts = [];
if (sessionStorage.compareProducts) sessionCompareProducts = JSON.parse(sessionStorage.compareProducts);

const initialState = {
    compareProducts: sessionCompareProducts,
    maxComparedNumber: 4
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'TOGGLE_COMPARE_PRODUCT':
            const isExist = state.compareProducts.some(product => product._id === action.product._id);
            if (isExist) {
                const filteredProducts = state.compareProducts.filter(product => product._id !== action.product._id)
                return { ...state, compareProducts: filteredProducts };
            }
            return { ...state, compareProducts: [...state.compareProducts, action.product] };
        case 'DELETE_COMPARED_PRODUCTS':
            return { ...state, compareProducts: [] };
        default:
            return state;
    }
}