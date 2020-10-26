import axios from 'axios';
import {navigate} from "../helper/historyHelper";

const fetchEnum = {
    // method
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',

    // content-type
    APPLICATION_JSON: 'application/json',
    APPLICATION_X_WWW_FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
    MULTIPART_FORM_DATA: 'multipart/form-data',
    TEXT_PLAIN: 'text/plain',

    // api baseUrl
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL
};

const axiosInstance = axios.create({
    baseURL: fetchEnum.API_BASE_URL,
    timeout: 12000,
    // withCredentials: true,
    headers: {
        'Accept': fetchEnum.APPLICATION_JSON,
        'Content-Type': fetchEnum.APPLICATION_JSON,
        // 'Authorization': process.env.REACT_APP_ACCESS_KEY,
    }
});

const request = async (method, url, data) => {
    const config = {
        method,
        url,
        data
    };

    if (data) {
        if (method === fetchEnum.GET) {
            config.params = data
        } else {
            config.data = data;
        }
    }

    try {
        const result = await axiosInstance(config);
        // console.log('@@ [fetch result]', result);

        return result;
    } catch (e) {
        if (e.response) {
            if (e.response.status === 401) {
                console.log('@@ [Error]', e.response.data);
                // navigate('/Error/404');
            }
        }
        console.log("Error server call: ", url, ", reason: ", e);
    }
};

const Api = {
    register: (values) => request(fetchEnum.POST, `/register-sample`, values),
    login: (userInfo) => request(fetchEnum.POST, `/login-sample`, userInfo),
    logout: (accessToken) => request(fetchEnum.POST, `/logout-sample`, accessToken),

    fetchSample: (userId) => request(fetchEnum.GET, `/fetch-sample/${userId}`),
}

export default Api;