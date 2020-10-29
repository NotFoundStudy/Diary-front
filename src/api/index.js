import axios from 'axios'

export const Auth = {
    create: (token = null) => { // 세팅 좀더 만지기
        const headers = {};
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        return axios.create({
            baseURL: `${process.env.REACT_APP_API_BASE_URL}api/auth`,
            headers,
            timeout: 1000,
        });
    },
};

console.log('@@ `${process.env.REACT_APP_API_BASE_URL}auth`', `${process.env.REACT_APP_API_BASE_URL}api/auth`);

const nonAuthAPI = Auth.create() // /api

console.log('@@ nonAuthAPI', nonAuthAPI);

// email, password, studentId, name
const register = ({body}) => {
    console.log('@@ api ', body);
    return nonAuthAPI.post('/register', body);
}

// name, password
const updateUser = ({token, body}) => {
    const authAPI = Auth.create(token)
    return authAPI.put('/user', body);
}

// email 미완성
const deleteUser = ({token, body}) => {
    const authAPI = Auth.create(token)
    return authAPI.delete('/user');
}

// confirmation-code - 이메일 재발송 버튼
const requestConfirmationCode = ({token}) => {
    const authAPI = Auth.create(token)
    return authAPI.get('/confirmation-code');
}

// confirmation-code
const confirmed = ({token, body}) => {
    const authAPI = Auth.create(token)
    return authAPI.put('/confirmation-code', body);
}

// email
const checkEmail = ({body}) => {
    return nonAuthAPI.post('/checkEmail', body);
}

// studentId
const checkStudentId = ({body}) => {
    return nonAuthAPI.post('/checkStudentId', body);
}

// role
const changeRoles = ({token, body}) => {
    const authAPI = Auth.create(token)
    return authAPI.post('/changeRoles', body);
}

// 미완성
const resetPassword = ({body}) => {
    return nonAuthAPI.post('/find/reset-password', body);
}

// userId, password
const login = ({body}) => {
    return nonAuthAPI.post('/login', body);

}

const Api = {
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