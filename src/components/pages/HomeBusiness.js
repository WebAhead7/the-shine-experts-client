import React from 'react';
import { logout } from '../../axios/authBusiness';
const Home = ({ history }) => {
  const onClick = () => {
    logout();
    history.push('/');
  };
  return (
    <div>
      private route
      <button onClick={onClick}>LOG OUT</button>
    </div>
  );
};

export default Home;
