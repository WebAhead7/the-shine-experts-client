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
    throw new Error(err.response.data.msg);
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['x-auth-token'];
};

export const getLoggedInUser = async () => {
  try {
    const { data: user } = await axios.get('/auth');
    return user;
  } catch (err) {
    throw new Error(err.response.data.msg);
  }
};
