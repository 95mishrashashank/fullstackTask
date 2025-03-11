import axios from 'axios';

const API_URL = 'http://localhost:3000/posts';

export const fetchPosts = async () => {
  return await axios.get(API_URL);
};

export const fetchPostById = async (id:string) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createPost = async (data:any) => {
  return await axios.post(API_URL, data, {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  });
};