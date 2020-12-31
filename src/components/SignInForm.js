import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../axios/auth';
import { NavLink } from 'react-router-dom';
import './Forms.css';

import logo from '../images/car.png';

const SignInForm = ({ history }) => {
  const [isServerError, setIsServerError] = useState(false);
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = async ({ email, password }) => {
    try {
      await login({ email, password });
      history.push('/home');
    } catch (err) {
      setIsServerError(true);
    }
  };

  return (
    <div className="card">
      <div className="logo">
        <img className="logo" src={logo} alt="car" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          ref={register({ required: true })}
        />
        {errors.email && 'Email is required'}
        <input
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && 'Password is required'}
        <br />
        {isServerError && 'Email or password are wrong'}
        <input className="submit" type="submit" placeholder="LOG IN " />
        <div>
          <p>
            Don't Have An Account ? <NavLink to="/signup">Sign Up</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
