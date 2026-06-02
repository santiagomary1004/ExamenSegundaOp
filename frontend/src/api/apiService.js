import axios from 'axios';
const api = axios.create({ baseURL: 'http://localhost:8080/api' });

export const apiService = {
  getTickets: () => api.get('/tickets'),
  getUsuarios: () => api.get('/usuarios') // Supongamos que tienes este endpoint
};