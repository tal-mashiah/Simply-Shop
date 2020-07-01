const initialState = {
    bag: [],
    delivery: null,
    form: {
        isValid: false,
        input: null
    }
};

export default function (state = initialState, action = {}) {
    switch (action.type) {

        case 'SET_BAG':
            return { ...state, bag: action.updatedBag };

        case 'UPDATE_BAG':
            const isExist = state.bag.some(bagItem => bagItem.product._id === action.item.product._id);
            if (isExist) {
                const updatedBag = state.bag.map(bagItem =>
                    bagItem.product._id === action.item.product._id ? { ...bagItem, quantity: action.item.quantity + bagItem.quantity } : bagItem)
                return { ...state, bag: updatedBag };
            } else {
                return { ...state, bag: [...state.bag, action.item] };
            }

        case 'DELETE_ITEM':
            const filteredBag = state.bag.filter(bagItem => bagItem.product._id !== action.itemId);
            return { ...state, bag: filteredBag };

        case 'UPDATE_QUANTITY':
            if (action.quantity === 1 && action.diff < 0) {
                return { ...state }
            }
            const updatedBag = state.bag.map(bagItem =>
                bagItem.product._id === action.itemId ? { ...bagItem, quantity: action.diff + bagItem.quantity } : bagItem)
            return { ...state, bag: updatedBag };

        case 'SET_DELIVERY':
            return { ...state, delivery: action.option };

        case 'UPDATE_FORM':
            const updatedForm = state.form;
            updatedForm.isValid = action.isValid;
            updatedForm.input = action.form;

            return { ...state, form: {...updatedForm} };

        default:
            return state; 
    }
}
