import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_USERS = 'https://6a076585fa9b27c848fa1078.mockapi.io/api/reactnative';
const BASE_PRODUCTS = 'https://6a076585fa9b27c848fa1078.mockapi.io/api/reactnative';

const usersApi = axios.create({ baseURL: BASE_USERS, timeout: 10000 });
const productsApi = axios.create({ baseURL: BASE_PRODUCTS, timeout: 10000 });

productsApi.interceptors.request.use(
  async (config) => {
    try {
      const savedUser = await AsyncStorage.getItem('@Loja34:user_data');
      if (savedUser) {
        const { token } = JSON.parse(savedUser);
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    } catch (error) {
      console.log('Erro ao injetar token:', error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getUsers = () => usersApi.get('/Users');

export const loginUser = async (credentials: { username: string; password: string }) => {
  const response = await usersApi.get('/Users');
  const users: any[] = response.data;
  const user = users.find(
    (u) => u.username === credentials.username && u.password === credentials.password
  );
  if (!user) throw new Error('Usuário ou senha incorretos');
  return { data: { ...user, token: `token_${user.id}` } };
};

export const signUpUser = (data: { username: string; password: string; name?: string }) =>
  usersApi.post('/Users', data);


export const getProducts = () => productsApi.get('/Produtos');
export const getProduct = (id: any) => productsApi.get(`/Produtos/${id}`);
export const getProductsByCategory = (category: string) =>
  productsApi.get('/Produtos').then((r) => ({
    ...r,
    data: r.data.filter((p: any) => p.categoria === category),
  }));
export const createProduct = (data: any) => productsApi.post('/Produtos', data);
export const updateProduct = (id: any, data: any) => productsApi.put(`/Produtos/${id}`, data);
export const deleteProduct = (id: any) => productsApi.delete(`/Produtos/${id}`);
