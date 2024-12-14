import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 5000,
});

export default client;
