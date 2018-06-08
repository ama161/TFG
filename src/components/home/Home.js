import React from 'react';
import firebase from 'firebase';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  logout(){
    firebase.auth().signOut()
      .then(() => console.log('adios'))
      .catch((error) => console.log(error))
  }

  render(){
    return(
      <div>
        <a href="/#/register">Registro</a>
        <a href="/#/login">Iniciar sesión</a>
        <button onClick={this.logout}>CERRAR SESION</button>
      </div>
    )
  }
}

export default Home
