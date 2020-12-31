import axios from 'axios';

const token = localStorage.getItem('token');
let headers = {};
if (token) {
  headers['x-auth-token'] = token;
}

export default axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 1000,
  headers,
});
