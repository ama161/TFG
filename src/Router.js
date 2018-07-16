import React from 'react'

import {
  HashRouter,
  Route
} from 'react-router-dom'

import Home from './components/home/HomeContainer';
import Register from './components/register/RegisterContainer';
import Login from './components/register/LoginContainer';
import HomeUser from './components/homeUser/HomeUserContainer';
import HomeTeacher from './components/homeTeacher/HomeTeacher';
import HomeAdmin from './components/homeAdmin/HomeAdmin';

const Router = (props) => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/homeUser" component={HomeUser}/>
      <Route exact path="/homeAdmin" component={HomeAdmin}/>
      <Route exact path="/homeTeacher" component={HomeTeacher}/>
    </div>
  </HashRouter>
);

export default Router
