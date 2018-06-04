import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <div>
        <a href="/#/register">Registro</a>
        <a href="/#/login">Iniciar sesión</a>
      </div>
    )
  }
}

export default Home
