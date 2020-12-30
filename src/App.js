import SignInForm from './components/SignInForm';
import Home from './components/Home';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';
function App() {
  return (
    <Router>
      <Route exact path="/login" component={SignInForm} />
      <PrivateRoute exact path="/home" component={Home} />
    </Router>
  );
}

export default App;
