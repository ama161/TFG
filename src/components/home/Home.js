import React from 'react';
import { withRouter } from 'react-router'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <div>
        <div className="home-buttons">
          <button className="button-fill" onClick={() => this.props.history.push("/register")}>Registro</button>
          <button className="button-fill" onClick={() => this.props.history.push("/login")}>Iniciar sesión</button>
        </div>
      </div>
      
    )
  }
}

export default withRouter(Home)
