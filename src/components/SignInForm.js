import React from 'react';
import { useForm } from 'react-hook-form';
import axios from '../axios';

const SignInForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = async ({ email, password }, e) => {
    try {
      const {
        data: { token },
      } = await axios.post('/auth', {
        email,
        password,
      });

      localStorage.setItem('token', token);

      console.log(token);
    } catch (err) {
      const msg = err.response.data.msg;
      console.log(msg);
    }

    //e.target.reset();
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
