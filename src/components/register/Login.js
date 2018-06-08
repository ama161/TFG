import React from 'react';
import firebase from 'firebase';
import Box from '../utils/Box'
import Input from '../utils/Input'

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: '',
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
                        onClick={() => this.props.login(this.state.email, this.state.password)}
                    >Iniciar sesión
                    </button>
                </div>
            </Box>
        )
    }
}

export default Login