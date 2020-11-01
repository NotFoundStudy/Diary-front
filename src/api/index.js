import axios from 'axios'

export const Auth = {
    create: (token = null) => {
        const headers = {
            'Content-Type': 'application/json',
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        return axios.create({
            baseURL: `${process.env.REACT_APP_API_BASE_URL}/api`,
            headers,
            timeout: 5000,
        });
    },
};

const nonAuthAPI = Auth.create()

// email
const checkEmail = ({body}) => {
    return nonAuthAPI.post('/auth/checkEmail', body);
}

// studentId
const checkStudentId = ({body}) => {
    return nonAuthAPI.post('/auth/checkStudentId', body);
}

// email, password, studentId, name
const register = ({body}) => {
    return nonAuthAPI.post('/auth/register', body);
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

// userId, password
const login = ({body}) => {
    console.log('@@ API body', body );
    return nonAuthAPI.post('/auth/login', body);
}

// logout

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

// role
const changeRoles = ({token, body}) => {
    const authAPI = Auth.create(token)
    return authAPI.post('/auth/changeRoles', body);
}

// 미완성
const resetPassword = ({body}) => {
    return nonAuthAPI.post('/auth/find/reset-password', body);
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