import React from 'react';
import { useForm } from 'react-hook-form';
import axios from '../axios';

const SignInForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async ({ email, password }, e) => {
    try {
      const res = await axios.post('/auth', {
        body: {
          email,
          password,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }

    //e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="email" ref={register} />
      <input name="password" ref={register} />

      <input type="submit" />
    </form>
  );
};

export default SignInForm;
