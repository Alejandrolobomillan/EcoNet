import axios from 'axios'

const usersApi = axios.create({
    baseURL: 'http://localhost:8000/econet/api/usuari/'
});

export const getAllUsers = () => usersApi.get('/');

export const registerUser = (usuari) => usersApi.post('/', usuari);

export const loginUser = (credentials) => axios.post('http://localhost:8000/econet/login/', credentials);