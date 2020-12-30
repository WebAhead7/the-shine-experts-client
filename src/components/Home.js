import React from 'react';
import { logout } from '../axios/auth';
const Home = (props) => {
  const onClick = () => {
    logout();
    props.history.push('/login');
  };
  return (
    <div>
      private route
      <button onClick={onClick}></button>
    </div>
  );
};

export default Home;
