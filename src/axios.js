import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 1000,

  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
