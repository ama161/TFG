import React from 'react'

class HomeUser extends React.Component{
    constructor(props){
        super(props);

        this.state={
            user: '',
        }
    }

    componentWillMount(){
        let user = JSON.parse(localStorage.userRegisted);
        this.props.onAuthState();
        this.setState({user: user});
        console.log(JSON.parse(localStorage.userRegisted));
    }

    componentWillReceiveProps(nextProps){
        let user = nextProps.onAuthState();
        console.log(user);
    }

    render(){
        return(
            <div>
                <h1>Welcome!!! {this.state.user.email}</h1>
            </div>
        )
    }
}

export default HomeUser;