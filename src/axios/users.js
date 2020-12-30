import axios from './axios';

export const signup = async ({ name, email, password }) => {
  try {
    const {
      data: { token },
    } = await axios.post('/users', {
      name,
      email,
      password,
    });

    localStorage.setItem('token', token);
    axios.defaults.headers.common['x-auth-token'] = token;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
};
