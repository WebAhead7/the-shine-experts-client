import axios from 'axios';

const token = localStorage.getItem('token');
let headers = {};
if (token) {
  headers['x-auth-token'] = token;
}

let baseURL;
if (process.env.NODE_ENV !== 'production') {
  baseURL = process.env.REACT_APP_SERVER_URL_DEV;
} else {
  baseURL = process.env.REACT_APP_SERVER_URL;
}

export default axios.create({
  baseURL,
  timeout: 1000,
  headers,
});
