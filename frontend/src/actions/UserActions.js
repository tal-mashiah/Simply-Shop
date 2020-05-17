import userService from '../services/userService';

export function updateForm(isValid, form) {
    return dispatch => {
        try {
            dispatch(_updateForm(isValid, form));
        } catch (err) {
            console.log('userActions: err in update form', err);
        }
    };
}

function _updateForm(isValid, form) {
    return {
        type: 'UPDATE_FORM',
        isValid,
        form
    };
}

export function login(userCreds) {
    return async dispatch => {
        try {
            const user = await userService.login(userCreds);
            dispatch(_setUser(user));

        } catch (err) {
            console.log('userActions: err in login', err);
        }
    };
}
export function signup(userCreds) {
    return async dispatch => {
        try {
            const user = await userService.signup(userCreds);
            dispatch(_setUser(user));

        } catch (err) {
            console.log('userActions: err in signup', err);
        }
    };
}
export function logout() {
    return async dispatch => {
        try {
            await userService.logout();
            dispatch(_setUser(null));

        } catch (err) {
            console.log('userActions: err in logout', err);
        }
    };
}

export function _setUser(user) {
    return {
        type: 'SET_USER',
        user
    };
}