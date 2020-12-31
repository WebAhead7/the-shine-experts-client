import SignInForm from './components/SignInForm';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
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
      </Switch>
    </Router>
  );
}

export default App;
