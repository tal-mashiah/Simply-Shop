const initialState = {
    growl: {
        msg: null,
        type: null
    }
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_GROWL':
            const updatedGrowl = state.growl;
            updatedGrowl.msg = action.msg;
            updatedGrowl.type = action.growlType;

            return { ...state, growl: { ...updatedGrowl } };
        default:
            return state;
    }
}
