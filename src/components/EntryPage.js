import React from 'react';
import './Forms.css';

import logo from '../images/car.png';

const EntryPage = ({ history }) => {
  const [userType, setuserType] = React.useState('user');

  function PickType(fortype) {
    setuserType(fortype);
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

export default EntryPage;
