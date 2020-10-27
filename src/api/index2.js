import axios from 'axios';
import {navigate} from "../helper/historyHelper";
import {getAccessToken} from "../helper/tokenHelper";

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
        'Authorization': `Bearer ${getAccessToken()}`, // 토큰 항상 보내는 건 피할 사항?
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
    login: (userId, password) => request(fetchEnum.POST, `/login`, {userId, password}),

    // register
    checkEmail: (email) => request(fetchEnum.POST, `/checkEmail`, email), // no token
    checkStudentId: (studentId) => request(fetchEnum.POST, `/checkStudentId`, studentId), // token
    register: (email, password, studentId, name) => request(fetchEnum.POST, `/register`, {email, password, studentId, name}),
    requestConfirmationCode: () => request(fetchEnum.GET, `/confirmation-code`), // token
    // 입력됐을 때 바로 바로 유효 check하는 건가 (중복 아이디 검사처럼)
    confirmed: (confirmationCode) => request(fetchEnum.PUT, `/confirmation-code`, confirmationCode), // token

    updateUser: (name, password) => request(fetchEnum.PUT, `/user`, {name, password}),
    deleteUser: () => request(fetchEnum.DELETE, `/user`), // token

    changeRoles: (role) => request(fetchEnum.POST, `/changeRoles`, role), // token
    // 미완성
    resetPassword: () => request(fetchEnum.POST, `/find/reset-password`), // token

    logout: (accessToken) => request(fetchEnum.POST, `/logout-sample`, accessToken),
}

export default Api;