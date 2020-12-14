import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AppContextProvider } from './context/AppContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
