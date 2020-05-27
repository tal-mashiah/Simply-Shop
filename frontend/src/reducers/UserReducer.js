let localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);

const initialState = {
    loggedInUser: localLoggedinUser,
    form: {
        isValid: false,
        input: null
    }
};

export default function (state = initialState, action = {}) {
    switch (action.type) {

        case 'SET_USER':
            return { ...state, loggedInUser: action.user }; 

        case 'UPDATE_FORM':
            const updatedForm = state.form;
            updatedForm.isValid = action.isValid;
            updatedForm.input = action.form;

            return { ...state, form: { ...updatedForm } };

        default:
            return state;
    }
}
