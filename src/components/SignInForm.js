import React from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../utils/auth';

const SignInForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = ({ email, password }, e) => {
    try {
      login({ email, password });
    } catch (error) {}

    e.target.reset();
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
