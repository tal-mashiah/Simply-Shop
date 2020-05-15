export function updateForm(isValid,form) {
    return dispatch => {
        try {
            dispatch(_updateForm(isValid,form));
        } catch (err) {
            console.log('userActions: err in update form', err);
        }
    };
}

function _updateForm(isValid,form) {
    return {
        type: 'UPDATE_FORM',
        isValid,
        form
    };
}