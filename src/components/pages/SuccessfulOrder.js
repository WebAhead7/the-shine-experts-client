import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import logo from '../../images/car.png';
import logout from '../../images/logout.png';
import backarrow from '../../images/back.png';
import './Types.css';
import './SuccessfulOrder.css';
import { Barcode, Cash, Visa, Cancel } from '../../images/order/index.js';

const SuccessfulOrder = ({ history }) => {
  const [serverErrMsg, setServerErrMsg] = useState('');
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = async ({ name, email, password }) => {
    try {
      history.push('/home');
    } catch (err) {
      setServerErrMsg(err.message);
    }
  };

  return (
    <div className="card">
      <div className="logo-div">
        <div>
          <button className="backbtn">
            <img src={backarrow} alt="" />
          </button>
        </div>
        <div>
          <img className="logo" src={logo} alt="car" />
        </div>
        <div>
          <button className="logout-btn">
            <img src={logout} alt="" />
          </button>
        </div>
      </div>
      <div className="content-div">
        <div className="barcode-div">
          <h2>Your Order has been saved successfully </h2>
          <img src={Barcode} alt="" />
          <h4>order number :23456789</h4>
        </div>
        <div className="pay-btns-div">
          <button className="pay-btn">
            <img src={Visa} alt="" />
            Pay Now
          </button>
          <button className="pay-btn">
            <img src={Cash} alt="" />
            Pay Cash
          </button>
          <button className="pay-btn">
            {' '}
            <img src={Cancel} alt="" />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulOrder;
