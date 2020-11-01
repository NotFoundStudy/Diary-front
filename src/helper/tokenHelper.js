export const setAccessToken = (value) => {
    window.localStorage.setItem('accessToken', value);
}

export const getAccessToken = () => {
    window.localStorage.getItem('accessToken');
}

export const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, value);
}

export const getLocalStorage = (key) => {
    const result = window.localStorage.getItem(key);
    // if error, add 'type check convert : obj | others(string, ...)'
    return JSON.parse(result);
}