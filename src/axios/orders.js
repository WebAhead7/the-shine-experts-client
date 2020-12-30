import axios from 'axios';

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
    const msg = err.response.data.msg;
    throw new Error(msg);
  }
};
