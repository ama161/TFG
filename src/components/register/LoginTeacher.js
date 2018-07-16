import React from 'react';
import Box from '../utils/Box'
import language from '../../language/language'
import Input from '../utils/Input';

class LoginTeacher extends React.Component{
    constructor(props){
        super(props);

        this.handleRegister = this.handleRegister.bind(this);
        this.state={
            email: '',
            password: '',
        }
    }

    handleRegister(){
        this.props.singInWithEmail(window.location.href, this.state.email, this.state.password, this.props.history);
    }

    render(){
        return(
            <Box>
                <h1> Login Teacher </h1>
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
                        onClick={() => this.handleRegister()}
                    >{language[localStorage.language].register}
                    </button>
                </div>
            </Box>
        )
    }
}

export default LoginTeacher