import { useEffect, useState } from 'react';
import { Car as Logo } from '../../images/index';
import { BackBtn, LogoutBtn } from '../buttons/index';
import './Types.css';
import './SuccessfulOrder.css';
import { Checked } from '../../images/confirmation/index.js';

import { useRecoilValue } from 'recoil';
import { vehicleTypeState, washTypeState, appointmentState } from '../../atoms';

import { makeOrder } from '../../axios/orders';

const Confirmation = ({ history }) => {
  const vehicleType = useRecoilValue(vehicleTypeState);
  const washType = useRecoilValue(washTypeState);
  const appointment = useRecoilValue(appointmentState);

  const [loading, setLoading] = useState(true);
  const [serverErrMsg, setServerErrMsg] = useState('');

  useEffect(() => {
    const makeOrderAPI = async () => {
      try {
        setServerErrMsg('');
        setLoading(true);
        const businessEmail = process.env.REACT_APP_BUSINESS_EMAIL;
        const orderType = washType;
        const orderDate = appointment.hour;
        const tomorrowOrToday = appointment.day;

        await makeOrder({
          businessEmail,
          orderDate,
          tomorrowOrToday,
          orderType,
        });

        setLoading(false);
      } catch (err) {
        setLoading(false);
        setServerErrMsg(err.message);
      }
    };
    makeOrderAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="content-div">
        <div className="barcode-div">
          <h2>Your Order has been saved successfully </h2>
          <img src={Checked} alt="" />
          <h4>order number :23456789</h4>
          <h4>Vehicle type : {vehicleType}</h4>
          <h4>Wash type : {washType}</h4>
          <h4>Appointment hour : {appointment.hour}</h4>
          <h4>Appointment day : {appointment.day}</h4>
        </div>
        <div className="thank-div">
          <h3>Thank you for choosing our business!!</h3>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
