import logo from './logo.svg';
import './App.css';
import Navbar from './component/Nav/Navbar';
import Registration from './component/Account/Registration/Registration';
import Login from './component/Account/Login/Login';
// Jquery
import '../node_modules/jquery/dist/jquery.min.js';
// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/popper.js/dist/popper';
// Router
import { Switch, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Registration} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </>
  );
}

export default App;
