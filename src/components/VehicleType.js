import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signup } from '../axios/users';
import { NavLink } from 'react-router-dom';
import logo from '../images/car.png';
import caricon from '../images/caricon.png';
import bus from '../images/bus.png';
import pickupicon from '../images/pickupicon.png';
import motorcycle from '../images/motorcycle.png';
import bigtruck from '../images/bigtruck.png';
import biggertruck from '../images/biggertruck.png';
import backarrow from '../images/back.png';
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
      <div className="logo">
        <button className="backbtn">
          <img src={backarrow} alt="" />
        </button>
        <img className="logo" src={logo} alt="car" />
      </div>
      <div>
        <button className="VehicleTypebtn">
          <img src={caricon} alt="" /> <h4>car</h4>
        </button>
        <button className="VehicleTypebtn">
          <img src={bus} alt="" />
          <h4>bus</h4>
        </button>
      </div>
      <div>
        <button className="VehicleTypebtn">
          <img src={biggertruck} alt="biggertruck" />
          <h4>bigger truck</h4>
        </button>
        <button className="VehicleTypebtn">
          <img src={pickupicon} alt="pickup" />
          <h4>pickup</h4>
        </button>
      </div>
      <div>
        <button className="VehicleTypebtn">
          <img src={bigtruck} alt="bigtruck" />
          <h4>truck</h4>
        </button>
        <button className="VehicleTypebtn">
          <img src={motorcycle} alt="motorcycle" />
          <h4>motorcycle</h4>
        </button>
      </div>
    </div>
  );
};

export default VehicleType;
