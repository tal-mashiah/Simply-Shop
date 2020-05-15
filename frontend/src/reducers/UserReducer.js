const initialState = {
    form: {
        isValid: false,
        input: null
    }
};

export default function (state = initialState, action = {}) {
    switch (action.type) {

        case 'UPDATE_FORM':
            const updatedForm = state.form;
            updatedForm.isValid = action.isValid;
            updatedForm.input = action.form;

            return { ...state, form: {...updatedForm} };

        default:
            return state; 
    }
}
