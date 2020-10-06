export const setAccessToken = (value) => {
    window.localStorage.setItem('accessToken', value);
}

export const getAccessToken = () => {
    window.localStorage.getItem('accessToken');
}