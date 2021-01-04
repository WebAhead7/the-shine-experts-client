import React from 'react';
import './Forms.css';

import logo from '../../images/car.png';
import { useSetRecoilState } from 'recoil';
import { appointmentState } from '../../atoms';

const Appointments = ({ history }) => {
  const setTime = useSetRecoilState(appointmentState);
  const options = [
    { label: '10:00', value: 10 },
    { label: '10:30', value: 10.5 },
    { label: '11:00', value: 11 },
    { label: '11:30', value: 11.5 },
    { label: '12:00', value: 12 },
    { label: '12:30', value: 12.5 },
    { label: '13:00', value: 13 },
    { label: '13:30', value: 13.5 },
    { label: '14:00', value: 14 },
    { label: '14:30', value: 14.5 },
    { label: '15:00', value: 15 },
    { label: '15:30', value: 15.5 },
    { label: '16:00', value: 16 },
  ];

  function PickTime(time) {
    setTime(time);
    history.push('/orders');
  }

  // React.useEffect(() => {

  // }, [data]);

  return (
    <div className="card">
      <div className="logo">
        <img className="logo" src={logo} alt="car" />
        <div>
          <h1>Today</h1>
          {options.map((option) => (
            <button onClick={() => PickTime(option.value)}>
              {option.label}
            </button>
          ))}
        </div>
        <div>
          <h1>Tomorrow</h1>
          {options.map((option) => (
            <button onClick={() => PickTime(option.value)}>
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
