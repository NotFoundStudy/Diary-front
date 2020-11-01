// localStorage - token
export const setAccessToken = (value) => {
   return window.localStorage.setItem('accessToken', value);
}

export const getAccessToken = () => {
    return window.localStorage.getItem('accessToken');
}

// localStorage - common
export const setLocalStorage = (key, value) => {
    return window.localStorage.setItem(key, value);
}

export const removeLocalStorageItem = (key) => {
    return window.localStorage.removeItem(key);
}

export const getLocalStorage = (key) => {
    const result = window.localStorage.getItem(key);
    // if error, add 'type check convert : obj | others(string, ...)'
    return JSON.parse(result);
}


