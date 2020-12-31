import React from 'react';
import { logout } from '../axios/auth';
const Home = ({ history }) => {
  const onClick = () => {
    logout();
    history.push('/login');
  };
  return (
    <div>
      private route
      <button onClick={onClick}></button>
    </div>
  );
};

export default Home;
