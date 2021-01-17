import axios from 'axios';

export const login = (username, password) => {
    return axios.post(`/auth`, {
        username,
        password
    });
};