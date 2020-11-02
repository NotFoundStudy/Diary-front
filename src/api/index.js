import axios from 'axios'
import {Auth} from './Auth'

const nonAuthAPI = Auth.create() // /api

// email, password, studentId, name
const register = ({body}) => {
    console.log('@@ nonAuthAPI, body', nonAuthAPI, body);
    // return nonAuthAPI.post('/auth/register', body);
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/register`, {
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin' : '*',
        },
        body,
        timeout: 5000,
    });
}

// const register = ({body}) => {
    // return nonAuthAPI.post('/auth/register', body);
// }

// name, password
const updateUser = ({token, body}) => {
    const authAPI = Auth.create(token)
    return authAPI.put('/auth/user', body);
}

// email 미완성
const deleteUser = ({token, body}) => {
    const authAPI = Auth.create(token)
    return authAPI.delete('/auth/user');
}

// confirmation-code - 인증메일 발송 버튼
const requestConfirmationCode = ({token}) => {
    const authAPI = Auth.create(token)
    return authAPI.get('/auth/confirmation-code');
}

// confirmation-code 받은 인증코드 확인 버튼
const confirmed = ({token, body}) => {
    const authAPI = Auth.create(token)
    return authAPI.put('/auth/confirmation-code', body);
}

// email
const checkEmail = ({body}) => {
    return nonAuthAPI.post('/auth/checkEmail', body);
}

// studentId
const checkStudentId = ({body}) => {
    return nonAuthAPI.post('/auth/checkStudentId', body);
}

// role
const changeRoles = ({token, body}) => {
    const authAPI = Auth.create(token)
    return authAPI.post('/auth/changeRoles', body);
}

// 미완성
const resetPassword = ({body}) => {
    return nonAuthAPI.post('/auth/find/reset-password', body);
}

// userId, password
const login = ({body}) => {
    return nonAuthAPI.post('/auth/login', body);

}

const Api = { // 객체 생성 시 메모리에 남아있어서 Bad?
    login,
    register,
    updateUser,
    deleteUser,
    requestConfirmationCode,
    confirmed,
    checkEmail,
    checkStudentId,
    changeRoles,
    resetPassword,
};

export default Api;