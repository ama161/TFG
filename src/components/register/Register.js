import React from 'react';
import firebase from 'firebase';
import FileUpload from '../fileUpload/FileUpload';

class Register extends React.Component{
    constructor(props){
        super(props);

        this.handleAuth = this.handleAuth.bind(this);

        this.state = {
          user: {}
        }
    }

    componentWillMount(){
      firebase.auth().onAuthStateChanged(user => {
        this.setState({user});
      })
    }
    
    componentWillReceiveProps(){
        console.log(this.props.user);
        if(this.props.user){
          this.setState({user: this.props.user})
        }
    }

    handleAuth(){
      this.props.loginAuth();
    }

    render(){
        return(
          <div>
            {(this.state.user)
              ? <div>
                  <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
                  <p> Hola {this.state.user.displayName} </p>
                  <button onClick={() => console.log('salir')}>Salir</button>
                  <FileUpload />
                </div>
              : <button onClick={this.handleAuth}>Login con Google</button>
            }
          </div>
        )
    }
}

export default Register;
