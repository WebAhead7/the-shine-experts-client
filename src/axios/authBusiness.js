import axios from './axios';

export const login = async ({ email, password }) => {
  try {
    const {
      data: { token },
    } = await axios.post('/authBusiness', {
      email,
      password,
    });

    localStorage.setItem('token', token);
    axios.defaults.headers.common['x-auth-token'] = token;
  } catch (err) {
    if (err.response) {
      if (err.response.data.msg) {
        throw new Error('Password or email is wrong!');
      }
      if (err.response.data.errors) {
        throw new Error('Validate inputs!');
      }
    }
    throw new Error('Ops something went wrong in the server!');
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['x-auth-token'];
};

export const getLoggedInBusiness = async () => {
  try {
    const { data: business } = await axios.get('/authBusiness');
    return business;
  } catch (err) {
    throw new Error('Ops something went wrong in the server!');
  }
};
