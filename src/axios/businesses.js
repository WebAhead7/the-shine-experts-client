import axios from './axios';

export const signup = async ({
  name,
  email,
  phonenumber,
  location,
  password,
}) => {
  try {
    const {
      data: { token },
    } = await axios.post('/businesses', {
      name,
      email,
      phonenumber,
      location,
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
        throw new Error('Validate inputs!');
      }
    }
    throw new Error('Ops something went wrong in the server!');
  }
};

export const getBusinnesAppointments = async ({ email }) => {
  try {
    const { data: appointments } = await axios.get(`/businesses/${email}`);
    return appointments;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.data.msg);
    }
    throw new Error('Ops something went wrong in the server!');
  }
};
