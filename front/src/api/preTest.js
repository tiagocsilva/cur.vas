import axios from 'axios';

export const getQuestions = () => {
    return axios.get(`/question`);
};