// Local Storage

const saveToStorage = (key, value) => {
    const str = JSON.stringify(value);
    localStorage.setItem(key, str);
}

const loadFromStorage = (key, defaultValue) => {
    const str = localStorage.getItem(key);
    return str ? JSON.parse(str) : defaultValue
}

const removeFromStorage = key => {
    localStorage.removeItem(key);
}

// Session Storage

const saveToSession = (key, value) => {
    const str = JSON.stringify(value);
    sessionStorage.setItem(key, str);
}

const loadFromSession = (key, defaultValue) => {
    const str = sessionStorage.getItem(key);
    return str ? JSON.parse(str) : defaultValue
}

const removeFromSession = key => {
    sessionStorage.removeItem(key);
}

export default {
    removeFromStorage,
    removeFromSession,
    loadFromStorage,
    loadFromSession,
    saveToStorage,
    saveToSession
};