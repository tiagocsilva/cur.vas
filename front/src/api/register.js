import axios from 'axios';

export const register = (data) => {
    return axios.post(`/user`, data);
};