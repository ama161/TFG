import React from 'react';
import Box from '../utils/Box'
import Input from '../utils/Input'
import language from '../../language/language'

class Login extends React.Component{
    constructor(props){
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.state={
            email: '',
            password: '',
        }
    }

    handleLogin(){
        this.props.login(this.state.email, this.state.password, this.props.history)
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
                        onClick={() => this.handleLogin()}
                    >{language[localStorage.language].login}
                    </button>
                </div>
            </Box>
        )
    }
}

export default Login