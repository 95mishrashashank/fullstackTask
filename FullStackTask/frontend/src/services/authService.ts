import axios from 'axios';

const API_URL = 'http://localhost:3000/auth';

export const loginWithGoogle = async () => {
  window.location.href = `${API_URL}/google`;
};

export const loginWithFacebook = async () => {
  window.location.href = `${API_URL}/facebook`;
};

export const getCurrentUser = async () => {
  return await axios.get(`${API_URL}/me`, { withCredentials: true });
};

export const logout = async () => {
  return await axios.get(`${API_URL}/logout`, { withCredentials: true });
};