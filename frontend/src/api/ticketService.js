import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Ajusta según tu backend
  headers: { 'Content-Type': 'application/json' }
});

export const ticketService = {
  getAll: () => apiClient.get('/tickets'),
  getById: (id) => apiClient.get(`/tickets/${id}`),
};