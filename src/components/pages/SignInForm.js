import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../axios/authUser';
import { loginBusiness } from '../../axios/authBusiness';
import { NavLink } from 'react-router-dom';

import './Forms.css';

import { Car as Logo } from '../../images/index';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { typeState } from '../../atoms';

const SignInForm = ({ history }) => {
  const type = useRecoilValue(typeState);

  const [serverErrMsg, setServerErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = async ({ email, password }) => {
    try {
      setServerErrMsg('');
      setIsLoading(true);

      if (type === 'user') {
        await loginUser({ email, password });
        history.push('/vehicletype');
      }
      if (type === 'business') {
        await loginBusiness({ email, password });
        history.push('/schedule');
      }

      setIsLoading(false);
    } catch (err) {
      setServerErrMsg(err.message);
      setIsLoading(false);
    }
  };

  const validate = (inputName) => {
    if (errors[inputName]) {
      return <p className="validation">{errors[inputName].message}</p>;
    }
  };

  const setType = useSetRecoilState(typeState);

  const changeBodyColor = (type) => {
    const body = document.querySelector('body');
    const userBackgroud =
      'linear-gradient(to right, #002027, #c471ed, #002027)';
    const businessBackground =
      'linear-gradient(to right, #002027, #2b1138, #002027)';
    switch (type) {
      case 'user': {
        body.style.background = userBackgroud;
        break;
      }

      case 'business': {
        body.style.background = businessBackground;
        break;
      }
      default:
        break;
    }
  };

  const onClick = (e) => {
    e.preventDefault();
    const type = e.target.value;
    setType(type);
    changeBodyColor(type);
  };

  return (
    <div className="card">
      <div className="logo">
        <img className="logo" src={Logo} alt="car" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="type-btn-div">
          <button className="type-btn" onClick={onClick} value="user">
            User
          </button>
          <button className="type-btn" onClick={onClick} value="business">
            Business
          </button>
        </div>
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
          type="password"
          placeholder="Password"
          name="password"
          ref={register({
            required: 'You must specify a password',
          })}
        />
        {validate('password')}

        <br />

        {serverErrMsg && <p className="validation">{serverErrMsg}</p>}

        <br />

        {isLoading && <p>Loading...</p>}

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
