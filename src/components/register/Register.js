import React from 'react';
import firebase from 'firebase';
import FileUpload from '../fileUpload/FileUpload';
import { ENGINE_METHOD_DIGESTS } from 'constants';

class Register extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          user: {

          },
          email: '',
          password: ''
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

    render(){
        return(
          <div>
            <input 
              value={this.state.email}
              type="text" 
              placeholder="email" 
              onChange={(event) => this.setState({email: event.target.value})}
              />
            <input 
              value={this.state.password}
              type="password" 
              placeholder="password" 
              onChange={(event) => this.setState({password: event.target.value})}
              />
            <button onClick={() => this.props.register(this.state.email, this.state.password)}>REGISTRARSE</button>
          </div>
        )
    }
}

export default Register;
