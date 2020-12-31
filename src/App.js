import SignInForm from './components/SignInForm';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={SignInForm} />
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
