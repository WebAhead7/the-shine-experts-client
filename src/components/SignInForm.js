import React from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../axios/auth';
import './Forms.css';
import '../imges/car.png';

const carlogo = require('../imges/car.png');
const SignInForm = ({ history }) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = async ({ email, password }) => {
    try {
      await login({ email, password });
      history.push('/home');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="forms">
      <div className="logo">
        <img src={require('../imges/car.png')} />
        <img src={carlogo} />
        <h4>The Shine Experts</h4>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          name="email"
          placeholder="Email"
          ref={register({ required: true })}
        />
        {errors.email && 'Email is required'}
        <input
          className="input"
          placeholder="*******"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && 'Password is required'}
        <input className="submit" type="submit" placeholder="LOG IN " />
        <div>
          <p>
            Have An Account ?<a>Log in</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
