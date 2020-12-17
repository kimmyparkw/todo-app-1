import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AppContextProvider } from './context/AppContext';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import Calendar from './components/Calendar';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <PrivateRoute exact path='/calendar' component={Calendar} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
