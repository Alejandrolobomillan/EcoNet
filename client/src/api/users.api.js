import axios from 'axios'

const usersApi = axios.create({
    baseURL: 'http://localhost:8000/econet/api/usuari/'
});

const clientsApi = axios.create({
    baseURL: 'http://localhost:8000/econet/api/client/'
});

export const getAllUsers = () => usersApi.get('/');

export const getClient = async (username) => {
    try {
      const response = await clientsApi.get(`${username}/`);
      return response.data; // Devuelve directamente los datos del cliente desde la respuesta
    } catch (error) {
      console.error('Failed to fetch client details:', error.message);
      throw new Error('Failed to fetch client details');
    }
  };  

export const registerUser = (usuari) => usersApi.post('/', usuari);

export const registerClient = (client) => clientsApi.post('/', client);

export const loginUser = (credentials) => axios.post('http://localhost:8000/econet/login/', credentials);

export const getUserByUsername = async (username) => {
    try {
      const response = await axios.get(`http://localhost:8000/econet/api/usuari/${username}/`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch user details:', error.message);
      throw new Error('Failed to fetch user details');
    }
  };

  export const random_products = () => axios.get('http://localhost:8000/econet/random-products/');

  export const getProductsByCategory = (categoria, page) => axios.get(`http://localhost:8000/econet/get_by_categoria/?categoria=${categoria}&page=${page}`);