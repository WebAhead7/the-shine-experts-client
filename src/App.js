import {
  Appointments,
  SignInForm,
  SignUpForm,
  HomeUser,
  HomeBusiness,
  VehicleType,
  WashingType,
  BusinessLocation,
  SuccessfulOrder,
  Confirmation,
  BusinessSchedule,
} from './components/pages';

import { PrivateRouteBusiness, PrivateRouteUser } from './components/routes';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignInForm} />
        <Route exact path="/signin" component={SignInForm} />
        <Route exact path="/signup" component={SignUpForm} />

        <PrivateRouteUser exact path="/home-user" component={HomeUser} />
        <PrivateRouteUser exact path="/appointments" component={Appointments} />
        <PrivateRouteUser exact path="/vehicletype" component={VehicleType} />
        <PrivateRouteUser exact path="/washingtype" component={WashingType} />
        <PrivateRouteUser exact path="/location" component={BusinessLocation} />
        <PrivateRouteUser exact path="/confirmation" component={Confirmation} />
        <PrivateRouteUser
          exact
          path="/successfulorder"
          component={SuccessfulOrder}
        />

        <PrivateRouteBusiness
          exact
          path="/home-business"
          component={HomeBusiness}
        />

        <PrivateRouteBusiness
          exact
          path="/schedule"
          component={BusinessSchedule}
        />
      </Switch>
    </Router>
  );
}

export default App;
