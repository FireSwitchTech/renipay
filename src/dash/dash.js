import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown'
import toast from 'toasted-notes'
import { Link, withRouter } from 'react-router-dom';
import DashNav from './dashNav'
import '../css/dash.css'

class Dash extends Component {
  render(){
  return (
<div>
<div class="container-fluid">
      <div class="row">
<DashNav />
<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

</main>

</div>
</div>
</div>
  );
  }
}

export default Dash;
