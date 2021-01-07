import { Car as Logo } from '../../images/index';
import { BackBtn, LogoutBtn } from '../buttons/index';
import './Types.css';
import './SuccessfulOrder.css';
import { getOrdersByBusinessEmail } from '../../axios/orders';
import { useEffect, useState } from 'react';

const BusinessSchedule = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [serverErrMsg, setServerErrMsg] = useState('');
  const [orders, setOrders] = useState('');

  useEffect(() => {
    const getOrders = async () => {
      try {
        setServerErrMsg('');
        setLoading(true);
        const { orders } = await getOrdersByBusinessEmail({
          businessEmail: process.env.REACT_APP_BUSINESS_EMAIL,
        });
        setOrders(orders);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setServerErrMsg(err.message);
      }
    };
    getOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (serverErrMsg) {
    return <div>{serverErrMsg}</div>;
  }

  return (
    <div className="card">
      <div className="logo-div">
        <div>
          <BackBtn history={history} />
        </div>
        <div>
          <img className="logo" src={Logo} alt="car" />
        </div>
        <div>
          <LogoutBtn history={history} />
        </div>
      </div>
      <p>Orders</p>
      {orders.map(({ userEmail, orderDate, orderType, tomorrowOrToday }) => (
        <div key={userEmail}>
          <div>User email : {userEmail}</div>
          <div>Order date : {orderDate}</div>
          <div>Order type : {orderType}</div>
          <div>Order day : {tomorrowOrToday}</div>
          <p>-----------------</p>
        </div>
      ))}
    </div>
  );
};

export default BusinessSchedule;
