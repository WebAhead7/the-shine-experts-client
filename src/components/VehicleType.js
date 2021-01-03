import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signup } from '../axios/users';
import { NavLink } from 'react-router-dom';
import logo from '../images/car.png';
import back from '../images/back.png';
import {
  CarIcon,
  BiggerTruck,
  BigTruck,
  Bus,
  Motorcycle,
  PickupIcon,
} from '../images/vehicleTypes/index';

import './Types.css';

const VehicleType = ({ history }) => {
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
            <img src={back} alt="" />
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
          <img src={CarIcon} alt="" /> <h4>car</h4>
        </button>
        <button className="VehicleTypebtn">
          <img src={Bus} alt="" />
          <h4>bus</h4>
        </button>
      </div>
      <div>
        <button className="VehicleTypebtn">
          <img src={BiggerTruck} alt="biggertruck" />
          <h4>bigger truck</h4>
        </button>
        <button className="VehicleTypebtn">
          <img src={PickupIcon} alt="pickup" />
          <h4>pickup</h4>
        </button>
      </div>
      <div>
        <button className="VehicleTypebtn">
          <img src={BigTruck} alt="bigtruck" />
          <h4>truck</h4>
        </button>
        <button className="VehicleTypebtn">
          <img src={Motorcycle} alt="motorcycle" />
          <h4>motorcycle</h4>
        </button>
      </div>
    </div>
  );
};

export default VehicleType;
