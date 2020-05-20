import userService from '../services/userService';
import { loading, doneLoading } from './SystemActions';
import history from '../history';

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
            dispatch(loading());
            const user = await userService.login(userCreds);
            dispatch(_setUser(user));
            history.push('/account/orders');
        } 
        catch (err) {
            console.log('err in action: ',err);
            dispatch(_setError(err));
        } 
        finally {
            dispatch(doneLoading());
        }
    };
}
export function signup(userCreds) {
    return async dispatch => {
        try {
            dispatch(loading());
            delete userCreds.passwordValidation;
            const user = await userService.signup(userCreds);
            dispatch(_setUser(user));
            history.push('/account/orders');
        } 
        catch (err) {
            dispatch(_setError(err));
        }
        finally {
            dispatch(doneLoading());
        }
    };
}
export function logout() {
    return dispatch => {
        try {
            userService.logout();
            dispatch(_setUser(null));
            history.push('/');
        } 
        catch (err) {
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

export function setError(err) {
    return dispatch => {
        try {
            dispatch(_setError(err));
        } catch (err) {
            console.log('userActions: err in set error', err);
        }
    };
}

export function _setError(err) {
    return {
        type: 'SET_ERROR',
        err
    };
}