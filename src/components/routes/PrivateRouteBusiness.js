import { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getLoggedInBusiness } from '../../axios/authBusiness';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [info, setInfo] = useState({
    auth: false,
    loading: true,
  });

  useEffect(() => {
    const checkIfAuth = async () => {
      try {
        await getLoggedInBusiness();
        setInfo({
          auth: true,
          loading: false,
        });
      } catch (error) {
        setInfo({
          auth: false,
          loading: false,
        });
      }
    };

    if (localStorage.getItem('token')) {
      checkIfAuth();
    } else {
      setInfo({
        auth: false,
        loading: false,
      });
    }
  }, []);

  if (info.loading) {
    return <h1>loading...</h1>;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        if (info.auth) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    ></Route>
  );
};

export default PrivateRoute;
