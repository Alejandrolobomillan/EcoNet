import axios from 'axios'

const usersApi = axios.create({
    baseURL: 'http://localhost:8000/econet/api/usuari/'
});

export const getAllUsers = () => usersApi.get('/');

export const registerUser = (usuari) => usersApi.post('/', usuari);

export const loginUser = (credentials) => axios.post('http://localhost:8000/econet/login/', credentials);

export const random_products = () => axios.get('http://localhost:8000/econet/random-products/');

export const getProductsByCategory = (categoria, page) => axios.get(`http://localhost:8000/econet/get_by_categoria/?categoria=${categoria}&page=${page}`);
