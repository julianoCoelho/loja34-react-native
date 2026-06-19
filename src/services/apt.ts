import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
});

export const getProducts = () => api.get('/products');
export const getProduct = (id: any) => api.get(`/products/${id}`);
export const getProductsByCategory = (category: string) => api.get(`/products/category/${category}`);
export const getCategories = () => api.get('/products/categories');
export const createProduct = (data: any) => api.post('/products', data);
export const updateProduct = (id: any, data: any) => api.put(`/products/${id}`, data);
export const deleteProduct = (id: any) => api.delete(`/products/${id}`);

export const loginUser = (credentials: any) => api.post('/auth/login', credentials);
