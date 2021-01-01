import axios from './axios';

export const signup = async ({ name, email, phonenumber, password }) => {
  try {
    const {
      data: { token },
    } = await axios.post('/users', {
      name,
      email,
      phonenumber,
      password,
    });

    localStorage.setItem('token', token);
    axios.defaults.headers.common['x-auth-token'] = token;
  } catch (err) {
    if (err.response) {
      if (err.response.data) {
        throw new Error(err.response.data.msg);
      }
      if (err.response.data.errors) {
        throw new Error('Validate inputs !');
      }
      throw new Error('Ops something went wrong in the server!');
    }
    throw new Error('Ops something went wrong in the server!');
  }
};
