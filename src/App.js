import React, { Component } from 'react';

import './style/main.css';
import Router from "./Router";

class App extends Component {
  constructor(){
    super();

    this.state = {
      user: null
    };
  }

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
