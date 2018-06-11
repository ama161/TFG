import React from 'react'

import {
  HashRouter,
  Route
} from 'react-router-dom'

import Home from './components/home/Home';
import Register from './components/register/RegisterContainer';
import Login from './components/register/LoginContainer';
import HomeUser from './components/homeUser/HomeUser';

const Router = (props) => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/homeUser" component={HomeUser}/>
    </div>
  </HashRouter>
);

export default Router
