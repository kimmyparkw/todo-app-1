import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AppContextProvider } from './context/AppContext';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import Calendar from './components/Calendar';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <PrivateRoute exact path='/calendar' component={Calendar} />
          <Route exact path='/forgotpassword' component={ForgotPassword} />
          <Route exact path='/updatepassword' component={UpdatePassword} />
          <PrivateRoute exact path='/profile' component={Profile} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
