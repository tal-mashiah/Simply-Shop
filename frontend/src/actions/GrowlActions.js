export function setGrowl(msg, type) {
    return dispatch => {
        try {
            dispatch(_setGrowl(msg, type));
        } catch (err) {
            console.log('userActions: err in set growl', msg);
        }
    };
}

export function _setGrowl(msg, growlType) {
    return {
        type: 'SET_GROWL',
        growlType,
        msg
    };
}
