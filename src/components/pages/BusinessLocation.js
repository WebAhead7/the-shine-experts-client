import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import logo from '../../images/car.png';
import logout from '../../images/logout.png';
import backarrow from '../../images/back.png';
import './Types.css';
import './BusinessLocation.css';
import {
  PhoneCall,
  Map,
  Messenger,
  Whatsapp,
} from '../../images/location/index';

const BusinessLocation = ({ history }) => {
  const [serverErrMsg, setServerErrMsg] = useState('');
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = async ({ name, email, password }) => {};

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
        <div className="map-div">
          <img className="map-img" src={Map} alt="" />
        </div>
        <div className="locationInfo-div">
          <h4>The Shine Experts</h4>
          <h4>223 Center Street</h4>
          <h4>Venus, New York 10001</h4>
          <h4>Tel : 0903462899 / 065569946</h4>
        </div>
        <div className="contact-us">
          <h2>contact us</h2>
          <div>
            <button className="contact-btn">
              {' '}
              <img src={Whatsapp} alt="" />
            </button>
            <button className="contact-btn">
              {' '}
              <img src={Messenger} alt="" />
            </button>
            <button className="contact-btn">
              {' '}
              <img src={PhoneCall} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLocation;
