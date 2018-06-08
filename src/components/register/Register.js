import React from 'react';
import firebase from 'firebase';
import FileUpload from '../fileUpload/FileUpload';
import { ENGINE_METHOD_DIGESTS } from 'constants';
import Box from '../utils/Box'
import Input from '../utils/Input'

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
          <Box>
            <Input 
              className="form-item"
              value={this.state.email}
              type="text" 
              label="email" 
              onChange={(event) => this.setState({email: event.target.value})}
              />
            <Input 
              className="form-item"
              value={this.state.password}
              type="password" 
              label="password" 
              onChange={(event) => this.setState({password: event.target.value})}
              />
            <div className="button-container">
              <button 
                className="button-border" 
                onClick={() => this.props.register(this.state.email, this.state.password)}
              >Registrarse
              </button>
            </div>
          </Box>
        )
    }
}

export default Register;
