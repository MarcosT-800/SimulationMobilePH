import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apimobilewhatsapp.phng.com.br', // URL base da API
});

// Interceptador para adicionar o token Bearer
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Função de Login
export const login = async (user_login: string, user_pass: string) => {
    const response = await fetch("https://apimobilewhatsapp.phng.com.br/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_login: user_login,
        user_pass: user_pass,
      }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro desconhecido ao fazer login.");
    }
  
    const data = await response.json();
    console.log("Resposta do login:", data); // Adicionado para depuração
  
    const token = data.token; // Verifique se o token está correto no campo 'token'
    if (token) {
      localStorage.setItem('token', token);
      console.log("Token armazenado:", token); // Adicionado para depuração
    } else {
      console.error("Token não encontrado na resposta");
    }
  
    return data;
  };
  

export default api;
