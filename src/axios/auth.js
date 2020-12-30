import axios from './axios';

export const login = async ({ email, password }) => {
  try {
    const {
      data: { token },
    } = await axios.post('/auth', {
      email,
      password,
    });

    localStorage.setItem('token', token);
    axios.defaults.headers.common['x-auth-token'] = token;
  } catch (err) {
    const msg = err.response.data.msg;
    throw new Error(msg);
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['x-auth-token'];
};
