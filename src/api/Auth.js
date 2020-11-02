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