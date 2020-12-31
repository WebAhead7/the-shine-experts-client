import React from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../axios/auth';
import logo from '../images/car.png';

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
        <img className="logo" src={logo} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          name="fullname"
          placeholder="Full Name"
          ref={register({ required: true })}
        />
        <input
          className="input"
          name="PhoneNumber"
          placeholder="Phone Number"
          ref={register({ required: true })}
        />
        <input
          className="input"
          name="email"
          placeholder="Email"
          ref={register({ required: true })}
        />
        {errors.email && 'Email is required'}
        <input
          className="input"
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && 'Password is required'}
        <input
          className="input"
          placeholder="Confirm Password"
          name="Confirm-password"
          ref={register({ required: true })}
        />
        {errors.password && 'Password is required'}

        <input className="submit" type="submit" placeholder="LOG IN " />
        <div>
          <p>
            Create New Account ?<a>sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
