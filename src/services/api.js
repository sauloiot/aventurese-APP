import axios from 'axios';

const api = axios.create({
    baseURL: 'http://fierce-gorge-57720.herokuapp.com'
});

export default api;