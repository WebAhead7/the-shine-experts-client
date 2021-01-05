import {
  Appointments,
  Entry,
  SignInForm,
  SignUpForm,
  HomeUser,
  HomeBusiness,
  VehicleType,
  WashingType,
  BusinessLocation,
  SuccessfulOrder,
} from './components/pages';

import { PrivateRouteBusiness, PrivateRouteUser } from './components/routes';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignInForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <PrivateRouteUser exact path="/home-user" component={HomeUser} />
        <PrivateRouteBusiness
          exact
          path="/home-business"
          component={HomeBusiness}
        />
        <Route exact path="/appointments" component={Appointments} />
        <Route exact path="/vehicletype" component={VehicleType} />
        <Route exact path="/washingtype" component={WashingType} />
        <Route exact path="/location" component={BusinessLocation} />
        <Route exact path="/successfulorder" component={SuccessfulOrder} />
      </Switch>
    </Router>
  );
}

export default App;
