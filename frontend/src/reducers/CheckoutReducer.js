const initialState = {
    bag: [],
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'UPDATE_BAG':
            const isExist = state.bag.some(bagItem => bagItem.product._id === action.item.product._id);
            if (isExist) {
                const updateBag = state.bag.map(bagItem =>
                    bagItem.product._id === action.item.product._id ? { ...bagItem, quantity: action.item.quantity + bagItem.quantity } : bagItem)
                return { ...state, bag: updateBag };
            } else {
                return { ...state, bag: [...state.bag, action.item] };
            }
        case 'DELETE_ITEM':
            const filteredBag = state.bag.filter(bagItem => bagItem.product._id !== action.itemId);

                return { ...state, bag: filteredBag };

        default:
            return state; 
    }
}
