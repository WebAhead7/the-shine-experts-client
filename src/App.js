import SignInForm from './components/SignInForm';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import VehicleType from './components/VehicleType';
import WashingType from './components/WashingType';
import BusinessLocation from './components/BusinessLocation';
import SuccessfulOrder from './components/SuccessfulOrder';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={SignInForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/vehicletype" component={VehicleType} />
        <Route exact path="/washingtype" component={WashingType} />
        <Route exact path="/location" component={BusinessLocation} />
        <Route exact path="/successfulorder" component={SuccessfulOrder} />
      </Switch>
    </Router>
  );
}

export default App;
