import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './landing/landing'
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown'
import About from './landing/about'
import NewAccount from './landing/new-account'
import Login from './landing/login'
import Dash from './dash/dash'

class App extends Component {
  render(){
  return (
    <div className="App">
<BrowserRouter>
<Switch>
  <Route  path="/" component={Landing} exact />
  <Route  path="/about" component={About} exact />
  <Route  path="/new-account" component={NewAccount} exact />
  <Route  path="/login" component={Login} exact />
  <Route  path="/dashboard" component={Dash} exact />
</Switch>
</BrowserRouter>

    </div>
  );
}
}

export default App;
