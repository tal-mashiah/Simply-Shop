import userService from '../services/userService';
import { loading, doneLoading } from './SystemActions';
import { setGrowl } from './GrowlActions';
import history from '../history';

export function updateForm(isValid, form) {
    return dispatch => {
        try {
            dispatch(loading());
            dispatch(_updateForm(isValid, form));
        } 
        catch (err) {
            console.log('userActions: err in update form', err);
        }
        finally {
            dispatch(doneLoading());
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

export function login(userCreds, lastRoute) {    
    return async dispatch => {
        try {
            dispatch(loading());
            const user = await userService.login(userCreds);
            dispatch(_setUser(user));

            if (lastRoute === '#/checkout') {
                history.push('/checkout#form');
            } else {
                history.push('/account/orders');
            }

            dispatch(setGrowl('התחברת בהצלחה', 'success'));
        }
        catch (err) {
            dispatch(setGrowl(err, 'error'));
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
            dispatch(setGrowl(err, 'error'));
        }
        finally {
            dispatch(doneLoading());
        }
    };
}

export function logout(currRoute) {
    return dispatch => {
        try {
            dispatch(loading());
            userService.logout();
            dispatch(setGrowl('התנתקת בהצלחה', 'info'));
            dispatch(_setUser(null));
            console.log(currRoute);
            if(currRoute.includes("account")) history.push('/');
        }
        catch (err) {
            console.log('userActions: err in logout', err);
        }
        finally {
            dispatch(doneLoading());
        }
    };
}

export function updateUser(userCreds) {
    return async dispatch => {
        try {
            dispatch(loading());
            const user = await userService.update(userCreds);
            dispatch(_setUser(user));
            dispatch(setGrowl('פרטי החשבון שונו בהצלחה', 'success'));
        }
        catch (err) {
            console.log('userActions: err in update user', err);
        }
        finally {
            dispatch(doneLoading());
        }
    };
}

export function _setUser(user) {
    return {
        type: 'SET_USER',
        user
    };
}

export function updatePassword(userCreds) {
    return async dispatch => {
        try {
            dispatch(loading());
            await userService.updatePassword(userCreds);
            dispatch(setGrowl('הסיסמה שונתה בהצלחה', 'success'));
        }
        catch (err) {
            dispatch(setGrowl(err, 'error'));
        }
        finally {
            dispatch(doneLoading());
        }
    };
}