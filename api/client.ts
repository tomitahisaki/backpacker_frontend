import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

const client = applyCaseMiddleware(
  axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 5000,
  }),
);

export default client;
