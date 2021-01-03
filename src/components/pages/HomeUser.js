import React from 'react';
import { logout } from '../../axios/authUser';
const Home = ({ history }) => {
  const onClick = () => {
    logout();
    history.push('/signin');
  };
  return (
    <div>
      private route
      <button onClick={onClick}>LOG OUT</button>
    </div>
  );
};

export default Home;
