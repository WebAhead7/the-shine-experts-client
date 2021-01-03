import SignInForm from './components/SignInForm';
import HomeUser from './components/HomeUser';
import HomeBusiness from './components/HomeBusiness';
import SignUpForm from './components/SignUpForm';
import VehicleType from './components/VehicleType';
import WashingType from './components/WashingType';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRouteUser from './components/routes/PrivateRouteUser';
import PrivateRouteBusiness from './components/routes/PrivateRouteBusiness';
import EntryPage from './components/EntryPage';
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
        <Route exact path="/" component={EntryPage} />
        <Route exact path="/vehicletype" component={VehicleType} />
        <Route exact path="/washingtype" component={WashingType} />
      </Switch>
    </Router>
  );
}

export default App;
