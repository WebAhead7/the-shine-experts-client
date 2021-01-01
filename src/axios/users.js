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
    if (!err.response) {
      throw new Error('Ops server is down!');
    }
    if (err.response.data) {
      throw new Error(err.response.data.msg);
    }
    throw new Error('Validate inputs !');
  }
};
