import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
});

// Aqui temos um Interceptador de requisição para injetar o TOKEN automaticamente
api.interceptors.request.use(
  async (config) => {
    try {
      // Busca os dados do usuário salvos no banco local 
      const savedUser = await AsyncStorage.getItem('@Loja34:user_data');
      
      if (savedUser) {
        // Transforma o texto de volta em objeto para pegar o token
        const { token } = JSON.parse(savedUser);
        
        // Se o token existir, injeta ele no cabeçalho Authorization Bearer
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    } catch (error) {
      console.log('Erro ao tentar injetar o token no cabeçalho:', error);
    }
    
    // Libera a requisição 
    return config;
  },
  (error) => {
    // TRatamnto de erro
    return Promise.reject(error);
  }
);
// Funções do CRUD
export const getProducts = () => api.get('/products');
export const getProduct = (id: any) => api.get(`/products/${id}`);
export const getProductsByCategory = (category: string) => api.get(`/products/category/${category}`);
export const getCategories = () => api.get('/products/categories');
export const createProduct = (data: any) => api.post('/products', data);
export const updateProduct = (id: any, data: any) => api.put(`/products/${id}`, data);
export const deleteProduct = (id: any) => api.delete(`/products/${id}`);

export const loginUser = (credentials: any) => api.post('/auth/login', credentials);
