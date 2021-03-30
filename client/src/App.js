import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import PromiseState from './context/promise/PromiseState';
import AuthState from './context/auth/AuthState';
import './App.css';

function App() {
  return (
    <AuthState>
      <PromiseState>
        <Router>
          <Fragment>
            <Navbar/>
            <div className="container">
              <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/login' component={Login}/>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </PromiseState>
    </AuthState>
  );
}

export default App;
