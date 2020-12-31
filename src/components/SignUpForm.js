import React from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../axios/auth';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="email" ref={register({ required: true })} />
      {errors.email && 'Email is required'}
      <input name="password" ref={register({ required: true })} />
      {errors.password && 'Password is required'}
      <input type="submit" />
    </form>
  );
};

export default SignInForm;
