import axios from './axios';

export const makeOrder = async ({
  businessEmail,
  orderDate,
  orderType,
  tomorrowOrToday,
}) => {
  try {
    await axios.post('/orders', {
      businessEmail,
      orderDate,
      orderType,
      tomorrowOrToday,
    });
  } catch (err) {
    if (err.response) {
      if (err.response.data.msg) {
        throw new Error(err.response.data.msg);
      }
      if (err.response.data.errors) {
        throw new Error('Validate inputs !');
      }
    }
    throw new Error('Ops something went wrong in the server!');
  }
};

export const getOrdersByBusinessEmail = async ({ businessEmail }) => {
  try {
    const { data: orders } = await axios.post(`/orders/${businessEmail}`);
    return orders;
  } catch (err) {
    if (err.response) {
      if (err.response.data.msg) {
        throw new Error(err.response.data.msg);
      }
      if (err.response.data.errors) {
        throw new Error('Validate inputs !');
      }
    }
    throw new Error('Ops something went wrong in the server!');
  }
};
