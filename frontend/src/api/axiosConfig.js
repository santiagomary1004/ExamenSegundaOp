import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Ajusta si tu backend corre en otro puerto
  headers: {
    'Content-Type': 'application/json',
  }
});

// Opcional: Interceptor para agregar token JWT automáticamente
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default apiClient;