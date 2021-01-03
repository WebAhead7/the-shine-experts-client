import SignInForm from './components/SignInForm';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import VehicleType from './components/VehicleType';
import WashingType from './components/WashingType';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';
import EntryPage from './components/EntryPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={SignInForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/" component={EntryPage} />
        <Route exact path="/vehicletype" component={VehicleType} />
        <Route exact path="/washingtype" component={WashingType} />
      </Switch>
    </Router>
  );
}

export default App;
