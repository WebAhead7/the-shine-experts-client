import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signup } from '../axios/users';
import { NavLink } from 'react-router-dom';
import logo from '../images/car.png';

const SignInForm = ({ history }) => {
  const [serverErrMsg, setServerErrMsg] = useState('');
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = async ({ name, email, password }) => {
    try {
      await signup({ name, email, password });
      history.push('/home');
    } catch (err) {
      setServerErrMsg(err.message);
    }
  };

  return (
    <div className="forms">
      <div className="logo">
        <img className="logo" src={logo} alt="car" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Name"
          ref={register({ required: true })}
        />
        {errors.name && 'Name is required'}
        <input
          className="input"
          type="tel"
          name="phonenumber"
          placeholder="Phone Number"
          ref={register({ required: true })}
        />
        {errors.phonenumber && 'Phone number is required'}
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
          name="password1"
          ref={register({ required: true })}
        />
        {errors.password && 'Password is required'}
        <input
          className="input"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          ref={register({ required: true })}
        />
        {errors.password && 'Password is required'}
        <br />
        {serverErrMsg}

        <input className="submit" type="submit" placeholder="Sign Up" />
        <div>
          <p>
            Have an Account ? <NavLink to="/signin">Sign In</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
