import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signup } from '../axios/users';
import { NavLink } from 'react-router-dom';
import logo from '../images/car.png';
import {
  AutoCarWash,
  CleanEngine,
  HandWashing,
  InsideCarCleaning,
  Oil,
  Polishing,
} from '../images/washingTypes/index';
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
          <button>logout</button>
        </div>
      </div>
      <div>
        <button className="VehicleTypebtn">
          <img src={AutoCarWash} alt="" /> <h4>auto car washing</h4>
          <h4>20$</h4>
        </button>
        <button className="VehicleTypebtn">
          <img src={HandWashing} alt="" />
          <h4>hand washing</h4>
          <h4>50$</h4>
        </button>
      </div>
      <div>
        <button className="VehicleTypebtn">
          <img src={CleanEngine} alt="" />
          <h4>clean Engine</h4>
          <h4>60$</h4>
        </button>
        <button className="VehicleTypebtn">
          <img src={Oil} alt="" />
          <h4>oil changing</h4>
          <h4>50$</h4>
        </button>
      </div>
      <div>
        <button className="VehicleTypebtn">
          <img src={Polishing} alt="" />
          <h4>polishing</h4>
          <h4>100$</h4>
        </button>
        <button className="VehicleTypebtn">
          <img src={InsideCarCleaning} alt="" />
          <h4>inside cleaning</h4>
          <h4>40$</h4>
        </button>
      </div>
    </div>
  );
};

export default WashingType;
