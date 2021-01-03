import SignInForm from './components/pages/SignInForm';
import HomeUser from './components/pages/HomeUser';
import HomeBusiness from './components/pages/HomeBusiness';
import SignUpForm from './components/pages/SignUpForm';
import VehicleType from './components/pages/VehicleType';
import WashingType from './components/pages/WashingType';
import Entry from './components/pages/Entry';

import PrivateRouteUser from './components/routes/PrivateRouteUser';
import PrivateRouteBusiness from './components/routes/PrivateRouteBusiness';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignInForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <PrivateRouteUser exact path="/home-user" component={HomeUser} />
        <PrivateRouteBusiness
          exact
          path="/home-business"
          component={HomeBusiness}
        />
        <Route exact path="/" component={Entry} />
        <Route exact path="/vehicletype" component={VehicleType} />
        <Route exact path="/washingtype" component={WashingType} />
      </Switch>
    </Router>
  );
}

export default App;
