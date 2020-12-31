import React from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../axios/auth';
import './Forms.css';

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
    <div className="login-form">
      <div className="logo">
        <img src="" alt="" />
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
      </form>
      <div>
        <p>
          Create New Account ?<a>sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
