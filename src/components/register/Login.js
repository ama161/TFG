import React from 'react';
import firebase from 'firebase';
import Box from '../utils/Box'

class Login extends React.Component{
    constructor(props){
        super(props);

        // this.handleClick = this.handleClick.bind(this);
        this.state={
            email: '',
            password: '',
        }
    }

    // handleClick(){
    //     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    //     .then(() => console.log('todo bien'))
    //     .catch((error) => {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       console.log(errorCode + " " + errorMessage);
    //     });
    // }

    // componentWillMount(){
    //     firebase.auth().onAuthStateChanged(function(user) {
    //         if (user) {
    //             console.log("usuario activo");
    //             console.log(user);
    //           // User is signed in.
    //           var displayName = user.displayName;
    //           var email = user.email;
    //           var emailVerified = user.emailVerified;
    //           var photoURL = user.photoURL;
    //           var isAnonymous = user.isAnonymous;
    //           var uid = user.uid;
    //           var providerData = user.providerData;
    //           // ...
    //         } else {
    //             console.log("no usuario activo");
                
    //           // User is signed out.
    //           // ...
    //         }
    //       });
    // }

    render(){
        return(
            <div>
                <Box>
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
                    <button onClick={() => this.props.login(this.state.email, this.state.password)}>LOGIN</button>
                </Box>
            </div>
        )
    }
}

export default Login