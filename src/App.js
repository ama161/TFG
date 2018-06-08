import React, { Component } from 'react';
import firebase from 'firebase';

import './style/main.css';
import language from './language/language';
import Home from "./components/home/Home";
import Router from "./Router";

class App extends Component {
  constructor(){
    super();

    this.state = {
      user: null
    };
  }

  // componentWillMount(){
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.setState({user});
  //   })
  // }

  componentWillReceiveProps(){
    console.log(this.props.user);
  }

  render() {
    return (
      <div className="App">
        <Router/>
      </div>
    );
  }
}

export default App;
