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
  const onClick = () => {
    history.push('/confirmation');
  };

  const Appointment = {
    userEmail: 'ahmad@gmail.com',
    businessEmail: 'TheShineExperts@gmail.com',
    orderDate: '10:00',
    orderType: 'Hand Wash',
    tomorrowOrToday: 'today',
  };

  useEffect(() => {
    const getOrders = async () => {
      try {
        setServerErrMsg('');
        setLoading(true);
        const orders = await getOrdersByBusinessEmail({
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

      {/* <div>
        {orders.map((order) => (
          <div>{order.businessEmail}</div>
        ))}
      </div> */}
    </div>
  );
};

export default BusinessSchedule;
