import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signup } from '../axios/users';
import { NavLink } from 'react-router-dom';
import logo from '../images/car.png';
import autocarwashing from '../images/autocarwash.png';
import handwashing from '../images/hand_washing.png';
import polishing from '../images/polishing.png';
import insidecleaning from '../images/inside_car_cleaning.png';
import oil from '../images/oil.png';
import cleanengine from '../images/clean-engine.png';
import backarrow from '../images/back.png';
import './Types.css';

const WashingType = ({ history }) => {
  const [serverErrMsg, setServerErrMsg] = useState('');
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = async ({ name, email, password }) => {
    try {
      await signup({ name, email, password });
      history.push('/home');
    } catch (err) {
      setServerErrMsg(err.message);
    }
  };

  return (
    <div className="card">
      <div className="logo">
        <button className="backbtn">
          <img src={backarrow} alt="" />
        </button>
        <img className="logo" src={logo} alt="car" />
      </div>
      <div>
        <button className="VehicleTypebtn">
          <img src={autocarwashing} alt="" /> <h4>auto car washing</h4>
          <h4>20$</h4>
        </button>
        <button className="VehicleTypebtn">
          <img src={handwashing} alt="" />
          <h4>hand washing</h4>
          <h4>50$</h4>
        </button>
      </div>
      <div>
        <button className="VehicleTypebtn">
          <img src={cleanengine} alt="" />
          <h4>clean Engine</h4>
          <h4>60$</h4>
        </button>
        <button className="VehicleTypebtn">
          <img src={oil} alt="" />
          <h4>oil changing</h4>
          <h4>50$</h4>
        </button>
      </div>
      <div>
        <button className="VehicleTypebtn">
          <img src={polishing} alt="" />
          <h4>polishing</h4>
          <h4>100$</h4>
        </button>
        <button className="VehicleTypebtn">
          <img src={insidecleaning} alt="" />
          <h4>inside cleaning</h4>
          <h4>40$</h4>
        </button>
      </div>
    </div>
  );
};

export default WashingType;
