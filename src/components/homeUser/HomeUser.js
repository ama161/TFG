import React from 'react'

class HomeUser extends React.Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    componentDidMount(){
        let user = this.props.onAuthState();
        console.log(user);
    }

    componentWillReceiveProps(nextProps){
        let user = nextProps.onAuthState();
        console.log(user);
    }

    render(){
        return(
            <div>
                <h1>Welcome!!!</h1>
            </div>
        )
    }
}

export default HomeUser;