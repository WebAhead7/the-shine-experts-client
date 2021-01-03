import React from 'react';
import './Forms.css';

import logo from '../../images/car.png';

import { useRecoilState } from 'recoil';
import { typeState } from '../../atoms';

const Entry = ({ history }) => {
  const [, setType] = useRecoilState(typeState);

  function PickType(type) {
    setType(type);
    history.push('/signin');
  }
  return (
    <div className="card">
      <div className="logo">
        <img className="logo" src={logo} alt="car" />
        <button onClick={() => PickType('user')}>User</button>
        <button onClick={() => PickType('business')}>Business</button>
      </div>
    </div>
  );
};

export default Entry;
