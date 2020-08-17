export function setGrowl(msg, growlType) {
    return {
        type: 'SET_GROWL',
        growlType,
        msg
    };
}