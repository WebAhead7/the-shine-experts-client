import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { signup } from '../../axios/users';
import { NavLink } from 'react-router-dom';
import logo from '../../images/car.png';

const SignUpForm = ({ history }) => {
  const [serverErrMsg, setServerErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register, errors, handleSubmit, watch } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const validate = (inputName) => {
    if (errors[inputName]) {
      return <p className="validation">{errors[inputName].message}</p>;
    }
  };

  const onSubmit = async ({ name, email, phonenumber, password }) => {
    try {
      setServerErrMsg('');
      setIsLoading(true);
      await signup({ name, email, phonenumber, password });
      history.push('/home');
      setIsLoading(false);
    } catch (err) {
      setServerErrMsg(err.message);
      setIsLoading(false);
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
          type="text"
          name="name"
          placeholder="Name"
          ref={register({
            required: 'You must specify a name',
          })}
        />
        {validate('name')}

        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          ref={register({
            required: 'You must specify an email',
          })}
        />
        {validate('email')}

        <input
          className="input"
          type="tel"
          name="phonenumber"
          placeholder="Phone Number"
          ref={register({
            required: 'You must specify a phone number',
          })}
        />
        {validate('phonenumber')}

        <input
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          ref={register({
            required: 'You must specify a password',
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters',
            },
          })}
        />
        {validate('password')}

        <input
          className="input"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          ref={register({
            validate: (value) =>
              value === password.current || 'The passwords do not match',
          })}
        />
        {validate('password2')}

        <br />
        {serverErrMsg && <p className="validation">{serverErrMsg}</p>}

        <br />

        {isLoading && <p>Loading...</p>}
        <input className="submit" type="submit" placeholder="Sign Up" />
        <div>
          <p>
            Have an Account ? <NavLink to="/">Log In</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
