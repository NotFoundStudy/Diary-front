import axios from 'axios'

export const Auth = {
    create: (token = null) => {
        const headers = {};
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        axios.create({
            baseURL: process.env.REACT_APP_API_BASE_URL,
            headers: { 'X-Custom-Header': 'foobar' },
            timeout: 1000,
        });
    },
};

const nonAuthAPI = Auth.create()

const Api = {
    login,
    register,
    updateUser,
    deleteUser,
    requestConfirmationCode,
    Confirmed,
    checkEmail,
    checkStudentId,
    changeRoles,
    resetPassword,
};

export default Api;

// email, password, studentId, name
const register = ({ body }) => {
    return nonAuthAPI.post('/register', body);
}

// name, password
const updateUser = ({ token, body }) => {
    const authAPI = Auth.create(token)
    return authAPI.put('/user', body);
}

// email 미완성
const deleteUser = ({ token, body }) => {
    const authAPI = Auth.create(token)
    return authAPI.delete('/user');
}

// confirmation-code
const requestConfirmationCode = ({ token }) => {
    const authAPI = Auth.create(token)
    return authAPI.get('/confirmation-code');
}

// confirmation-code
const Confirmed = ({ token, body }) => {
    const authAPI = Auth.create(token)
    return authAPI.put('/confirmation-code', body);
}

// email
const checkEmail = ({ body }) => {
    return nonAuthAPI.post('/checkEmail', body);
}

// studentId
const checkStudentId = ({ body }) => {
    return nonAuthAPI.post('/checkStudentId', body);
}

// role
const changeRoles = ({ token, body }) => {
    const authAPI = Auth.create(token)
    return authAPI.post('/changeRoles', body);
}

// 미완성
const resetPassword = ({ body }) => {
    return nonAuthAPI.post('/find/reset-password', body);
}

// userId, password
const login = ({ token, body }) => {
    const authAPI = Auth.create(token)
    return authAPI.post('/login', body);
}