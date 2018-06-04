import React, { Component } from 'react';
import firebase from 'firebase';

import './stylesheets/main.scss';
import language from './language/language';
import Home from "./components/home/Home";
import Router from "./Router";

class App extends Component {
  constructor(){
    super();

    // this.handleAuth = this.handleAuth.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
    // this.renderLoginButton = this.renderLoginButton.bind(this);

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

  // handleLogout(){
  //   firebase.auth().signOut()
  //     .then(result => {
  //       console.log(`${this.state.user.email} ha cerrado sesión`);
  //     })
  //     .catch(error => console.log('Error'));
  // }

  // renderLoginButton(){
  //   if(this.state.user){
  //     return (
  //       <div>
  //         <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
  //         <p> Hola {this.state.user.displayName} </p>
  //         <button onClick={this.handleLogout}>Salir</button>
  //         <FileUpload />
  //       </div>
  //     );
  //   } else{
  //     return <Register/>;
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Router/>
      </div>
    );
  }
}

export default App;
